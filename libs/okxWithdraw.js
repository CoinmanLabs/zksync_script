import CryptoJS from "crypto-js";
import axios from "axios";
import dotenv from "dotenv";
import { readAccounts } from './readAccounts.js';
import { OKX_API_KEY, OKX_SECRET_KEY, OKX_PASS_PHRASE } from '../config/index.js'
dotenv.config();

const apiKey = process.env.OKX_API_KEY ?? OKX_API_KEY;
const secretKey = process.env.OKX_SECRET_KEY ?? OKX_SECRET_KEY;
const passPhrase = process.env.OKX_PASS_PHRASE ?? OKX_PASS_PHRASE;

async function getCurrencies(ccy = "ETH") {
  if (apiKey.indexOf('xxx') !== -1) throw new Error('ERROR：OKX_API_KEY');
  if (secretKey.indexOf('xxx') !== -1) throw new Error('ERROR：OKX_SECRET_KEY');
  if (passPhrase.indexOf('xxx') !== -1) throw new Error('ERROR：OKX_PASS_PHRASE');
  const timestamp = new Date().toISOString();
  const path = `/api/v5/asset/currencies?ccy=${ccy}`;
  const sign = CryptoJS.enc.Base64.stringify(
    CryptoJS.HmacSHA256(timestamp + "GET" + path, secretKey)
  );
  try {
    let result = await axios.get(`https://aws.okx.com${path}`, {
      headers: {
        "OK-ACCESS-KEY": apiKey,
        "OK-ACCESS-SIGN": sign,
        "OK-ACCESS-TIMESTAMP": timestamp,
        "OK-ACCESS-PASSPHRASE": passPhrase,
        "Content-Type": "application/json",
      },
    });
    console.log(`获取${ccy}手续费成功：Get ${ccy} fee successfully`);
    const chain = result.data.data.filter((coin) => coin.chain === "ETH-ERC20");
    return chain[0].minFee;
  } catch (error) {
    console.log(`获取${ccy}手续费失败：Failed to get ${ccy} fee`, error);
  }
}

export async function withdraw(ccy = "ETH", amt = 0.05, fee = 0, toAdds = []) {
  const path = `/api/v5/asset/withdrawal`;
  for (let i = 0; i < toAdds.length; i++) {
    await new Promise((resolve) => setTimeout(resolve, 10000));
    const withdrawParams = {
      ccy,
      dest: 4,
      amt,
      toAddr: toAdds[i].address,
      fee,
      chain: "ETH-ERC20",
    };

    const timestamp = new Date().toISOString();
    const sign = CryptoJS.enc.Base64.stringify(
      CryptoJS.HmacSHA256(
        timestamp + "POST" + path + JSON.stringify(withdrawParams),
        secretKey
      )
    );
    try {
      let result = await axios.post(
        `https://aws.okx.com${path}`,
        withdrawParams,
        {
          headers: {
            "OK-ACCESS-KEY": apiKey,
            "OK-ACCESS-SIGN": sign,
            "OK-ACCESS-TIMESTAMP": timestamp,
            "OK-ACCESS-PASSPHRASE": passPhrase,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(`successful 成功 ${i}：`, result.data.msg);
    } catch (error) {
      console.log(`Failure 失败：${i}`, error);
    }
  }
}

export async function main() {
  const start = +new Date();
  console.log("Withdrawal starts，提现交易开始...");
  try {
    let accounts = readAccounts();
    const fee = await getCurrencies();
    await withdraw("ETH", 0.02, fee, accounts);
  } catch (error) {
    console.log("Withdrawal failed:提现失败...", error);
  }
  const end = +new Date();
  console.log(`提现交易结束,Withdrawal is over,，共耗时 Time consuming: ${end - start}ms`);
}
export default main;
main();

import * as zksync from "zksync-web3js";
import * as ethers from "ethers";
import { privates } from '../../libs/getPrivates.js'

const zkSyncProvider = new zksync.Provider("https://mainnet.era.zksync.io");


const ethProvider = ethers.getDefaultProvider();


export async function mainnet2era(private_keys, value = 50) {
  for (let i = 0; i < private_keys.length; i++) {
    const zkSyncWallet = new zksync.Wallet(
      private_keys[i],
      zkSyncProvider,
      ethProvider
    );
    try {
      const deposit = await zkSyncWallet.deposit({
        token: zksync.utils.ETH_ADDRESS,
        amount: ethers.utils.parseEther(
          String((value + Number(Math.random().toFixed(2))) / 1000)
        ),
      });
      console.log("deposit to zkSync result...", deposit);
      const ethereumTxReceipt = await deposit.waitL1Commit();
      console.log("ethereum deposit result...", ethereumTxReceipt);
    } catch (error) {
      console.log("deposit failed...", error);
    }
  }
}

mainnet2era(privates);

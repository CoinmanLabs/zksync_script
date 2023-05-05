import * as zksync from "zksync";
import * as ethers from "ethers";
import dotenv from "dotenv";
import cids from "./cids.js";
import web3Utils from "web3-utils";
import { privates } from '../../libs/getPrivates.js'
import { zksyncLiteMintNumber } from '../../config/index.js'

dotenv.config();


const syncProvider = await zksync.getDefaultProvider('mainnet');
const ethersProvider = await ethers.getDefaultProvider('mainnet');

const mintNFT = async (privateKey, contentHash) => {
  try {
    const signer = new ethers.Wallet(privateKey, ethersProvider);
    const syncWallet = await zksync.Wallet.fromEthSigner(signer, syncProvider);
    const [isSigningKeySet, getAccountId] = await Promise.all([
      syncWallet.isSigningKeySet(),
      syncWallet.getAccountId()
    ])
    if (!isSigningKeySet) {
      if (getAccountId == undefined) {
        throw new Error('Unknown account');
      }
      await syncWallet.setSigningKey({
        feeToken: 'ETH',
        ethAuthType: 'ECDSA'
      });
    }


    const address = syncWallet.address();
    const { totalFee: fee } = await syncProvider.getTransactionFee(
      "MintNFT",
      address,
      'ETH'
    );

    const { state, txHash } = await syncWallet.mintNFT({
      contentHash,
      recipient: address,
      feeToken: 'ETH',
      fee,
    });

    console.log(`State: ${state}, TxHash: ${txHash}`);
  } catch (error) {
    console.log("mint failed...", error);
  }
};

const main = async (privateKeys, cids) => {
  for (let index = 0; index < privateKeys.length; index++) {
    const privateKey = privateKeys[index];

    const num = zksyncLiteMintNumber[0]
    let randomIndex = [];
    for (let i = 0; i < cids.length; i++) {
      randomIndex.push(i);
    }
    randomIndex = randomIndex.sort(() => Math.random() - 0.5);
    for (let exponent = 0; exponent < num; exponent++) {
      const CID = cids[randomIndex[exponent]].CID;
      const nftIdentifier = "0x" + web3Utils.soliditySha3(CID).slice(2);
      await mintNFT(privateKey, nftIdentifier);
    }
  }
};

main(privates, cids);

export default main;

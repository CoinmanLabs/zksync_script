import * as zksync from "zksync";
import * as ethers from "ethers";
import dotenv from "dotenv";
import { privates } from '../../libs/getPrivates.js'

dotenv.config();


const syncProvider = await zksync.getDefaultProvider('mainnet');
const ethersProvider = ethers.getDefaultProvider('mainnet')


export async function mainnet2lite(private_keys, value = 50) {
  for (let i = 0; i < private_keys.length; i++) {

    // Create ethereum wallet using ethers.js
    const signer = new ethers.Wallet(private_keys[i], ethersProvider);

    // Derive zksync.Signer from ethereum wallet.
    const syncWallet = await zksync.Wallet.fromEthSigner(signer, syncProvider);

    try {
      // const deposit = await syncWallet.depositToSyncFromEthereum({
      //   depositTo: syncWallet.address(),
      //   token: 'ETH',
      //   amount: ethers.utils.parseEther(String((value + Number(Math.random().toFixed(2))) / 1000))
      // });
      // console.log("deposit to lite result...");

      // // // Await processing of the deposit on L1
      // const depositReceipt = await deposit.awaitReceipt();
      // console.log("lite confirmation result...", depositReceipt);

      if (!(await syncWallet.isSigningKeySet())) {
        if ((await syncWallet.getAccountId()) == undefined) {
          throw new Error('Unknown account');
        }
      
        // As any other kind of transaction, `ChangePubKey` transaction requires fee.
        // User doesn't have (but can) to specify the fee amount. If omitted, library will query zkSync node for
        // the lowest possible amount.
        // const changePubkey = await 
        console.log("start setSigningKey...");

        syncWallet.setSigningKey({
          feeToken: 'ETH',
          ethAuthType: 'ECDSA'
        });
      
        // Wait until the tx is committed
        // await changePubkey.awaitReceipt();
      }
    } catch (error) {
      console.log("deposit failed...", error);
    }
  }
}

mainnet2lite(privates);



import * as zksync from "zksync";
import * as ethers from "ethers";
import { privates } from '../../libs/getPrivates.js'
import { zksyncLiteTransferNumber } from '../../config/index.js'


export const transfer = async ({ privateKey, amount, tokenSymbol = 'ETH', recipientAddress }) => {
    try {
        const syncProvider = await zksync.getDefaultProvider('mainnet');
        const ethersProvider = await ethers.getDefaultProvider('mainnet')
        const signer = new ethers.Wallet(privateKey, ethersProvider);
        const syncWallet = await zksync.Wallet.fromEthSigner(signer, syncProvider);

        const to = recipientAddress ?? syncWallet.address()

        const _amount = ethers.utils.parseUnits(amount.toString(), 18);
        const transfer = await syncWallet.syncTransfer({
            to,
            token: tokenSymbol,
            amount: _amount,
        });

        // Wait for the transaction to be confirmed
        await transfer.awaitReceipt();
    } catch (error) {
        console.log("transfer failed...", error);
    }
}

export const main = async (privateKeys, amount) => {
    for (let index = 0; index < privateKeys.length; index++) {
        const privateKey = privateKeys[index];
        const num = zksyncLiteTransferNumber[0]
        for (let exponent = 0; exponent < num; exponent++) {
            await transfer({
                privateKey,
                amount
            })
        }
    }
}

main(privates, zksyncLiteTransferNumber[1]);

export default main;
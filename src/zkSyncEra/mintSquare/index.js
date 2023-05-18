
import Web3 from 'web3'
import * as zksync from "zksync-web3js";
import ABI from './ABI'
import cids from './cids'
import { zksyncEraMintNumber } from '../../../config/index.js'
import { privates } from '../../../libs/getPrivates.js'

const zkSyncProvider = new zksync.Provider('https://mainnet.era.zksync.io');
const ethProvider = ethers.getDefaultProvider('mainnet');

export const web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.era.zksync.io'))

export const mint = async (privateKey, cid) => {
    try {
        new zksync.Wallet(privateKey, zkSyncProvider, ethProvider);
        const { address: from } = web3.eth.accounts.privateKeyToAccount(privateKey);
        const nonce = await new web3.eth.getTransactionCount(from)
        const contract = new web3.eth.Contract(ABI, '0x53eC17BD635F7A54B3551E76Fd53Db8881028fC3')
        const data = contract.methods['mint'](cid).encodeABI()
        const txs = {
            to: '0x53eC17BD635F7A54B3551E76Fd53Db8881028fC3',
            from,
            nonce,
            data,
            gasPrice: `250000000`,
            gas: `3385066`,
        }
        const signedTx = await web3.eth.accounts.signTransaction(txs, privateKey)
        const { transactionHash } = await web3.eth.sendSignedTransaction(signedTx.rawTransaction)
        console.log(transactionHash, 'transactionHash');
    } catch (error) {
        console.log("mint failed...", error);
    }
}

const main = async (privateKeys, cids) => {
    for (let index = 0; index < privateKeys.length; index++) {
        const privateKey = privateKeys[index];
        let randomIndex = [];
        for (let i = 0; i < cids.length; i++) {
            randomIndex.push(i);
        }
        randomIndex = randomIndex.sort(() => Math.random() - 0.5);

        for (let exponent = 0; exponent < zksyncEraMintNumber; exponent++) {
            const CID = cids[randomIndex[exponent]].CID
            await mint(privateKey, CID)
        }
    }
}

main(privates, cids);
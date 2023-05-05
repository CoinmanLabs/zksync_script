import { ethers } from "ethers";
import dayjs from 'dayjs';
import fs from 'fs'
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { createWalletNumber } from '../config/index.js'

const __dirname = dirname(fileURLToPath(import.meta.url));

export function createWallet(number = createWalletNumber) {
    const wallets = []
    for (let i = 0; i < number; i++) {
        const { privateKey, address } = ethers.Wallet.createRandom();
        wallets.push({
            index: i + 1,
            address,
            privateKey
        })
    }
    const date = dayjs().format('YYYY-MM-DD');
    const basePath = join(__dirname, '../accounts', `${date}_${Date.now()}.js`);
    fs.writeFileSync(basePath, JSON.stringify(wallets, null, "    "));
}
createWallet()

export default createWallet;

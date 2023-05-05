import fs from 'fs'
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';


const __dirname = dirname(fileURLToPath(import.meta.url));


export function readAccounts() {
    const basePath = join(__dirname, '../accounts');
    const dirs = fs.readdirSync(basePath)
    const accounts = [];
    if (dirs && dirs.length > 0) {
        for (let index = 0; index < dirs.length; index++) {
            const element = dirs[index];
            const filePath = basePath + '/' + element
            const file = fs.readFileSync(filePath, 'utf-8')
            const regex = /\/\/.*$|\/\*[\s\S]*?\*\//gm;
            const data = file.replace(regex, '').replace(/\s+/g, '').replace(/,(?=\s*?[\]}])/g, '');
            const arr = JSON.parse(data)
            accounts.push(...arr)
        }
    }
    return accounts;
}
export default readAccounts;
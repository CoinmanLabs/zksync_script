import readAccounts from './readAccounts.js'

export const accounts = readAccounts()
export const privates = accounts.map(i => i.privateKey)
export default privates
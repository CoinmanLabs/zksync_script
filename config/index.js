/**
 * 如果进行批量创建钱包，请配置创建钱包的数量
 * Create wallets in batches
 */
export const createWalletNumber = 5;


/**
 * 如果需要批量从OKX提现到accounts文件夹下的钱包账户，则需要配置API密钥和API密钥密码
 */
export const OKX_API_KEY = 'xxx'
export const OKX_SECRET_KEY = 'xxx'
export const OKX_PASS_PHRASE = 'xxx'


/**
 * zksync era 网络 mint nft ，accounts文件夹下的钱包账户每个mint 几个nft
 * eg.0xD7545C410be4343E44Df1D7ED58914854b7f96BE 账户 mint 一个nft ,zksyncEraMintNumber = 1
 */
export const zksyncEraMintNumber = 1;


/**
 * zksync era 网络 自己给自己转账，主要批量刷交互次数，也就是nonce
 * zksync era 网络 自己给自己转账 ，accounts文件夹下的钱包账户,每个自己给自己转账几次，每次转账多少个eth
 * eg.0xD7545C410be4343E44Df1D7ED58914854b7f96BE 自己给自己转账一次,每次转账0.0001 ，则 zksyncEraTransferNumber = [1,0.001]
 */
export const zksyncEraTransferNumber = [1, 0.001]


/**
 * zksync lite 网络 mint nft ，accounts文件夹下的钱包账户每个mint 几个nft
 * eg.0xD7545C410be4343E44Df1D7ED58914854b7f96BE 账户 mint 一个nft ,zksyncLiteMintNumber = 1
 */
export const zksyncLiteMintNumber = 1;


/**
 * zksync lite 网络 自己给自己转账，主要批量刷交互次数，也就是nonce
 * zksync lite 网络 自己给自己转账 ，accounts文件夹下的钱包账户,每个自己给自己转账几次，每次转账多少个eth
 * eg.0xD7545C410be4343E44Df1D7ED58914854b7f96BE 自己给自己转账一次,每次转账0.0001 ，则 zksyncLiteTransferNumber = [1,0.001]
 */
export const zksyncLiteTransferNumber = [1, 0.001]
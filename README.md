# ZkSync [Era、Lite]网络批量刷空投脚本(ZkSync [Era, Lite] Network Batch Airdrop Script)

<p align="left">
<a href="./README.md">简体中文</a> ||   <a href="./README.en.md">English</a>
</p>

## 脚本能力

- [√] 批量创建账号
- [√] 批量使用 OKX 交易所进行批量转账到链上钱包
- [√] zksync lite 网络批量执行转账
- [√] zksync lite 网络批量 Mint NFT
- [√] zksync lite 网络批量进行跨链；eth 网络=>zksync lite 网络
- [√] zksync lite 批量查询网络网络交互次数
- [√] zksync era 网络批量执行转账
- [√] zksync era 网络批量 Mint NFT
- [√] zksync era 网络批量进行跨链；eth 网络=>zksync era 网络
- [√] zksync era 批量查询网络交互次数

## 运行步骤

1. 根据系统进行下载安装 Node，自行搜索教程安装 (https://nodejs.cn/download/)
2. 打开终端(命令行)窗口，如果不会看教程
   - mac 系统教程（https://mirror.xyz/0x0d6B556e8132c52be295e4da4DAD26f969e1D759/bQ_JRIZL-ghl6pA3OzRlE3186PIK-F9PXB6OYTMfl8U）
   - window 系统教程（https://mirror.xyz/0xEDdDDc427e707b8dB90ee48dd55bED506DD5840d/l__nLWUs6mL1qAYL59VA4TBCX2xHFCe5oTnRkheip1I）
3. 安装脚本需要的依赖包，在终端(命令行)窗口输入`npm i`
4. 打开 zksync_srcipt 文件夹下的`config`文件夹`index.js`文件，配置相关参数
5. 打开 zksync_srcipt 文件夹下的`accounts`文件夹,文件示例进行配置导入账户相关信息，如果没有请运行脚本命令`create-wallet`进行批量创建钱包账户
6. 在终端(命令行)窗口，运行脚本
   - zksync era 网络 批量自己给自己转账，刷交互次数运行命令： `npm run zksync-era-transfer`
   - zksync era 网络 批量跨链(eth 网络=>zksync era 网络)运行命令： `npm run zksync-era-bridge`
   - zksync era 网络 批量 mint nft 运行命令： `npm run zksync-era-mint-nft`
   - zksync lite 网络 批量自己给自己转账，刷交互次数运行命令： `npm run zksync-era-transfer`
   - zksync lite 网络 批量跨链(eth 网络=>zksync lite 网络)运行命令： `npm run zksync-lite-bridge`
   - zksync lite 网络 批量 mint nft 运行命令： `npm run zksync-lite-mint-nft`
   - zksync lite 网络和 era 网络 查看每个钱包的交互次数(nonce)运行命令, `npm run zksync-era-lite-nonce`

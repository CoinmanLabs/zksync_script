# 关注paul获取更多知识脚本：https://twitter.com/Coinman_Paul
# ZkSync [Era、Lite]网络批量刷空投脚本(ZkSync [Era, Lite] Network Batch Airdrop Script)

## 脚本能力

- [√] 批量创建账号
- [√] 批量部署合约，成本微乎其微
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
2. 下载代码
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





一、确定目标攻略 结合空投指标和资金储备，目标交互攻略：
   - ZkSync lite跨链桥
   - ZkSync era跨链桥
   - 批量mint nft生成tx: 100笔（分到10个月，每周2-3次，成本100刀）
   - 转账给自己生成tx: 40笔（分到10个月，每周1次，成本40刀） 同时准备五万刀分两批冲10个大额号

二、如何操作 除了链上交互外，我还需要解决两个问题
   - 生成一批新账号，账号之间做隔离，避免被女巫
   - 从交易所批量分发交互费用到，利用交易所账号的每日大额流水规避自己分发的女巫判定
以上所有操作通过调研都可以通过脚本自动化完成。



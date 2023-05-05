# ZkSync [Era, Lite] Network Batch Airdrop Script

<p align="left">
<a href="./README.md">简体中文</a> ||   <a href="./README.en.md">English</a>
</p>

## Script Capabilities

- [√] Batch account creation
- [√] Batch transfer to on-chain wallet using OKX exchange
- [√] Batch transfer on zksync lite network
- [√] Batch mint NFT on zksync lite network
- [√] Batch cross-chain transfer; eth network => zksync lite network
- [√] Batch query network interaction times on zksync lite network
- [√] Batch transfer on zksync era network
- [√] Batch mint NFT on zksync era network
- [√] Batch cross-chain transfer; eth network => zksync era network
- [√] Batch query network interaction times on zksync era network

## Running Steps

1. Download and install Node according to your system, search for tutorials to install (https://nodejs.cn/download/)
2. Open the terminal (command line) window, if you don't know how, check the tutorial
3. Install the required dependencies for the script by entering `npm i` in the terminal (command line) window
4. Open the `index.js` file in the `config` folder of the zksync_srcipt folder to configure the relevant parameters
5. Open the `accounts` folder in the zksync_srcipt folder and configure the imported account information according to the file example. If there is no file, run the script command create-wallet to create wallet accounts in batches
6. In the terminal (command line) window, run the script
   - zksync era network batch transfer to oneself to increase interaction times, run command: `npm run zksync-era-transfer`
   - zksync era network batch cross-chain transfer (eth network => zksync era network), run command: `npm run zksync-era-bridge`
   - zksync era network batch mint nft, run command: `npm run zksync-era-mint-nft`
   - zksync lite network batch transfer to oneself to increase interaction times, run command: `npm run zksync-era-transfer`
   - zksync lite network batch cross-chain transfer (eth network => zksync lite network), run command: `npm run zksync-lite-bridge`
   - zksync lite network batch mint nft, run command: `npm run zksync-lite-mint-nft`
   - zksync lite and era network, view the interaction times (nonce) of each wallet, run command: `npm run zksync-era-lite-nonce`

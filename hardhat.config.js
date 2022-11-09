require("@nomiclabs/hardhat-etherscan");
/* global ethers task */
require('@nomiclabs/hardhat-waffle')

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task('accounts', 'Prints the list of accounts', async () => {
  const accounts = await ethers.getSigners()

  for (const account of accounts) {
    console.log(account.address)
  }
})

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: '0.8.17',
  settings: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  },
  networks: {
    goerli: {
      url: "https://hardworking-wild-paper.ethereum-goerli.discover.quiknode.pro/e1693243a7682358a0536e263a812f3393814668/",
      accounts: ["6169cb9b52222bf4c457e87e7c9c70bd0162aecad0e6aeccc857cd1c3eafd058"]
    }
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: "RGC48BV4YX1NTFUN9S1XFJVHCU5DIZMUYN"
  }
}

//Diamond deployed: 0xacB2b26bed55f380d1A20826C2F809ac9f98710a
//facetA deployed: 0x638944C91924B4912F63494de6926F4beb88C36F

/////// Command //////

//  npx hardhat compile

//  npx hardhat run scripts/deploy.js --network goerli

//   npx hardhat run scripts/deployFacet.js --network goerli

//  npx hardhat verify --network goerli <deployFacet.js address>


///******** How to clone the Diamond Contract *******/////

// URL - https://www.quicknode.com/guides/smart-contract-development/the-diamond-standard-eip-2535-explained-part-2
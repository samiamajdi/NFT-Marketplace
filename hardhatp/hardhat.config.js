require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();


  for (const account of accounts) {
    console.log(account.address);
  }
});
module.exports = {
  solidity: "0.8.17",

  networks: {
    hardhat: {
      chainId: 1337,
      // url: "http://localhost:8545",
      accounts: [
      {
      privateKey: '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80',
      balance: '1000000000000000000'
    },
    {
      privateKey: '0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d',
      balance: '1000000000000000000'
    }      ]
    }
  }
};



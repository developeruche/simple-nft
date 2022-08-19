import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("@nomiclabs/hardhat-etherscan");

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  networks: {
    ropsten: {
      url: "",
      accounts: [""]
    },
    goerli: {
      url: "",
      accounts: [""]
    },
    rinkeby: {
      url: "",
      accounts: [""]
    }
  },
  etherscan: {
    apiKey: ""
  }
};

export default config;

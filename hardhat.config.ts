import { HardhatUserConfig } from "hardhat/config"
import "@nomicfoundation/hardhat-toolbox"
import("hardhat-gas-reporter")
import "solidity-coverage"
import "@typechain/hardhat"
import "@nomiclabs/hardhat-ethers"
import "dotenv/config"
import "hardhat-deploy"
require("@nomicfoundation/hardhat-chai-matchers")

const MUMBAI_RPC_URL = "https://polygon-mumbai-rpc.gateway.pokt.network"
const POLYGON_RPC_URL = "https://poly-rpc.gateway.pokt.network"

const {  
        PRIVATE_KEY: PRIVATE_KEY,
        } = process.env

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 31337
    },
    localhost:{
      chainId: 31337
    },
    mumbai: {
      url: MUMBAI_RPC_URL,
      accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
      chainId: 80001,
    },
    polygon: {
      url: POLYGON_RPC_URL,
      accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
      chainId: 137
    }
  },
  solidity: "0.8.17",
  gasReporter: {
    enabled: false,
    outputFile: "gas-report.txt",
    currency: "USD",
    noColors: true,
    token: 'MATIC',
    gasPriceApi:"https://api.polygonscan.com/api?module=proxy&action=eth_gasPrice"
  },
  etherscan: {
    apiKey: {
      polygon: 'K5SZYD6X7HJFFQTUKGJR55Y2AZMYF8EYHW'
    }
  },
}

export default config
const { extendEnvironment } = require("hardhat/config");
require("@nomiclabs/hardhat-waffle");
const dotenv = require("dotenv");

dotenv.config();


// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.13",
  networks: {
    // mainnets
    ethereum: {
      url: `https://eth-mainnet.alchemyapi.io/v2/${
        process.env.ETHEREUM_API_KEY ?? ""
      }`,
      accounts:
        process.env.ETHEREUM_PRIVATE_KEY !== undefined
          ? [process.env.ETHEREUM_PRIVATE_KEY]
          : [],
    },
    optimism: {
      url: `https://opt-mainnet.g.alchemy.com/v2/${
        process.env.OPTIMISM_API_KEY ?? ""
      }`,
      accounts:
        process.env.OPTIMISM_PRIVATE_KEY !== undefined
          ? [process.env.OPTIMISM_PRIVATE_KEY]
          : [],
    },
    polygon: {
      url: `https://polygon-mainnet.g.alchemy.com/v2/${
        process.env.POLYGON_API_KEY ?? ""
      }`,
      accounts:
        process.env.POLYGON_PRIVATE_KEY !== undefined
          ? [process.env.POLYGON_PRIVATE_KEY]
          : [],
    },
    // testnets
    "ethereum-goerli": {
      url: `https://eth-goerli.alchemyapi.io/v2/${
        process.env.ETHEREUM_GOERLI_API_KEY ?? ""
      }`,
      accounts:
        process.env.ETHEREUM_GOERLI_PRIVATE_KEY !== undefined
          ? [process.env.ETHEREUM_GOERLI_PRIVATE_KEY]
          : [],
    },
    "optimism-kovan": {
      url: `https://opt-kovan.g.alchemy.com/v2/${
        process.env.OPTIMISM_KOVAN_API_KEY ?? ""
      }`,
      accounts:
        process.env.OPTIMISM_KOVAN_PRIVATE_KEY !== undefined
          ? [process.env.OPTIMISM_KOVAN_PRIVATE_KEY]
          : [],
    },
    "polygon-mumbai": {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${
        process.env.POLYGON_MUMBAI_API_KEY ?? ""
      }`,
      accounts:
        process.env.POLYGON_MUMBAI_PRIVATE_KEY !== undefined
          ? [process.env.POLYGON_MUMBAI_PRIVATE_KEY]
          : [],
    },
    // devnets
    "optimism-kovan-staging": {
      url: `https://opt-kovan.g.alchemy.com/v2/${
        process.env.OPTIMISM_KOVAN_STAGING_API_KEY ?? ""
      }`,
      accounts:
        process.env.OPTIMISM_KOVAN_STAGING_PRIVATE_KEY !== undefined
          ? [process.env.OPTIMISM_KOVAN_STAGING_PRIVATE_KEY]
          : [],
    }
  },
  baseURIs: {
    // mainnets
    ethereum: "https://tableland.network/api/v1/query?statement=",
    optimism: "https://tableland.network/api/v1/query?statement=",
    polygon: "https://tableland.network/api/v1/query?statement=",
    // testnets
    "ethereum-goerli": "https://testnets.tableland.network/api/v1/query?statement=",
    "optimism-kovan": "https://testnets.tableland.network/api/v1/query?statement=",
    "polygon-mumbai": "https://testnets.tableland.network/api/v1/query?statement=",
    // devnets
    "optimism-kovan-staging":
      "https://staging.tableland.network/api/v1/query?statement=",
    localhost: "http://localhost:8080/api/v1/query?statement=",
  },
  appURIs: {
    // mainnets
    ethereum: "fixme",
    optimism: "fixme",
    polygon: "fixme",
    // testnets
    "ethereum-goerli": "fixme",
    "optimism-kovan": "fixme",
    "polygon-mumbai": "https://d49bgqk3gxy9r.cloudfront.net/",
    // devnets
    "optimism-kovan-staging": "fixme",
    localhost: "http://localhost:3000/",
  }
};


extendEnvironment(hre => {
  // Get base URI for user-selected network
  const baseUris = hre.userConfig.baseURIs;
  hre.baseURI = baseUris[hre.network.name];

  const appUris = hre.userConfig.appURIs;
  hre.appURI = appUris[hre.network.name];
});

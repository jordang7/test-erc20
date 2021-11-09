require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

const ALCHEMY_API_HTTP_KEY = process.env.ALCHEMY_API_HTTP_KEY;

const RINKEBY_PRIVATE_KEY = process.env.RINKEBY_PRIVATE_KEY;

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: `${ALCHEMY_API_HTTP_KEY}`,
      accounts: [`0x${RINKEBY_PRIVATE_KEY}`],
    },
  },
};

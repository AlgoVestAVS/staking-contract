require('dotenv').config();
const {TOKEN_RINKEBY_ADDR, AVS_ADDR} = process.env;
const Migrations = artifacts.require("AVS_staking");

module.exports = function (deployer) {
  deployer.deploy(Migrations, AVS_ADDR, 1613779200, 86400);
};

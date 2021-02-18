require('dotenv').config();
const {TOKEN_RINKEBY_ADDR, AVS_ADDR} = process.env;
const Migrations = artifacts.require("AVS_staking");

module.exports = function (deployer) {
  deployer.deploy(Migrations, 'TOKEN_RINKEBY_ADDR or AVS_ADDR', Math.floor(Date.now()/1000), 86400);
};

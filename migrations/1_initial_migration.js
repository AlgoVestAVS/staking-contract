require('dotenv').config();
const { TOKEN_RINKEBY_ADDR, AVS_ADDR } = process.env;
const Migrations = artifacts.require("AlgoVestStaking");

module.exports = function (deployer) {
  /* Dynamically generate the Date and time of deployment for testing */
  // deployer.deploy(Migrations, TOKEN_RINKEBY_ADDR, Math.floor(Date.now() / 1000), 86400);

  /* Hard code the deployment date of smart contract for safety */
  deployer.deploy(Migrations, AVS_ADDR, 1613842502, 86400);
};

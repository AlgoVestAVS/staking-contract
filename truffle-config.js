const HDWalletProvider = require('@truffle/hdwallet-provider');

const BN = require("bn.js");

require('dotenv').config();
const {
    ETHERSCAN_API_KEY,
    MNEMONIC,
    DEPLOY_GAS_LIMIT,
    DEPLOY_GAS_PRICE,
    INFURA_ID_PROJECT
} = process.env;

const Web3 = require("web3");
const web3 = new Web3();

module.exports = {
    plugins: [
        'truffle-plugin-verify'
    ],

    api_keys: {
        etherscan: ETHERSCAN_API_KEY
    },

    networks: {
        ropsten: {
            provider: () => new HDWalletProvider(MNEMONIC, 'https://ropsten.infura.io/v3/' + INFURA_ID_PROJECT),
            network_id: 3,
            gas: DEPLOY_GAS_LIMIT,
            confirmations: 2,
            skipDryRun: true
        },
        mainnet: {
            provider: () => new HDWalletProvider(MNEMONIC, 'https://mainnet.infura.io/v3/' + INFURA_ID_PROJECT),
            network_id: 1,
            gasPrice: web3.utils.toWei(new BN(DEPLOY_GAS_PRICE), 'gwei'),
            gas: DEPLOY_GAS_LIMIT,
            skipDryRun: false
        },
        kovan: {
            provider: () => new HDWalletProvider(MNEMONIC, 'https://kovan.infura.io/v3/' + INFURA_ID_PROJECT),
            network_id: 42,
            confirmations: 2,
            gas: DEPLOY_GAS_LIMIT,
            skipDryRun: true
        },
        rinkeby: {
            provider: () => new HDWalletProvider(MNEMONIC, 'https://rinkeby.infura.io/v3/' + INFURA_ID_PROJECT),
            network_id: 4,
            gas: DEPLOY_GAS_LIMIT,
            confirmations: 2,
            skipDryRun: true
        },
    },

    compilers: {
        solc: {
            version: "0.6.0",
            settings: {
                optimizer: {
                    enabled: true,
                    runs: 999999
                },
            }
        },
    },
};

const FPIS = artifacts.require("./FPIS.sol");

module.exports = function (deployer) {
  deployer.deploy(FPIS);
};
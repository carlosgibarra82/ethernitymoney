const EthernityMoney = artifacts.require("EthernityMoney");

module.exports = function(deployer) {
  deployer.deploy(EthernityMoney);
};

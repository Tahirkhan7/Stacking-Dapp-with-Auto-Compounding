const { ethers } = require("hardhat");

module.exports = async ({ getNamedAccounts, deployments, getChainId }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  const chianId = await getChainId();

  await deploy("ExampleExternalContract", {
    log: true,
  });

  const exampleExternalContract = await ethers.getContract("ExampleExternalContract");

module.exports.tags = ["ExampleExternalContract"];

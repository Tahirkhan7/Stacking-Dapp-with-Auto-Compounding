module.exports = async ({ getNamedAccounts, deployments, getChainId }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = await getChainId();

  const exampleExternalContract = await deployments.get(
    "ExampleExternalContract"
  );

  await deploy("Staker", {
    from: deployer,
    args: [exampleExternalContract.address],
    log: true,
  });
};

module.exports.tags = ["Staker"];

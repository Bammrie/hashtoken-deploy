const hre = require("hardhat");

async function main() {
  const HashToken = await hre.ethers.getContractFactory("HashToken");
  const token = await HashToken.deploy();
  await token.waitForDeployment();   // < updated
  console.log(`✅ HashToken deployed to: ${await token.getAddress()}`);  // getAddress() instead of .address
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


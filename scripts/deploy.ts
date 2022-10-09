import { ethers } from "hardhat";

async function main() {

  const UmbrellaToken = await ethers.getContractFactory("TokenGovernorUmbrela");
  const umbrellaToken = await UmbrellaToken.deploy()
  await umbrellaToken.deployed();
  
  const Umbrella = await ethers.getContractFactory("UmbrellaDAO");
  const umbrella = await Umbrella.deploy(umbrellaToken.address);

  await umbrella.deployed();

  console.log(`Smart contract deployed to ${umbrella.address}`);

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

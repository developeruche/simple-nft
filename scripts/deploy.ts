import { ethers } from "hardhat";

async function main() {
  const NFT = await ethers.getContractFactory("Bridge721");
  const nft = await NFT.deploy();

  await nft.deployed();
  console.log(`Address: ${nft.address}`);

  const res = await nft.mint("https://gateway.pinate.cloud/ipfs/QmXQK88EVxNoEjS6UCwRGfs8Eh4qFx5wksVCM4Nzdo4cqs");
  const tx = await res.wait();
  console.log(tx);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// Contract Address: 0x8DDCfe8a48Ec2E0666d29908a2A547Ba7D3bb797
// OPEN SEA LINK: https://testnets.opensea.io/assets/rinkeby/0x8ddcfe8a48ec2e0666d29908a2a547ba7d3bb797/0
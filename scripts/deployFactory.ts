import { ethers } from "hardhat";

async function main() {
  const contract = await ethers.getContractFactory("UniswapV3Factory", {});

  const deploy = await contract.deploy([]);

  console.log("Deployed:", deploy.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

/*

*BSC Testnet*

npx hardhat run scripts/deployFactory.ts --network bsc

---

https://testnet.bscscan.com/address/0x1f254C161797E62F06A0552dddb39D9C6A60A61F

Deployed 0x1f254C161797E62F06A0552dddb39D9C6A60A61F


*/

/*

*Polygon Mumbai*

npx hardhat run scripts/deployFactory.ts --network mumbai


https://mumbai.polygonscan.com/address/0x0Eb634576d9ef3660bDc6186760fc6aE69F35211

UniswapV3Factory Deployed: 0x0Eb634576d9ef3660bDc6186760fc6aE69F35211

*/

import { ethers } from "hardhat";

async function main() {
  const value = await ethers.utils.parseUnits("1", "ether");
  const mint = 1 * 10 * 8;

  const TokenA = await ethers.deployContract("TokenA", [mint], {});

  const tokenA = await TokenA.deployed();

  console.log("Token A Deployed", tokenA.address);
  

  const TokenB = await ethers.deployContract("TokenB", [mint], {});

  const tokenB = await TokenB.deployed();

  console.log("Token B Deployed", tokenB.address);
  
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

/*

*BSC Testnet*

npx hardhat run scripts/deployTokens.ts --network bsc

---

https://testnet.bscscan.com/address/0x0Eb634576d9ef3660bDc6186760fc6aE69F35211

Token A Deployed 0x0Eb634576d9ef3660bDc6186760fc6aE69F35211

---

https://testnet.bscscan.com/address/0x03F4fB066116BE7fFabAABd5801BaF32393F09B8

Token B Deployed 0x03F4fB066116BE7fFabAABd5801BaF32393F09B8


*/

/*

*Polygon Mumbai*

npx hardhat run scripts/deployTokens.ts --network mumbai


https://mumbai.polygonscan.com/address/0x03F4fB066116BE7fFabAABd5801BaF32393F09B8

Token A Deployed 0x03F4fB066116BE7fFabAABd5801BaF32393F09B8

---

https://mumbai.polygonscan.com/address/0x952dE210ac0f2A53a6Ea158722fd10E348B6a09e

Token B Deployed 0x952dE210ac0f2A53a6Ea158722fd10E348B6a09e


********************


https://mumbai.polygonscan.com/address/0x1f254C161797E62F06A0552dddb39D9C6A60A61F

Token A Deployed 0x1f254C161797E62F06A0552dddb39D9C6A60A61F

---

https://mumbai.polygonscan.com/address/0x2f781322D04ce264EdCDe9214b0d795707737DDA

Token B Deployed 0x2f781322D04ce264EdCDe9214b0d795707737DDA

*/

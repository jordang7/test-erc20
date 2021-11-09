const CONTRACT_ADDRESS = "0x138125d836ef3939b352afcaf44bd0480943ef35";
async function main() {
  const [deployer] = await ethers.getSigners();

  const weiAmount = (await deployer.getBalance()).toString();

  console.log("Account balance:", await ethers.utils.formatEther(weiAmount));
  const token = await hre.ethers.getContractAt("NYMets", CONTRACT_ADDRESS);

  await token.transfer(
    "0x0f729f69699fe3c6736d0e8974c7d4af8f0b1ce4",
    ethers.utils.parseEther("9")
  );
  await token.transfer(
    "0x1eb0ba41cca2fe899ab238345e811d1f4be30ffb",
    ethers.utils.parseEther("9")
  );
  await token.transfer(
    "0x4ac0184cbefb6971534c2fd7871c3f0ff4f2974d",
    ethers.utils.parseEther("9")
  );
  await token.transfer(
    "0xa6b5885319f62dfb6df839fe1619995b35d92268",
    ethers.utils.parseEther("9")
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

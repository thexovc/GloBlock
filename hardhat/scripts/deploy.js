const { ethers } = require("hardhat");

const main = async () => {
  const Passport = await ethers.getContractFactory("Passport");
  const passport = await Passport.deploy();
  await passport.deployed();

  console.log("Passport deployed at: ", passport.address);

  const Visa = await ethers.getContractFactory("Visa");
  const visa = await Visa.deploy();
  await visa.deployed();

  console.log("Visa deployed at :", visa.address);
};

//Passport deployed at:  0x4F706fc521EA03C56F437A184f6e97bf857e67cc
//Visa deployed at : 0x25FFE479B1578842137AB2344737127bF5D759b1

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

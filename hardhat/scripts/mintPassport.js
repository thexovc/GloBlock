const { ethers } = require("hardhat");
const {
  storeTokenUriMetadata,
  storeImages,
} = require("../utils/uploadToPinata");

const imageLocation = "./image";

const metadataTemplate = {
  name: "",
  description: "",
  image: "",
  attributes: [
    {
      passportType: "Onchain Passport",
      birhdate: "18.01.1977",
      nationality: "Chinese",
      Authority: "Hongkong",
      gender: "male",
      surname: "Smith",
    },
  ],
};

const main = async () => {
  if (process.env.UPLOAD_TO_PINATA == "true") {
    tokenUris = await handleTokenUris();
    tokenUri = tokenUris[0];
  }
  const user = "0x8Fb09da00d1d39977F85E50F996f2905595C51E5";
  const contract = await ethers.getContractAt(
    "Passport",
    "0x4F706fc521EA03C56F437A184f6e97bf857e67cc"
  );
  await contract.safeMint(user, tokenUri);
  console.log("Nft got minted");
};

const handleTokenUris = async () => {
  tokenUri = [];

  const { responses: imageUploadResponses, files } = await storeImages(
    imageLocation
  );
  //console.log(imageUploadResponses);
  for (imageUploadResponseIndex in imageUploadResponses) {
    let tokenUriMetadata = { ...metadataTemplate };
    tokenUriMetadata.name = files[imageUploadResponseIndex].replace(".png", "");
    tokenUriMetadata.description = `Passport of ${tokenUriMetadata.name}!`;
    tokenUriMetadata.image = `ipfs://${imageUploadResponses[imageUploadResponseIndex].IpfsHash}`;
    console.log(`Uploading ${tokenUriMetadata.name}...`);
    const metadataUploadResponse = await storeTokenUriMetadata(
      tokenUriMetadata
    );
    tokenUri.push(`ipfs://${metadataUploadResponse.IpfsHash}`);
  }
  console.log("Token URIs Uploaded! They are:");
  console.log(tokenUri);
  return tokenUri;
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

const {
  duration,
} = require("@nomicfoundation/hardhat-network-helpers/dist/src/helpers/time");
const { ethers } = require("hardhat");
const {
  storeTokenUriMetadata,
  storeImages,
} = require("../utils/uploadToPinata");

const visaDuration = 60 * 60 * 24 * 21;
const timeUntilStart = 60 * 60 * 24 * 7;
const imageLocation = "./imageVisa";

const metadataTemplate = {
  name: "",
  description: "",
  image: "",
  attributes: [
    {
      visaType: "Tourist Visa",
      visaPurpose: "Tourism",
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
    "Visa",
    "0x25FFE479B1578842137AB2344737127bF5D759b1"
  );
  await contract.safeMint(user, timeUntilStart, visaDuration, tokenUri);
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
    tokenUriMetadata.description = `Cryptonia Visa of ${tokenUriMetadata.name}!`;
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

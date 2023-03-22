import { PASSPORT_NFT_ADDRESS, PASSPORT_NFT_ABI } from "@/constants/constants";
import { Box, Image } from "@chakra-ui/react";
//import Image from "next/image";
import { useState, useEffect } from "react";

export default function NFTBox({ tokenId, holder, tokenUri }) {
  const [imageURI, setImageURI] = useState("");
  const [passportholder, setPassportHolder] = useState("");
  const [tokenDescription, setTokenDescription] = useState("");

  async function updateUI() {
    console.log(tokenUri);
    if (tokenUri) {
      const requestURL = tokenUri.replace("ipfs://", "https://ipfs.io/ipfs/");
      const tokenURIResponse = await (await fetch(requestURL)).json();
      const imageURI = tokenURIResponse.image;
      const imageURIURL = imageURI.replace("ipfs://", "https://ipfs.io/ipfs/");

      setImageURI(imageURIURL);
      setTokenDescription(tokenURIResponse.description);
    }
  }

  useEffect(() => {
    updateUI();
  }, []);

  return (
    <Box>
      {imageURI ? (
        <Box display="flex" flexDirection="column" alignItems="center">
          <Image src={imageURI} width="200px" height="200px"></Image>
          <Box>{tokenDescription}</Box>
        </Box>
      ) : (
        <Box>fdsafdaf</Box>
      )}
      <Box>
        <Box></Box>
      </Box>
    </Box>
  );
}

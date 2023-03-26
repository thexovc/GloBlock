import { PASSPORT_NFT_ADDRESS, PASSPORT_NFT_ABI } from "@/constants/constants";
import { Box, Image } from "@chakra-ui/react";
//import Image from "next/image";
import { useState, useEffect } from "react";

export default function PassportNFTBox({ tokenId, holder, tokenUri }) {
  const [imageURI, setImageURI] = useState("");
  const [passportholder, setPassportHolder] = useState("");
  const [passportType, setPassportType] = useState("");
  const [birhdate, setBirthdate] = useState("");
  const [nationality, setNationality] = useState("");
  const [authority, setAuthority] = useState("");
  const [gender, setGender] = useState("");
  const [surname, setSurname] = useState("");
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
      setPassportType(tokenURIResponse.attributes[0].passportType);
      setBirthdate(tokenURIResponse.attributes[0].birhdate);
      setNationality(tokenURIResponse.attributes[0].nationality);
      setAuthority(tokenURIResponse.attributes[0].nationality);
      setAuthority(tokenURIResponse.attributes[0].authority);
      setGender(tokenURIResponse.attributes[0].gender);
      setSurname(tokenURIResponse.attributes[0].surname);
      console.log(tokenURIResponse.attributes[0].passportType);
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
          <Box>Passporttype: {passportType}</Box>
          <Box>Date of birth: {birhdate}</Box>
          <Box>Nationality: {nationality}</Box>
          <Box>Issued authority: {authority}</Box>
          <Box>Gender: {gender}</Box>
          <Box>Surename: {surname}</Box>
        </Box>
      ) : (
        <Box>You don't have a passport</Box>
      )}
      <Box>
        <Box></Box>
      </Box>
    </Box>
  );
}

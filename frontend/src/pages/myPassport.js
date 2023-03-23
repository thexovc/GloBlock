import Head from "next/head";
import { useState, useEffect, useRef, use } from "react";
import { useQuery } from "@apollo/client";

// import web3 libraries
import { ethers } from "ethers";
import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Heading,
  Button,
  IconButton,
  Tooltip,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Divider,
} from "@chakra-ui/react";
import GET_My_PASSPORT from "@/constants/MyPassportQuery";
import { PASSPORT_NFT_ADDRESS, PASSPORT_NFT_ABI } from "@/constants/constants";
import PassportNFTBox from "@/components/PassportNFTBox";

export default function Home() {
  const [signer, setSigner] = useState(null);
  const [address, setAddress] = useState(null);
  const {
    loading,
    error,
    data: passportMint,
  } = useQuery(GET_My_PASSPORT, {
    variables: { holder: address },
  });

  // connect to metamask
  const connect = async () => {
    // check if metamask is installed
    if (typeof window.ethereum === "undefined") {
      alert("Please install MetaMask first.");
      return;
    }

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    setSigner(provider.getSigner());
    console.log(address);
  };

  // delete signer
  const disconnect = async () => {
    setSigner(null);
  };

  //console.log("wow", passportMint.passportMinteds[0].holder);

  useEffect(() => {
    if (!signer) {
      setAddress(null);
      return;
    }
    signer.getAddress().then(setAddress);
  }, [signer]);

  return (
    <>
      <Head>
        <title>Your Passport</title>
        <meta name="description" content="Your Passport: Passport" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link type="image/png" sizes="16x16" rel="icon" href="/passport.png" />
      </Head>

      <main>
        <Flex
          align="center"
          justify="space-between"
          bg="blue.800"
          p="4"
          shadow="2xl"
        >
          <Image src="/passport.png" alt="passport" h="50" bg="inherit" />

          <Heading bg="inherit" color="white">
            Your Passort
          </Heading>

          <Box bg="inherit">
            {/*show account address if connected, else show connect button*/}
            {address ? (
              <Tooltip
                label="Disconnect Wallet"
                bg="red.400"
                openDelay="200"
                aria-label="Disconnect Wallet"
              >
                <Button onClick={disconnect}>
                  {address.slice(0, 6) + "..." + address.slice(-4)}
                </Button>
              </Tooltip>
            ) : (
              <>
                <Button
                  _hover={{ bg: "#75afe6" }}
                  aria-label="Connect to Wallet"
                  onClick={connect}
                >
                  Connect
                </Button>
              </>
            )}
            <Menu>
              <MenuButton
                m="2"
                backgroundColor="white"
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon bg="inherit" />}
                variant="outline"
              />
              <MenuList>
                <MenuItem as="a" href="/">
                  Home
                </MenuItem>
                <MenuItem as="a" href="/contact">
                  Contact
                </MenuItem>
                <MenuItem as="a" href="/passportApplication">
                  Passport Application
                </MenuItem>
                <MenuItem as="a" href="/visaApplication">
                  Visa Application
                </MenuItem>

                <Divider />
                <MenuItem as="a" href="/myVisa">
                  My Visas
                </MenuItem>
                <MenuItem as="a" href="/myPassport">
                  My Passport
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
        {passportMint ? (
          <Box>
            {passportMint.passportMinteds.map((nft) => {
              const { tokenId, holder, tokenURI } = nft;
              console.log(tokenURI);
              return (
                <PassportNFTBox
                  tokenId={tokenId}
                  holder={holder}
                  key={tokenId}
                  tokenUri={tokenURI}
                />
              );
            })}
          </Box>
        ) : (
          <Box>Loading...</Box>
        )}
      </main>
    </>
  );
}

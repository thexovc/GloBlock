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
import GET_My_VISA from "@/constants/MyVisaQuery";
import { PASSPORT_NFT_ADDRESS, PASSPORT_NFT_ABI } from "@/constants/constants";
import VisaNFTBox from "@/components/VisaNFTBox";

export default function Home() {
  const [signer, setSigner] = useState(null);
  const [address, setAddress] = useState(null);
  const {
    loading,
    error,
    data: visaMint,
  } = useQuery(GET_My_VISA, {
    variables: { holder: address },
    context: { clientName: "endpoint2" },
  });
  console.log(visaMint);
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
        <title>Your Visa</title>
        <meta name="description" content="Your Passport: Visas and Stamps" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link type="image/png" sizes="16x16" rel="icon" href="/passport.png" />
      </Head>

      <main>
        <Flex
          align="center"
          justify="space-between"
          bg="blackAlpha.900"
          p="4"
          shadow="dark-lg"
        >
          <Image src="/passport.png" alt="passport" h="50" />

          <Heading color="white">Your Visa</Heading>

          <Box>
            {/*show account address if connected, else show connect button*/}
            {address ? (
              <Button
                bg="inherit"
                color="goldenrod"
                border="1px"
                _hover={{ borderColor: "red", color: "red" }}
                onClick={disconnect}
              >
                {address.slice(0, 6) + "..." + address.slice(-4)}
              </Button>
            ) : (
              <>
                <Button
                  color="goldenrod"
                  bg="blackAlpha"
                  _hover={{ bg: "goldenrod", color: "blackAlpha.800" }}
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
        {visaMint ? (
          <Box>
            {visaMint.visaMinteds.map((nft) => {
              const { tokenId, holder, fromDate, endDate, tokenURI } = nft;
              console.log(tokenURI);
              return (
                <VisaNFTBox
                  tokenId={tokenId}
                  holder={holder}
                  key={tokenId}
                  tokenUri={tokenURI}
                  fromDate={fromDate}
                  endDate={endDate}
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

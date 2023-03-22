import Head from "next/head";
import { useState, useEffect, useRef, use } from "react";
import ConnectHeader from "../components/ConnectHeader";
import { useQuery } from "@apollo/client";

// import web3 libraries
import { ethers } from "ethers";
import { Box } from "@chakra-ui/react";
import GET_My_PASSPORT from "@/constants/MyPassportQuery";
import { PASSPORT_NFT_ADDRESS, PASSPORT_NFT_ABI } from "@/constants/constants";
import NFTBox from "@/components/NFTBox";

export default function Home() {
  const [signer, setSigner] = useState(null);
  const { loading, error, data: passportMint } = useQuery(GET_My_PASSPORT);
  //console.log("wow", passportMint.passportMinteds[0].holder);
  return (
    <>
      <Head>
        <title>Your Passport</title>
        <meta name="description" content="Your Passport: Visas and Stamps" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link type="image/png" sizes="16x16" rel="icon" href="/passport.png" />
      </Head>

      <main>
        <ConnectHeader
          title={"Your Passport"}
          signer={signer}
          setSigner={setSigner}
        />
        {passportMint ? (
          <Box>
            {passportMint.passportMinteds.map((nft) => {
              const { tokenId, holder, tokenURI } = nft;
              console.log(tokenURI);
              return (
                <NFTBox tokenId={tokenId} holder={holder} tokenUri={tokenURI} />
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

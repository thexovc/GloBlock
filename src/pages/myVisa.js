import Head from "next/head";
import { useState, useEffect, useRef, use } from "react";
import ConnectHeader from "@/components/ConnectHeader";

// import web3 libraries
import { ethers } from "ethers";
import { Box } from "@chakra-ui/react";

export default function Home() {
  const [signer, setSigner] = useState(null);

  return (
    <>
      <Head>
        <title>NFT Passport Interface</title>
        <meta name="description" content="Website to show my visas" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link type="image/png" sizes="16x16" rel="icon" href="/passport.png" />
      </Head>

      <main>
        <ConnectHeader />
      </main>
      <Box>This page is for my visas</Box>
    </>
  );
}

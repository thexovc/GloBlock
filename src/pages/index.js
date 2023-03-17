import Head from "next/head";
import { useState, useEffect, useRef, use } from "react";

import { Button, Flex, Heading } from "@chakra-ui/react";

// import web3 libraries
import { ethers } from "ethers";
import Header from "@/components/Header";

export default function Home() {
  const [signer, setSigner] = useState(null);

  return (
    <>
      <Head>
        <title>NFT Passport Interface</title>
        <meta
          name="description"
          content="Website to interact with NFT Passport Contracts"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link type="image/png" sizes="16x16" rel="icon" href="/passport.png" />
      </Head>
      <Header
      title={"Home"}/>
      <main>
        <Flex direction="column" align="center" p="4">
          <Heading>HOME</Heading>
          <Button as="a" href="/passport">
            See Your Passport
          </Button>
        </Flex>
      </main>
    </>
  );
}

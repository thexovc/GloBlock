import Head from "next/head";
import { useState, useEffect, useRef, use } from "react";
import ConnectHeader from "@/components/ConnectHeader";

// import web3 libraries
import { ethers } from "ethers";

export default function Home() {
  const [signer, setSigner] = useState(null);

  return (
    <>
      <Head>
        <title>Your Passport</title>
        <meta name="description" content="Your Passport: Visas and Stamps" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link type="image/png" sizes="16x16" rel="icon" href="/passport.png" />
      </Head>

      <main>
        <ConnectHeader signer={signer} setSigner={setSigner} />
      </main>
    </>
  );
}

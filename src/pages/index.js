import Head from 'next/head'
import { useState, useEffect, useRef, use } from 'react';
import Navigation from './components/Navigation';

// import web3 libraries
import { ethers } from 'ethers';


export default function Home() {
  const [signer, setSigner] = useState(null);

  return (
    <>
      <Head>
        <title>NFT Passport Interface</title>
        <meta name="description" content="Website to interact with NFT Passport Contracts" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link type="image/png" sizes="16x16" rel="icon" href="/passport.png" />
      </Head>
      
      <Navigation signer={signer} setSigner={setSigner}/>
      <main>
      </main>
    </>
  )
}

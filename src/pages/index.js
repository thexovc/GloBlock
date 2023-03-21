import Head from "next/head";
import { useState, useEffect, useRef, use } from "react";

import { Box, Button, Flex, Heading, Text, Image } from "@chakra-ui/react";

// import web3 libraries
import { ethers } from "ethers";
import Header from "@/components/Header";

export default function Home() {
  const [signer, setSigner] = useState(null);

  return (
    <>
      <Head>
        <title>Globlock</title>
        <meta
          name="description"
          content="Website to interact with NFT Passport Contracts"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link type="image/png" sizes="16x16" rel="icon" href="/passport.png" />
      </Head>
      <Header title={"Globlock Pass"} />
      <main>
        <Box as="section" bg="blackAlpha.900" h="340"></Box>
        <Box
          maxW="994px"
          margin="auto"
          mt="-256px"
          shadow="dark-lg"
          borderRadius="12px"
          overflow="hidden"
        >
          <Flex>
            <Box bg="blackAlpha.900" maxW="60%" p="5">
              <Heading color="goldenrod">HEADING HEADING</Heading>
              <Text color="lightgrey" mt="8px" textAlign="left">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit amet.
              </Text>
              <Button
                bg="black"
                color="goldenrod"
                _hover={{ color: "blackAlpha.800", bg: "goldenrod" }}
                size="lg"
                mt="16px"
              >
                Get Started (not working yet)
              </Button>
            </Box>
            <Box>
              <Image src="/digital-passport.png" minBlockSize="400px" />
            </Box>
          </Flex>
        </Box>
      </main>
    </>
  );
}

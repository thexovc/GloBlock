import { ethers } from 'ethers';
import { useState, useEffect } from 'react';

import { HamburgerIcon } from '@chakra-ui/icons';
import { Box, Flex, Heading, Button, IconButton, Tooltip, Image, Menu, MenuButton, MenuList, MenuItem} from '@chakra-ui/react'


export default function ConnectHeader({ signer, setSigner, title}) {
    
    const [address, setAddress] = useState(null);
    // get account address from signer when it changes
    useEffect(() => {
        if (!signer) {
            setAddress(null);
            return;
        }
        signer.getAddress().then(setAddress);
    }, [signer]); 

    // connect to metamask
    const connect = async () => {
        // check if metamask is installed
        if (typeof window.ethereum === 'undefined') {
            alert('Please install MetaMask first.');
            return;
        }

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send('eth_requestAccounts', []);
        setSigner(provider.getSigner());
    };

    // delete signer
    const disconnect = async () => {
        setSigner(null);
    };
  
    return (
    <>
    <Flex align='center' justify='space-between' bg='blue.800' p='4' shadow='2xl'>

        <Image src='/passport.png' alt='passport' h='50' bg='inherit' />

        <Heading bg='inherit' color='white'>{title}</Heading>

        <Box bg='inherit'>
            {/*show account address if connected, else show connect button*/}
            {address ? (
                <Tooltip label="Disconnect Wallet" bg='red' openDelay='200' aria-label="Disconnect Wallet">
                    <Button
                    onClick={disconnect}>
                        {address.slice(0, 6) + '...' + address.slice(-4)}
                    </Button>
                </Tooltip>
            ) : (
                <>
                    <Button
                    _hover={{bg: 'orange.200'}}
                    aria-label="Connect to Wallet"
                    onClick={connect}>
                        Connect Wallet
                    </Button>
                </>
            )}
            <Menu>
            <MenuButton
                m='2'
                backgroundColor="white"
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon bg='inherit' />}
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
    </>
  );
}
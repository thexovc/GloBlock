import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Image,
  Divider
} from "@chakra-ui/react";

export default function Header( {title} ) {
  return (
    <>
      <Flex
        align="center"
        justify="space-between"
        bg="blue.800"
        p="5"
        shadow="2xl"
      >
        <Image src="/passport.png" alt="passport" h="50" bg="inherit" />

        <Heading bg="inherit" color="white">
          {title}
        </Heading>
        <Menu>
          <MenuButton
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
            
            <Divider />
            <MenuItem as="a" href="/myVisa">
              My Visas
            </MenuItem>
            <MenuItem as="a" href="/myPassport">
              My Passport
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </>
  );
}

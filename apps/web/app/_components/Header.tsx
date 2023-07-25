'use client';

import Link from 'next/link';
import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

import EveniaLogo from '../../public/Logo.png';
import Image from 'next/image';
import React from 'react';
import { LoginButton } from './UserButtons';

const Header = () => {
  return (
    <Box w="100%">
      <Flex
        minH={'102px'}
        px={20}
        py={5}
        borderBottom={1}
        align="center"
        justify="space-between"
        width="100%"
        bg="white"
        boxShadow="md"
      >
        <Flex justify="start">
          <Link href="/">
            <Flex
              direction="row"
              align="center"
              justify="center"
              cursor="pointer"
            >
              <Image height={38} src={EveniaLogo} alt="this is my image" />
            </Flex>
          </Link>
        </Flex>
        <Flex>
          <InputGroup dir="row" size="lg">
            <InputLeftElement>
              <SearchIcon color="text.grey" />
            </InputLeftElement>
            <Input pl="40px" width="400px" placeholder="Search events" />
          </InputGroup>
        </Flex>
        <LoginButton />
      </Flex>
    </Box>
  );
};

export default Header;

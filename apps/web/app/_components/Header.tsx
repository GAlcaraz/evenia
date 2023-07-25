'use client';

import {
  Box,
  Flex,
  Link,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';
import EveniaLogo from '../../public/Logo.png';
import Image from 'next/image';
import React from 'react';
import { LoginButton, LogoutButton } from './UserButtons';
import { useSession } from 'next-auth/react';

const Header = () => {
  const { status } = useSession();
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
        {status === 'authenticated' ? (
          <Flex>
            <NextLink href="/events/create" passHref>
              <Button as="a">Create Event</Button>
            </NextLink>
            <LogoutButton />
          </Flex>
        ) : (
          <LoginButton />
        )}
      </Flex>
    </Box>
  );
};

export default Header;

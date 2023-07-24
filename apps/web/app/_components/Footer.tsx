'use client';

import EveniaLogo from '../../public/Logo.png';
import Image from 'next/image';
import React from 'react';

import { Flex, HStack } from '@chakra-ui/react';
import { LoginButton } from './UserButtons';

export const Footer = () => {
  return (
    <Flex
      flexDirection="row"
      py={6}
      borderTop={1}
      bg="text.whiteGrey"
      align="center"
      width="100%"
      boxShadow="lg"
    >
      <Flex mb={3}>
        <Flex
          mx={[2, 2, 3]}
          sx={{
            a: {
              transition: 'ease-in-out',
              transitionDuration: '300ms',
              color: 'black',
              _hover: {
                color: 'orange.500',
              },
            },
          }}
        >
          <HStack direction="row" align="center">
            <Flex p={24}>
              <Image height={38} src={EveniaLogo} alt="this is my image" />
            </Flex>
            <LoginButton />
          </HStack>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;

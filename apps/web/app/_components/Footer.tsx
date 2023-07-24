'use client';

import EveniaLogo from '../../public/Logo.png';
import Image from 'next/image';
import React from 'react';

import { Box, Flex, HStack, Text } from '@chakra-ui/react';

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
          <a
            href="https://github.com/GAlcaraz"
            target="_blank"
            rel="noreferrer"
          >
            <HStack direction="row" align="center">
              <Flex p={24}>
                <Image height={38} src={EveniaLogo} alt="this is my image" />
              </Flex>
            </HStack>
          </a>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;

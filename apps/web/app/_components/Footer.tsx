'use client';

import EveniaLogo from '../../public/Logo.png';
import Image from 'next/image';
import React from 'react';

import { HStack, Text } from '@chakra-ui/react';

export const Footer = () => {
  return (
    <HStack bg="text.whiteGrey" px={20} h="100px" justify="space-between">
      <Image height={38} src={EveniaLogo} alt="Evenia" />
      <HStack fontSize="14px" spacing="40px">
        <Text>Home</Text>
        <Text>Create Event</Text>
        <Text>Sign Up</Text>
        <Text>Explore Event</Text>
      </HStack>
    </HStack>
  );
};

export default Footer;

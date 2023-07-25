'use client';

import EveniaLogo from '../../public/Logo.png';
import Image from 'next/image';
import React from 'react';

import { Flex, HStack } from '@chakra-ui/react';
import { LoginButton } from './UserButtons';

export const Footer = () => {
  return (
    <HStack bg="text.whiteGrey" px={20} h="100px" justify="space-between">
      <Image height={38} src={EveniaLogo} alt="Evenia" />
      <LoginButton />
    </HStack>
  );
};

export default Footer;

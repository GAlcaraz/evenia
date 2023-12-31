'use client';
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import eveniaTheme from '../../themes/eveniaTheme';
import { SessionProvider } from 'next-auth/react';

type Props = {
  children?: React.ReactNode;
};

export const AppProvider = ({ children }: Props) => {
  return (
    <CacheProvider>
      <ChakraProvider theme={eveniaTheme}>
        <SessionProvider>{children}</SessionProvider>
      </ChakraProvider>
    </CacheProvider>
  );
};

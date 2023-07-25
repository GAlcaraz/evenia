'use client';

import Link from 'next/link';
import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  useDisclosure,
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
  const { isOpen, onToggle } = useDisclosure();
  //   const router = useRouter();

  const navItems = [
    {
      label: 'Numbers Test',
      href: '/test',
    },
    {
      label: 'Crypto',
      href: '/crypto',
    },
  ];

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
        <Stack>
          <InputGroup dir="row" size="lg">
            <InputLeftElement>
              <SearchIcon color="text.grey" />
            </InputLeftElement>
            <Input
              p={4}
              pl="40px"
              bg="#F6F6F6"
              height="42px"
              width="400px"
              borderRadius={100}
              placeholder="Search events"
              color="text.grey"
            />
          </InputGroup>
          <LoginButton />
        </Stack>

        <Flex
          display={{ base: 'flex', sm: 'none' }}
          justify={{ base: 'center', sm: 'end' }}
          float="right"
        >
          <IconButton
            onClick={onToggle}
            colorScheme="orange"
            aria-label={'Toggle Navigation'}
            variant={'ghost'}
          />
        </Flex>
      </Flex>

      <Collapse in={isOpen}>{/* <MobileNav navItems={navItems} /> */}</Collapse>
    </Box>
  );
};

// const DesktopNav = ({ navItems }) => {
//   return (
//     <Stack justify="space-between" align="center" direction={'row'} spacing={4}>
//       {navItems.map((item) => (
//         <Box cursor="pointer" key={item.label}>
//           <Link href={item.href ?? '#'}>
//             <Text
//               transition="ease-in-out"
//               transitionDuration="300ms"
//               _hover={{
//                 color: 'orange.700',
//               }}
//               _after={{
//                 content: '""',
//                 height: '1px',
//                 backgroundColor: 'orange.900',
//               }}
//               fontWeight={500}
//             >
//               {item.label}
//             </Text>
//           </Link>
//         </Box>
//       ))}
//     </Stack>
//   );
// };

// const MobileNav = ({ navItems }) => {
//   return (
//     <Stack
//       justify="center"
//       align="center"
//       p={4}
//       bg="orange.600"
//       borderBottomRadius="md"
//       display={{ base: 'flex', sm: 'none' }}
//     >
//       {navItems.map((navItem) => (
//         <Flex
//           cursor="pointer"
//           key={navItem.label}
//           py={2}
//           justify="space-between"
//           align="center"
//         >
//           <Link href={navItem.href}>
//             <Text
//               fontWeight={600}
//               transition="ease-in-out"
//               transitionDuration="300ms"
//               _after={{
//                 content: '""',
//                 height: '1px',

//                 backgroundColor: 'orange.900',
//               }}
//             >
//               {navItem.label}
//             </Text>
//           </Link>
//         </Flex>
//       ))}
//     </Stack>
//   );
// };

export default Header;

'use client';

import { Button } from '@chakra-ui/react';
import { gql } from '../../data-access/graphql-client';
import { signIn, signOut } from 'next-auth/react';
import Link from 'next/link';

export const LoginButton = () => {
  return (
    <Button
      style={{ marginRight: 10 }}
      onClick={() => {
        signIn();
      }}
    >
      Sign in
    </Button>
  );
};

export const RegisterButton = () => {
  return (
    <Link href="/register" style={{ marginRight: 10 }}>
      Register
    </Link>
  );
};

export const LogoutButton = () => {
  return (
    <button style={{ marginRight: 10 }} onClick={() => signOut()}>
      Sign Out
    </button>
  );
};

export const ProfileButton = () => {
  return <Link href="/profile">Profile</Link>;
};

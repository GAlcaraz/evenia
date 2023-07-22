import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { gql } from '../../../data-access/graphql-client';
import { JWT } from 'next-auth/jwt';
import jwt from 'jsonwebtoken';

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      name: 'Sign in',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'example@example.com',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          return null;
        }
        const isValid = (
          await gql.ValidateUser({
            email: credentials?.email,
            password: credentials?.password,
          })
        ).validateUser;

        if (!isValid) {
          return null;
        }

        return { email: credentials.email };
      },
    }),
  ],
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
    encode: async (data: any) => {
      const { secret, token } = data;
      const jwtClaims = {
        email: token.email,
      };

      const encodedToken = jwt.sign(jwtClaims, secret, {
        expiresIn: '1h',
        algorithm: 'HS512',
      });
      return encodedToken;
    },
    async decode(data: any) {
      const { secret, token } = data;
      const verify = jwt.verify(token, secret) as JWT;

      return verify;
    },
  },
};

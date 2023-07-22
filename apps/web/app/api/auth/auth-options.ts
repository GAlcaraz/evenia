import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { gql } from '../../../data-access/graphql-client';

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
        const user = {
          id: '1',
          name: 'Admin',
          email: 'admin@admin.com',
          password: 'taqwwe',
        };

        // if (!user || !(await compare(credentials.password, user.password))) {
        if (!user) {
          return null;
        }

        return user;
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      const { accessToken } = (
        await gql.Login({
          email: credentials?.email,
          password: credentials?.password,
        })
      ).login;
      if (accessToken) {
        return true;
      } else {
        // Return false to display a default error message
        return false;
        // Or you can return a URL to redirect to:
        // return '/unauthorized'
      }
    },
    // async jwt({ token, account }) {
    //   if (account) {
    //     token['accessToken'] = account.access_token;
    //   }
    //   return token;
    // },
  },
};

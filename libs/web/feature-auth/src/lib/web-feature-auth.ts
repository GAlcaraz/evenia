import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { compare } from 'bcrypt';

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
  // callbacks: {
  //   async jwt({ token, account }) {
  //     if (account) {
  //       token['accessToken'] = account.access_token;
  //     }
  //     return token;
  //   },
  // },
};

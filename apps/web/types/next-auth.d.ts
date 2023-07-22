import NextAuth from 'next-auth';

// declare module 'next-auth' {
//   interface Session {
//     user: {
//       id: number;
//       name: string;
//       email: string;
//       accessToken: string;
//     };
//   }
// }

declare module 'next-auth' {
  interface User {
    user: {
      id?: string | null;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }
}

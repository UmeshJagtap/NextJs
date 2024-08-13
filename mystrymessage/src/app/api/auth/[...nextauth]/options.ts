import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import dbConnect from '@/lib/dbConnect';
import UserModel from '@/model/User';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      // id: "domain-login",
      // name: "Domain Account",
      id: 'Credentials',
      name: 'credentials',
      credentials: {
        username: { label: 'Email', type: 'text ' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials: any): Promise<any> {},
    }),
  ],
};

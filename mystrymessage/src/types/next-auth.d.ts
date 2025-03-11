import 'next-auth';
import { DefaultSession } from 'next-auth';
// import { JWT } from 'next-auth/jwt';

declare module 'next-auth' {
  // here we can redefine or modify the existing dataType
  interface User {
    _id?: string;
    isVerified?: boolean;
    isAcceptingMessages?: boolean;
    username?: string;
  }
  interface Session {
    user: {
      _id?: string;
      isVerified?: boolean;
      isAcceptingMessages?: boolean;
      username?: string;
    } & DefaultSession['user'];
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    _id?: string;
    isVerified?: boolean;
    isAcceptingMessages?: boolean;
    username?: string;
  }
}

// Ref :- https://next-auth.js.org/getting-started/typescript
//        >> Extend default interface properties

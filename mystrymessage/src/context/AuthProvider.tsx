'use client';

import { SessionProvider } from 'next-auth/react';

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SessionProvider>{children}</SessionProvider>;
}

// Ref :- https://next-auth.js.org/getting-started/example
//        >> Configure Shared session state

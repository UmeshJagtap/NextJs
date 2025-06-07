'use client';
import * as React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const links = [
    // {href: '/', name: 'POC'},
    { href: '/users', name: 'Users' },
    // { href: '/zUserCard', name: 'zUser Card' },
    { href: '/techs', name: 'Techs' },
    { href: '/dashboard', name: 'Dashboard' },
    { href: '/gsap', name: 'GSAP' },
    { href: '/proto', name: 'PROTO' },
    { href: '/proto2', name: 'PROTO2' },
    { href: '/arch', name: 'ARCH' },
  ];

  return (
    <>
      <div className="flex bg-gray-200 justify-start items-center">
        <Link href="/" className="">
          <h2 className="font-bold px-2">POC</h2>
        </Link>

        {/* <Link href='/users' className={clsx(
                    'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
                    {
                        'bg-sky-100 text-blue-600': pathname === '/users',
                    },
                )}>
                    Users
                </Link> */}

        {links.map((link) => {
          return (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                'flex grow items-center justify-center gap-4 rounded-md text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
                {
                  'bg-sky-100 text-blue-600': pathname === link.href,
                }
              )}
            >
              <p>{link.name}</p>
            </Link>
          );
        })}
      </div>
    </>
  );
}

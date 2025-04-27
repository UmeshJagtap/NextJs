'use client';
import * as React from 'react';
import Link from '../../../node_modules/next/link';
import clsx from '../../../node_modules/clsx/clsx';
import { usePathname } from '../../../node_modules/next/navigation';

// import clsx from '@/node_modules/clsx/clsx';
// import { usePathname } from '@/node_modules/next/navigation';

export default function Header() {
  const pathname = usePathname();

  const links = [
    // {href: '/', name: 'POC'},
    { href: '/users', name: 'Users' },
    { href: '/zUserCard', name: 'zUser Card' },
    { href: '/techs', name: 'Techs' },
    { href: '/dashboard', name: 'Dashboard' },
  ];

  return (
    <>
      <div className="flex bg-gray-200">
        <Link href="/" className="p-3">
          <h2 className="font-bold">POC</h2>
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
                'flex grow items-center justify-center gap-4 rounded-md p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
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

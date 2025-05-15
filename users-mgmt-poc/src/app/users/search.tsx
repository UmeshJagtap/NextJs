'use client';

import React, { useState, useEffect, ChangeEvent } from 'react';
import { dummyUsers } from '@/app/api/dummyUsers';
import styles from './Users.module.css';

export default function Users() {
  const [searchUser, setSearchUser] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [filteredUsers, setFilteredUsers] = useState(dummyUsers.users);

  useEffect(() => {
    // Debounce logic: Update the filtered users when debouncedSearch changes
    const filtered = dummyUsers.users.filter((user) =>
      `${user.firstName} ${user.lastName}`.toLowerCase().includes(debouncedSearch.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [debouncedSearch]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchUser(value);

    // Debounce the search input
    const debounceTimeout = setTimeout(() => {
      setDebouncedSearch(value);
    }, 300); // 300ms delay

    return () => clearTimeout(debounceTimeout); // Clear timeout on each input change
  };

  return (
    <>
      <main className={styles.parent}>
        <div className={styles.div1}>
          {/* Search Section */}
          <section className="m-2 flex gap-2">
            <input
              type="text"
              value={searchUser}
              onChange={handleSearch}
              className="p-2 w-70 border border-gray-200"
              placeholder="Search User"
            />
          </section>

          {/* User Table Section */}
          <table className="m-2 border border-gray-500 rounded-md">
            <tbody>
              {filteredUsers.map((user) => (
                <tr
                  className="border border-gray-200 rounded-md cursor-pointer hover:bg-gray-100"
                  key={user.id}
                >
                  <td className="flex justify-center content-center">
                    <span className="w-20 flex justify-center content-center">
                      <img
                        src={user.image}
                        alt="user_image"
                        width={50}
                        height={50}
                      />
                    </span>
                    <div>
                      <span className="w-50 flex justify-center content-center text-left">
                        <p>Name: {user.firstName + ' ' + user.lastName}</p>
                      </span>
                      <span className="w-50 flex justify-center content-center text-left">
                        <p>Role: {user.role.toUpperCase()}</p>
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}
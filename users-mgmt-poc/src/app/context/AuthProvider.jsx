'use client';

import React, { createContext, useState, useEffect } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  setLocalStorage(); // Initialize localStorage with default data

  const { employees } = getLocalStorage();

  useEffect(() => {
    setUserData(employees);
  }, []);

  console.log('AuthProvider data:', userData);

  return (
    <div>
      <AuthContext.Provider value={[userData, setUserData]}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;

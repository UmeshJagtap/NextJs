'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Your password does not match');
    }

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = res.json();

      if (!res.ok) {
        setError('Registeration Failed');
      }

      router.push('/login');
    } catch (error) {
      setError('Registeration Failed');
    }
  };
  return <div>Register</div>;
}

export default Register;

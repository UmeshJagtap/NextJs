import React, { useState } from 'react';

// asdfg@jkl.com
// 2364923jhkkbm

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login form submitted', email, password);
    setEmail('');
    setPassword('');
  };
  return (
    <div className="flex items-center justify-center">
      <div className="border-2 border-red-600 rounded-lg p-8 shadow-md">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            type="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={(e) => {
              console.log('Email input changed', e.target.value);
              setEmail(e.target.value);
            }}
            className="text-black border-2 border-emerald-600 bg-transparent outline-none px-5 py-3 rounded-full"
          />
          <input
            type="password"
            required
            placeholder="Enter your password"
            value={password}
            onChange={(e) => {
              console.log('Password input changed', e.target.value);
              setPassword(e.target.value);
            }}
            className="mt-2 text-black border-2 border-emerald-600 bg-transparent outline-none px-5 py-3 rounded-full"
          />
          <button className="mt-2 text-white bg-emerald-600 outline-none px-5 py-3 rounded-full">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

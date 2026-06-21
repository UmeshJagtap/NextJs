import React, { useState } from 'react';

// user@me.com
// 12345

const Login = ({ handleLogin }) => {
  // console.log('Login component rendered with props:', handleLogin);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login form submitted', email, password);
    handleLogin(email, password);
    setEmail('');
    setPassword('');
  };
  return (
    <div className="flex items-center justify-center h-screen bg-[#1c1c1c]">
      <div className="border-2 border-emerald-600 rounded-lg p-8 shadow-md">
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
              // console.log('Email input changed', e.target.value);
              setEmail(e.target.value);
            }}
            className="text-white bg-[#1c1c1c] border-2 border-emerald-600 bg-transparent outline-none px-5 py-3 rounded-full"
          />
          <input
            type="password"
            required
            placeholder="Enter your password"
            value={password}
            onChange={(e) => {
              // console.log('Password input changed', e.target.value);
              setPassword(e.target.value);
            }}
            className="mt-2 text-white bg-[#1c1c1c] border-2 border-emerald-600 bg-transparent outline-none px-5 py-3 rounded-full"
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

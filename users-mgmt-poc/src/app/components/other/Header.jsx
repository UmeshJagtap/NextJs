import React, { useState } from 'react';

const Header = ({ data }) => {
  // const [username, setUsername] = useState('');
  // if (!data) {
  //   setUsername('Admin');
  // } else {
  //   setUsername(data.firstName);
  // }

  console.log('Header data : ', data);

  const logoutUser = () => {
    localStorage.setItem('loggedInUser', '');
    window.location.reload();
  };

  return (
    <div className="p-4 flex justify-between items-start ">
      <div className="text-white">
        <p className="text-2xl font-medium">Hello</p>
        <h1 className="text-3xl font-bold">Umesh 👋</h1>
        {/* <h1 className="text-3xl font-bold">{username} 👋</h1> */}
        {/* <h1 className="text-3xl font-bold">{data.firstName} 👋</h1> */}
        <p className="text-sm text-gray-400">Welcome to your dashboard</p>
        {/* <p>{JSON.stringify(data.tasks)}</p> */}
      </div>
      <button
        onClick={logoutUser}
        className="px-5 py-2 bg-red-600 text-white text-lg font-medium rounded-sm"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;

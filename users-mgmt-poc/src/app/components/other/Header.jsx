import React from 'react';

const Header = ({ data }) => {
  return (
    <div className="p-4 flex justify-between items-end ">
      <div className="text-white">
        <p className="text-2xl font-medium">Hello</p>
        <h1 className="text-3xl font-bold">Umesh 👋</h1>
        <p className="text-sm text-gray-400">Welcome to your dashboard</p>
        {/* <p>{JSON.stringify(data.tasks)}</p> */}
      </div>
      <button className="px-5 py-2 bg-red-600 text-white text-lg font-medium rounded-sm">
        Log Out
      </button>
    </div>
  );
};

export default Header;

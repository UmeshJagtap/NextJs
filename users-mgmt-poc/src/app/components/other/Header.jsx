import React from 'react';

const Header = () => {
  return (
    <div className="p-4 flex justify-between items-end ">
      <div className="text-white">
        <p className="text-2xl font-medium">Hello</p>
        <h1 className="text-3xl font-bold">Umesh *</h1>
      </div>
      <button className="px-5 py-2 bg-red-600 text-white text-lg font-medium rounded-sm">
        Log Out
      </button>
    </div>
  );
};

export default Header;

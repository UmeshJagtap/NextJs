import React from 'react';

const TaskList = ({ data }) => {
  return (
    <div
      id="tasklist"
      className=" h-[50%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 mt-10"
    >
      <div className="flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl odd:bg-red-400 even:bg-red-500">
        <div className="flex justify-between items-center text-white">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">20 feb 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold text-white">
          Make a youtube video
        </h2>
        <p className="mt-3 text-sm text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          voluptate cumque quisquam, doloremque deleniti.
        </p>
      </div>
      <div className=" flex-shrink-0 h-full w-[300px] p-5 bg-green-400 rounded-xl">
        <div className="flex justify-between items-center text-white">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">20 feb 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold text-white">
          Make a youtube video
        </h2>
        <p className="mt-3 text-sm text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          voluptate cumque quisquam, doloremque deleniti.
        </p>
      </div>
      <div className="flex-shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl">
        <div className="flex justify-between items-center text-white">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">20 feb 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold text-white">
          Make a youtube video
        </h2>
        <p className="mt-3 text-sm text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          voluptate cumque quisquam, doloremque deleniti.
        </p>
      </div>
      <div className="flex-shrink-0 h-full w-[300px] p-5 bg-yellow-400 rounded-xl">
        <div className="flex justify-between items-center text-white">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">20 feb 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold text-white">
          Make a youtube video
        </h2>
        <p className="mt-3 text-sm text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          voluptate cumque quisquam, doloremque deleniti.
        </p>
      </div>
      <div className="flex-shrink-0 h-full w-[300px] p-5 bg-red-500 rounded-xl">
        <div className="flex justify-between items-center text-white">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">20 feb 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold text-white">
          Make a youtube video
        </h2>
        <p className="mt-3 text-sm text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          voluptate cumque quisquam, doloremque deleniti.
        </p>
      </div>
    </div>
  );
};

export default TaskList;

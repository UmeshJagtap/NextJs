import React from 'react';

const TaskListNumber = () => {
  return (
    <div className="flex mt-10 justify-between gap-5 screen">
      <div className="px-10 py-5 w-[45%] bg-blue-400  text-white rounded-xl">
        <h2 className="text-2xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="px-10 py-5 w-[45%] bg-green-400 text-white rounded-xl">
        <h2 className="text-2xl font-semibold">3</h2>
        <h3 className="text-xl font-medium">Completed Task</h3>
      </div>
      <div className="px-10 py-5 w-[45%] bg-yellow-400  text-white rounded-xl">
        <h2 className="text-2xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">Accepted Task</h3>
      </div>
      <div className="px-10 py-5 w-[45%] bg-red-400  text-white rounded-xl">
        <h2 className="text-2xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumber;

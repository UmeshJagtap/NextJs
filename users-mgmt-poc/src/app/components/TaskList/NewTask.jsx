import React from 'react';
import formatDate from '../../utils/formatDate';

const NewTask = ({ task }) => {
  return (
    <div
      //   key={index}
      className="flex-shrink-0 h-[220px] w-[300px] p-5 bg-red-400 rounded-xl odd:bg-red-400 even:bg-red-500"
    >
      <div className="flex justify-between items-center text-white">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded">
          {task.category}
        </h3>
        <h4 className="text-sm">{formatDate(task.taskDate)}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold text-white">
        {task.taskTitle}
      </h2>
      <p className="mt-3 text-sm text-white">{task.taskDescription}</p>
      <div>
        <button className="mt-4 px-3 py-1 bg-green-500 text-white text-md font-medium rounded-full mr-2">
          Accept Task
        </button>
        {/* <button className="px-5 py-2 bg-red-600 text-white text-lg font-medium rounded-sm">
          Mark as Failed
        </button> */}
      </div>
    </div>
  );
};

export default NewTask;

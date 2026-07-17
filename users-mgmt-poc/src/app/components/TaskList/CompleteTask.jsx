import React from 'react';
import formatDate from '../../utils/formatDate';

const CompleteTask = ({ task }) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl">
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
      <div className="mt-3">
        <button className="px-3 py-1 w-full bg-green-500 text-white text-md font-medium rounded-full mr-2">
          Complete
        </button>
      </div>
    </div>
  );
};

export default CompleteTask;

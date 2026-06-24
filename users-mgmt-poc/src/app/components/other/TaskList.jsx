import React from 'react';

import AcceptTask from '../TaskList/AcceptTask';
import NewTask from '../TaskList/NewTask';
import CompleteTask from '../TaskList/CompleteTask';
import FailedTask from '../TaskList/FailedTask';

const TaskList = ({ data }) => {
  console.log('TaskList props:', data);
  // const formatDate = (dateString) => {
  //   const [year, month, day] = dateString.split('-');

  //   const months = [
  //     'Jan',
  //     'Feb',
  //     'Mar',
  //     'Apr',
  //     'May',
  //     'Jun',
  //     'Jul',
  //     'Aug',
  //     'Sep',
  //     'Oct',
  //     'Nov',
  //     'Dec',
  //   ];

  //   return `${day} ${months[month - 1]} ${year}`;
  // };
  return (
    <div
      id="tasklist"
      className=" h-[50%] overflow-x-auto flex items-start justify-start gap-5 flex-nowrap w-full py-5 mt-10"
    >
      {/* <p className="text-white">{JSON.stringify(data?.tasks)}</p> */}

      {data &&
        data?.tasks &&
        data?.tasks?.map((task, index) => {
          if (task.active) {
            return <AcceptTask key={index} task={task} />;
          }
          if (task.newTask) {
            return <NewTask key={index} task={task} />;
          }
          if (task.completed) {
            return <CompleteTask key={index} task={task} />;
          }
          if (task.failed) {
            return <FailedTask key={index} task={task} />;
          }
        })}

      {/* <p className="text-white">{JSON.stringify(data?.tasks)}</p>; */}

      {/* <AcceptTask />
      <NewTask />

      <CompleteTask />
      <FailedTask /> */}

      {/* 
      {data &&
        data?.tasks &&
        data?.tasks?.map((task, index) => (
          <div
            key={index}
            className="flex-shrink-0 h-[220px] w-[300px] p-5 bg-red-400 rounded-xl odd:bg-red-400 even:bg-red-500"
          >
            <div className="flex justify-between items-center text-white">
              <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
              <h4 className="text-sm">{formatDate(task.taskDate)}</h4>
            </div>
            <h2 className="mt-5 text-2xl font-semibold text-white">
              {task.taskTitle}
            </h2>
            <p className="mt-3 text-sm text-white">{task.taskDescription}</p>
          </div>
        ))} */}

      {/* <div className="flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl odd:bg-red-400 even:bg-red-500">
        <div className="flex justify-between items-center text-white">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">{formatDate(data?.tasks[0]?.taskDate)}</h4>
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
      </div> */}
    </div>
  );
};

export default TaskList;

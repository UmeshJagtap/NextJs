import React from 'react';

import Header from '../other/Header';
import TaskListNumber from '../other/TaskListNumber';
import TaskList from '../other/TaskList';
import CreateTask from '../other/CreateTask';
import AllTask from '../other/AllTask';

const AdminDashboard = ({ data }) => {
  console.log('Admin Data : ', data);

  return (
    <>
      <div className="p-10 bg-gray-950 w-full">
        <Header data={data} />
        <CreateTask />
        <AllTask />

        {/* <TaskListNumber />
        <TaskList /> */}
      </div>
    </>
  );
};

export default AdminDashboard;

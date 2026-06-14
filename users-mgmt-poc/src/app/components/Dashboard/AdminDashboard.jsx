import React from 'react';

import Header from '../other/Header';
import TaskListNumber from '../other/TaskListNumber';
import TaskList from '../other/TaskList';
import CreateTask from '../other/CreateTask';
import AllTask from '../other/AllTask';

const AdminDashboard = () => {
  return (
    <>
      <div className="p-10 w-full bg-gray-300 h-screen">
        <Header />
        <CreateTask />
        <AllTask />

        {/* <TaskListNumber />
        <TaskList /> */}
      </div>
    </>
  );
};

export default AdminDashboard;

import React from 'react';

import Header from '../other/Header';
import TaskListNumber from '../other/TaskListNumber';
import TaskList from '../other/TaskList';

const EmployeeDashboard = ({ data }) => {
  console.log('EmployeeDashboard props:', data);
  return (
    <>
      <div className="p-10 bg-[#1c1c1c]">
        <Header data={data} />
        <TaskListNumber data={data} />
        <TaskList data={data} />
      </div>
    </>
  );
};

export default EmployeeDashboard;

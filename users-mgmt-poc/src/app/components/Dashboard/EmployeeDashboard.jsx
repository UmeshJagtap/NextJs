import React from 'react';

import Header from '../other/Header';
import TaskListNumber from '../other/TaskListNumber';
import TaskList from '../other/TaskList';

const EmployeeDashboard = (props) => {
  // console.log('EmployeeDashboard props:', props?.data);
  return (
    <>
      <div className="p-10 bg-[#1c1c1c]">
        <Header changeUser={props?.changeUser} data={props?.data} />
        <TaskListNumber data={props?.data} />
        <TaskList data={props?.data} />
      </div>
    </>
  );
};

export default EmployeeDashboard;

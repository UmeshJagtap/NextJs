import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AllTask = ({ tasks }) => {
  const authData = useContext(AuthContext);
  console.log('AllTask authData:', authData.employees);

  return (
    <div className="p-5 mt-5 overflow-auto bg-[#1c1c1c] text-white rounded">
      <div className="bg-red-400 py-2 px-4 mb-2 flex justify-between  text-center rounded">
        <h2 className="text-lg font-medium w-1/5">Employee Name</h2>
        <h3 className="text-lg font-medium w-1/5">New Task</h3>
        {/* <h5>Status</h5> */}
        <h5 className="text-lg font-medium w-1/5">Active Task</h5>
        <h5 className="text-lg font-medium w-1/5">Completed</h5>
        <h5 className="text-lg font-medium w-1/5">Failed</h5>
      </div>
      <div className="overflow-auto ">
        {authData.employees && authData.employees.length > 0 ? (
          authData?.employees?.map((employee, index) => (
            <div
              key={index}
              className="py-2 px-4 mb-2 flex justify-between text-center rounded bg-gray-700"
            >
              <h2 className="text-lg font-medium w-1/5">
                {employee.firstName} {employee.lastName}
              </h2>
              <h3 className="text-lg font-medium w-1/5 text-white">
                {employee?.taskCount?.newTask}
              </h3>
              {/* <h5 className="w-1/5">{employee.status}</h5> */}
              <h5 className="text-lg font-medium w-1/5 text-yellow-500">
                {employee?.taskCount?.active}
              </h5>
              <h5 className="text-lg font-medium w-1/5 text-green-500">
                {employee?.taskCount?.completed}
              </h5>
              <h5 className="text-lg font-medium w-1/5 text-red-400">
                {employee?.taskCount?.failed}
              </h5>
            </div>
          ))
        ) : (
          <p>No employees found.</p>
        )}
      </div>
      {/* {JSON.stringify(authData.employees)} */}

      {/* <div className="py-2 px-4 mb-2 flex justify-between rounded bg-red-400">
        <h2>Sarthak</h2>
        <h3>Make a UI design</h3>
        <h5>Status</h5>
      </div>
      <div className="py-2 px-4 mb-2 flex justify-between rounded bg-green-400">
        <h2>Sarthak</h2>
        <h3>Make a UI design</h3>
        <h5>Status</h5>
      </div>
      <div className="py-2 px-4 mb-2 flex justify-between rounded bg-yellow-400">
        <h2>Sarthak</h2>
        <h3>Make a UI design</h3>
        <h5>Status</h5>
      </div>
      <div className="py-2 px-4 mb-2 flex justify-between rounded bg-blue-400">
        <h2>Sarthak</h2>
        <h3>Make a UI design</h3>
        <h5>Status</h5>
      </div>
      <div className="py-2 px-4 mb-2 flex justify-between rounded bg-purple-400">
        <h2>Sarthak</h2>
        <h3>Make a UI design</h3>
        <h5>Status</h5>
      </div> */}
    </div>
  );
};

export default AllTask;

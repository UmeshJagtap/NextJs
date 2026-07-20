import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import styles from './createTask.module.css';
// import { log } from 'console';

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [assignTo, setAssignTo] = useState('');
  const [category, setCategory] = useState('');
  const [newTask, setNewTask] = useState({});

  // console.log('New Task Title : ', taskTitle);

  const sumbitHandler = (e) => {
    e.preventDefault();

    setNewTask({
      taskTitle,
      category,
      taskDate,
      taskDescription,
      active: false,
      newTask: true,
      completed: false,
      failed: false,
    });

    const data = userData;
    // console.log('LS Data : ', data); // ArrayOfObjects

    data.forEach(function (elem) {
      if (assignTo === elem.firstName.toLowerCase()) {
        // console.log('Pushing for : ', elem.firstName);
        // console.log(
        //   `Existing tasks of ${elem.firstName} : ${JSON.stringify(elem.tasks)} `
        // );
        // console.log('New task to be pushed : ', newTask);

        elem.tasks.push(newTask);
        elem.taskCount.newTask += 1;
        // console.log(
        //   `Yahi push hua hai for ${elem.firstName}: ${JSON.parse(elem.tasks)}`
        // );
      }
    });

    setUserData(data);
    console.log('Updated LS Data : ', data); // ArrayOfObjects

    const formCleanUp = () => {
      setAssignTo('');
      setCategory('');
      setTaskDate('');
      setTaskTitle('');
      setTaskDescription('');
      console.log('Form cleaned up');
      // console.log(data);
    };

    // setTimeout(formCleanUp, 1000);

    // localStorage.setItem('employees', JSON.stringify(data));

    // console.log('AAA', newTask);
    // console.log('BBB', data);

    // setTask((prevTasks) => [
    //   ...prevTasks,
    //   {
    //     taskTitle,
    //     taskDate,
    //     assignTo,
    //     category,
    //     taskDescription,
    //   },
    // ]);

    // console.log('Form data:', {
    //   taskTitle,
    //   taskDate,
    //   assignTo,
    //   category,
    //   taskDescription,
    // });

    // setTaskTitle('');
    // setTaskDate('');
    // setAssignTo('');
    // setCategory('');
    // setTaskDescription('');
  };

  return (
    <>
      <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
        <form
          action=""
          onSubmit={(e) => {
            sumbitHandler(e);
          }}
          className="flex flex-wrap w-full items-start justify-between gap-10"
        >
          <div className="w-1/2 text-gray-400">
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
              <input
                type="text"
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                placeholder="Make a UI design for the new project"
                className="text-sm py-1 px-2 w-[90%] rounded outline=none bg-transparent border-[1px] border-gray-400 focus:border-gray-200 focus:outline-none focus:ring-0 mb-4"
              />
            </div>

            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
              <input
                type="date"
                value={taskDate}
                onChange={(e) => setTaskDate(e.target.value)}
                className={`${styles.inputDateStyle} create-task-date text-sm py-1 px-2 w-[90%] rounded outline=none bg-transparent border-[1px] border-gray-400 focus:border-gray-200 focus:outline-none focus:ring-0 mb-4`}
              />
            </div>

            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
              <input
                type="text"
                value={assignTo}
                onChange={(e) => setAssignTo(e.target.value)}
                placeholder="employee name"
                className="text-sm py-1 px-2 w-[90%] rounded outline=none bg-transparent border-[1px] border-gray-400 focus:border-gray-200 focus:outline-none focus:ring-0 mb-4"
              />
            </div>

            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
              <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="design, dev, etc"
                className="text-sm py-1 px-2 w-[90%] rounded outline=none bg-transparent border-[1px] border-gray-400 focus:border-gray-200 focus:outline-none focus:ring-0 mb-4"
              />
            </div>
          </div>

          <div className="w-2/5 text-gray-400 flex flex-col items-start">
            <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
            <textarea
              cols={30}
              rows={8}
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptate cumque quisquam, doloremque deleniti."
              className="text-sm py-2 px-4 w-full rounded outline=none bg-transparent border-[1px] border-gray-400 focus:border-gray-200 focus:outline-none focus:ring-0 mb-4"
            />
            <button className="py-3 px-5 mt-2 bg-emerald-500 hover:bg-emerald-600 rounded text-sm w-full text-white ">
              Create Task
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateTask;

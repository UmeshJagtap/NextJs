import React from 'react';

const CreateTask = () => {
  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
      <form
        action=""
        className="flex flex-wrap w-full items-start justify-between gap-10"
      >
        <div className="w-1/2 text-gray-400">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              type="text"
              placeholder="Make a UI design for the new project"
              className="text-sm py-1 px-2 w-[90%] rounded outline=none bg-transparent border-[1px] border-gray-400 mb-4"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              type="date"
              className="text-sm py-1 px-2 w-[90%] rounded outline=none bg-transparent border-[1px] border-gray-400 mb-4"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
            <input
              type="text"
              placeholder="employee name"
              className="text-sm py-1 px-2 w-[90%] rounded outline=none bg-transparent border-[1px] border-gray-400 mb-4"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
              type="text"
              placeholder="design, dev, etc"
              className="text-sm py-1 px-2 w-[90%] rounded outline=none bg-transparent border-[1px] border-gray-400 mb-4"
            />
          </div>
        </div>

        <div className="w-2/5 text-gray-400 flex flex-col items-start">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            cols={30}
            rows={8}
            placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptate cumque quisquam, doloremque deleniti."
            className="text-sm py-2 px-4 w-full rounded outline=none bg-transparent border-[1px] border-gray-400 mb-4"
          />
          <button className="py-3 px-5 mt-2 bg-emerald-500 hover:bg-emerald-600 rounded text-sm w-full text-white ">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;

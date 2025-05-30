// Ref --https://dummyjson.com/users

'use client';

import React, { useState, useEffect, ChangeEvent } from 'react';
import { dummyUsers } from '@/app/api/dummyUsers';
import  dummyTechnologies  from '@/app/api/dummyTechnologies';
import { dummyUsersNTechs } from '@/app/api/dummyUsersNTechs';

import styles from './Users.module.css';
// import Image from 'next/image';

export default function Users() {
  const [roleFilter, setRoleFilter] = useState('');
  const [searchUser, setSearchUser] = useState('');
  const [selectedUserId, setSelectedUserId] = useState(1); // 20

  const allUsers = dummyUsers.users;
  // Filter functionality for users !!!
  // const admins = allUsers.filter((user) => user.role === 'admin');
  // const moderators = allUsers.filter((user) => user.role === 'moderator');
  // const users = allUsers.filter((user) => user.role === 'user');

  const selectedUser = allUsers.filter((user) => user.id === selectedUserId)[0];

  // Find Id in dummyUsersNTechs if it exists !!! 
  const idsInUsersNTechs: any = [];
  dummyUsersNTechs.users.map((id, courses) => {
    // console.log('user.id := ' + JSON.stringify(id.id));
    idsInUsersNTechs.push(id.id);
  })
  console.log("idsInUsersNTechs := " + idsInUsersNTechs + " " + typeof(idsInUsersNTechs));  















  const selectedUserTechs = dummyUsersNTechs?.users?.filter((userNtech) => userNtech?.id === selectedUser.id);
  // const selectedUserTechsCourses = selectedUserTechs[0].courses.map((courseId) => {
  //   return dummyTechnologies.courses.filter((course) => course.id === courseId)[0]; 
  // }
  // );

  // console.log('selectedUserTechs := ' + JSON.stringify(selectedUserTechs));
  // selectedUserTechs := [{"id":5,"courses":[10,20]}]
  console.log('selectedUserTechs[0].courses := ' + JSON.stringify(selectedUserTechs[0].courses));
  // console.log('selectedUserTechsCourses := ' + JSON.stringify(selectedUserTechsCourses));

  // Use this above courses id in array and display particular courss related to it.







  // users: [
  //   {
  //     id: 1,
  //     courses: [10, 21],
  //   }, 

  


  // console.log('Admis :- ' + JSON.stringify(admins));
  // console.log('Moderators :- ' + JSON.stringify(moderators));
  // console.log('Users :- ' + JSON.stringify(users));

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    // alert('Searched Something');
    // alert(e.target.value);
    console.log(e.target.value);
    setSearchUser(e.target.value);
  }

  const handleSelectedUser = (id: number) => {
    // alert(id + `row selected ` );
    console.log(id + ` clicked`);
    setSelectedUserId(id);
  };

  return (
    <>
      {/* User Page Layout */}
      {/* {JSON.stringify(styles)} */}
      {/* <div className={styles.parent}>
            <div className={styles.div1}>1</div>
            <div className={styles.div2}>2</div>
        </div> */}
      <main className={styles.parent}>
        <div className={styles.div1}>
          {/* <p>Users Page</p> */}

          {/* Search Section */}
          <section className="m-2 flex gap-2">
            {/* <p className='px-1'>Q</p> */}
            <input
              type="text"
              value={searchUser}
              onChange={handleSearch}
              className="p-2 w-70 border border-gray-200"
              placeholder=" Q Search User"
            />
          </section>

          {/* Filter Section  aka CheckBox*/}
          {/* <section className='p-2 flex gap-2 content-center'>
                <label htmlFor="admin">Admin</label>
                <input type="checkbox" id='admin' name='admin' 
                      //  onChange={onChangeCheckBox} 
                      //  checked={item.isChecked} 
                />

                <label htmlFor="moderator">Moderator</label>
                <input type="checkbox" id='moderator' name='admin'/>

                <label htmlFor="user">User</label>
                <input type="checkbox" id='user' name='admin'/>
          </section>  */}
           

          <section className="p-2 m-2 flex gap-2 content-center">
            <input type="radio" id="html" name="fav_language" value="HTML" />
            <label htmlFor="html">HTML</label>
            <br />
            <input type="radio" id="css" name="fav_language" value="CSS" />
            <label htmlFor="css">CSS</label>
            <br />
            <input
              type="radio"
              id="javascript"
              name="fav_language"
              value="JavaScript"
            />
            <label htmlFor="javascript">JavaScript</label>
          </section>

          {/* User Table Section */}
          <table className="m-2 border border-gray-500 rounded-md">
            <tbody>
              {/* {JSON.stringify(admins)} */}
              {allUsers &&
                allUsers.map((user) => {
                  return (
                    <tr
                      className="border border-gray-200 rounded-md cursor-pointer hover:bg-gray-100"
                      key={user.id}
                      onClick={() => handleSelectedUser(user.id)}
                    >
                      {/* <Image className='' src={user.image} alt='user_image' width={20} height={20} /> */}

                      <td className="flex justify-center content-center">
                        <span className="w-20 flex justify-center content-center">
                          <img
                            src={user.image}
                            alt="user_image"
                            width={50}
                            height={50}
                          />
                        </span>
                        <div>
                          <span className="w-50 flex justify-center content-center text-left">
                            <p>Name : {user.firstName + ' ' + user.lastName}</p>
                          </span>
                          <span className="w-50 flex justify-center content-center text-left">
                            <p>Role : {user.role.toUpperCase()}</p>
                          </span>
                        </div>
                      </td>
                      {/* <td className='w-20 flex justify-center content-center'><img src={user.image} alt='user_image' width={20} height={20}/></td>
                                <td className='w-50 flex justify-center content-center'><p>{user.firstName + ' ' + user.lastName}</p></td>
                                <td className='w-30'><p>{user.role.toUpperCase()}</p></td> */}
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>

        <div className={styles.div2}>
          {/* User Card Section */}
          {/* {JSON.stringify(moderators[0])} */}
          <section>
            {/* {JSON.stringify(selectedUser)} */}

            <div className="p-2 m-2 flex gap-8 border border-red-500 rounded-md">
              <img
                src={selectedUser.image}
                alt="user_image"
                width={150}
                height={150}
              />
              <div className="p-2 m-2">
                <p>
                  Name : {selectedUser.firstName} {selectedUser.lastName}
                </p>
                <p>
                  Age: {selectedUser.age} Gender:{' '}
                  {selectedUser.gender.charAt(0).toUpperCase() +
                    selectedUser.gender.slice(1)}
                </p>
                <p>Country: {selectedUser.address.country} </p>
                <p>State: {selectedUser.address.state}</p>
                <p>Phone No: {selectedUser.phone}</p>
              </div>
              <div className="p-2 m-2">
                <p>
                  Address: <br />
                  {selectedUser.address.address} <br />
                  {selectedUser.address.city}, {selectedUser.address.state},{' '}
                  {selectedUser.address.stateCode} <br />
                  {selectedUser.address.postalCode}
                </p>
              </div>
              <div className="p-2 m-2 gap-4">
                <button className="w-20 p-1 px-2 m-2 bg-blue-300 rounded cursor-pointer hover:bg-blue-400">
                  Edit
                </button>
                <button className="w-20 p-1 px-2 m-2 bg-blue-300 rounded cursor-pointer hover:bg-blue-400">
                  Save
                </button>
              </div>
            </div>
          </section>
        </div>

        <div className={styles.div3}>
          {/* <p>3</p> */}
          {/* <h2 className="p-2 m-2">User Management POC</h2>
          <p className="p-2 m-2">Developed by: </p>
          <p className="p-2 m-2">Vishal Kumar</p> */}
          <section>
            <div className="p-2 m-2 border border-red-500 rounded-md bg-gray-200">
              <h2>Courses Enrolled: </h2>
              {/* <ul>
                {selectedUser.courses.map((course, index) => {
                  return (
                    <li
                      key={index}
                      className="p-2 m-2 w-80 h-50 rounded-sm border border-red-300"
                    >
                      <p>{course.title}</p>
                      <img
                        src="/vercel.svg"
                        alt="Couese Image"
                        width={50}
                        height={50}
                      />
                      <p>{course.description}</p>
                    </li>
                  );
                })}
              </ul> */}
              <div className='p-2 m-2 h-100 bg-white border border-blue-300'>TEST</div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

// https://www.youtube.com/watch?v=TTx7Y3a7EmA  3.25.50

'use client';
import * as React from 'react';
import { useState, useEffect, useContext } from 'react';

// import Link from 'next/link';
// import Image from 'next/image';
// import clsx from 'clsx';
// import { usePathname } from 'next/navigation';

import Login from '../components/Auth/Login';
import { AuthContext } from '../context/AuthProvider';
// import { setLocalStorage, getLocalStorage } from '../utils/localStorage';

import EmployeeDashboard from '../components/Dashboard/EmployeeDashboard';
import AdminDashboard from '../components/Dashboard/AdminDashboard';

export default function Tasks() {
  // const pathname = usePathname();

  interface Employee {
    id: number;
    firstName: string;
    email: string;
    password: string;
    taskCounts: {
      active: number;
      newTask: number;
      completed: number;
      failed: number;
    };
    tasks: Task[];
  }

  interface Task {
    active: boolean;
    newTask: boolean;
    completed: boolean;
    failed: boolean;
    taskTitle: string;
    taskDescription: string;
    taskDate: string;
    category: string;
  }

  interface Admin {
    id: number;
    email: string;
    password: string;
  }

  interface AuthData {
    employees: Employee[];
    admin: Admin;
  }

  const [user, setUser] = useState<string | null>(null);
  const [loggedInUserData, setLoggedInUserData] = useState<string | null>(null);

  const authData: AuthData = useContext(AuthContext);
  console.log('AuthProvider data:', authData);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser'); // {"role":"admin"}

    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser); // {"role":"admin"}
      console.log('UseEffect loggedInUser', userData, 'User Logged in haai !!');

      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  }, []);

  // useEffect(() => {
  //   if (authData) {
  //     const loggedInUser = localStorage.getItem('loggedInUser');
  //     if (loggedInUser) {
  //       // const parsedUser = JSON.parse(loggedInUser);
  //       // setUser(parsedUser.role);
  //       setUser(JSON.parse(loggedInUser).role);
  //     }
  //   }
  // }, [authData]);

  const handleLogin = (email: string, password: string) => {
    console.log(
      `Login attempted with email: ${email} and password: ${password}`
    );

    if (email === 'admin@me.com' && password === '123456') {
      setUser('admin');
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));
      console.log('This is Admin');
    } else if (authData) {
      //  email === 'employee5@example.com' && password === '123') {
      try {
        const employee = authData.employees.find(
          (e: Employee) => email === e.email && password === e.password
        );

        if (employee) {
          setUser('employee');
          setLoggedInUserData(employee);
          localStorage.setItem(
            'loggedInUser',
            JSON.stringify({ role: 'employee', data: employee })
          );
          console.log('This is User');
        }
      } catch (error) {
        console.error('Error finding employee:', error);
      }
    } else {
      alert('Invalid credentials. Please try again.');
    }
    // setUser('sarthak');
    // setLocalStorage('user', 'sarthak');
  };

  // handleLogin('user@me.com', '123');

  // useEffect(() => {
  //   // Check if the employees data is already in localStorage
  //   // const employeesData = localStorage.getItem('employees');
  //   // setLocalStorage();
  //   getLocalStorage();
  // }, []);

  return (
    <>
      <div className="">
        {/* <p>Tasks Page {JSON.stringify(pathname)}</p> */}
        <section className="">
          {!user ? <Login handleLogin={handleLogin} /> : ''}
          {/* {user === 'admin' && <AdminDashboard />}
          {user === 'employee' && <EmployeeDashboard />} */}
          {/*  */}
          {user == 'admin' ? (
            <AdminDashboard data={user} />
          ) : user == 'employee' ? (
            <EmployeeDashboard data={loggedInUserData} />
          ) : null}
        </section>
      </div>
    </>
  );
}

// const techs = ['HTML', 'CSS', 'JS', 'React', 'Next'];
// const courses = [{ 'HTML' : ['https://lp.pwskills.com/Full-Stack-Web-Development-Version2-B?utm_source=google&utm_medium=cpc&utm_campaign=HR-Skills-Full-Stack-WOTP-India-Google-Lead-Search-CPL-Keyword-13-Jan-2024&utm_keyword=web%20development%20course&utm_adgroupid={adgroupname}&utm_matchtype=p&device=c&gad_source=1&gclid=CjwKCAjwtdi_BhACEiwA97y8BNIzzHm3E2-03WkkkbsZ9YvGDGg_cVq9EBxsZBIU2gGk1SxmptjjARoCkQcQAvD_BwE', 'https://www.coursera.org/learn/introduction-html-css-javascript?utm_medium=sem&utm_source=gg&utm_campaign=b2c_india_ibm-ios-android-mobile-app-developer-pc_ibm_ftcof_professional-certificates_px_dr_bau_gg_sem_pr_in_all_m_hyb_24-10_x&campaignid=21794529079&adgroupid=177111182348&device=c&keyword=&matchtype=&network=g&devicemodel=&creativeid=716372273462&assetgroupid=&targetid=dsa-2366459914698&extensionid=&placement=&gad_source=1&gclid=CjwKCAjwtdi_BhACEiwA97y8BA80ip1Sb-OIiwF0umPoUysefXWO9iH8Ol_1x4toEbIgNXPJZiWV_RoCU8AQAvD_BwE', 'https://www.udemy.com/course/html-css-javascript-react-online-certification-course/?utm_source=adwords&utm_medium=udemyads&utm_campaign=Search_DSA_Alpha_Prof_la.EN_cc.India&campaigntype=Search&portfolio=India&language=EN&product=Course&test=&audience=DSA&topic=JavaScript&priority=Alpha&utm_content=deal4584&utm_term=_._ag_160270535425_._ad_696202838322_._kw__._de_c_._dm__._pl__._ti_dsa-1676636482719_._li_20457_._pd__._&matchtype=&gad_source=1&gclid=CjwKCAjwtdi_BhACEiwA97y8BL6f8nJZl5GeGSsN1vDHRPbQzOp5Thb3kAml07UAF3l17pmM11465BoCo64QAvD_BwE']},
//                   {'CSS' : []},
//                   {'JS' : []},
//                   {'React' : []},
//                   {'Next' : []},
//                 ];

// // Object.keys() ;
// const test_obj = {};

// const technologies =  [
//     {
//       "id":1,
//       "name": "Python",
//       "description": "A versatile programming language used for web development, data analysis, AI, and more.",
//       "courses": [
//         {
//           "title": "Python for Beginners",
//           "level": "Beginner",
//           "duration": "4 weeks"
//         },
//         {
//           "title": "Advanced Python Programming",
//           "level": "Advanced",
//           "duration": "6 weeks"
//         }
//       ]
//     },
//     {
//       "id":2,
//       "name": "JavaScript",
//       "description": "A powerful scripting language primarily used for dynamic web development.",
//       "courses": [
//         {
//           "title": "JavaScript Essentials",
//           "level": "Beginner",
//           "duration": "3 weeks"
//         },
//         {
//           "title": "JavaScript Frameworks (React, Vue)",
//           "level": "Intermediate",
//           "duration": "5 weeks"
//         }
//       ]
//     },
//     {
//       "id":3,
//       "name": "Machine Learning",
//       "description": "A subset of AI that provides systems the ability to learn from data.",
//       "courses": [
//         {
//           "title": "Introduction to Machine Learning",
//           "level": "Beginner",
//           "duration": "6 weeks"
//         },
//         {
//           "title": "Deep Learning with TensorFlow",
//           "level": "Advanced",
//           "duration": "8 weeks"
//         }
//       ]
//     }
//   ];

{
  /* <div className="p-2 m-2 flex gap-4 bg-gray-100 rounded-md"> */
}
{
  /* {techs &&
  techs.map((tech) => {
    return (
      <div key={tech.id} className="">
        <Link
          key={tech.name}
          href={`/${tech.name.trim().toLowerCase()}`} // Add strip func here
          className={clsx(
            'flex grow items-center justify-center gap-4 rounded-md p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
            {
              'bg-sky-100 text-blue-600':
                // pathname === `/tech/${tech.name.toLowerCase().trim()}`,
                pathname === `/${tech.name.trim().toLowerCase()}`,
            }
          )}
        >
          <p>{tech.name}</p>
        </Link>
      </div>
    );
  })} */
}
{
  /* <TechTopBar techs={techs} handleTechs={handleTechs(id)} /> */
}
{
  /* TechTopBar(techs, handleTechs) */
}
{
  /* </div>; */
}

// {technology &&
//   technology.map((tech) => {
//     return (
//       <div key={tech.id} className="p-2 mx-2 ">
//         {/* <p>Technology {tech.id}: {tech.name}</p> */}
//         <p>{tech.name}</p>
//         <p>-- {tech.description}</p>
//         <p className="p-2">Courses :-</p>
//         <div className="flex">
//           {tech.courses.map((item, index) => {
//             return (
//               <div
//                 key={index}
//                 className="p-2 m-2 w-80 h-50 rounded-sm border border-red-300"
//               >
//                 <p>{item.title}</p>
//                 <Image
//                   src="/vercel.svg"
//                   alt="Couese Image"
//                   width={50}
//                   height={50}
//                   className="my-2 bg-gray-300 border border-black rounded-sm"
//                 />
//                 {/* src="/vercel.svg" */}
//                 {/* <Image className="dark:invert" src="/vercel.svg" alt="Course logo" width={150} height={150} /> */}
//                 <p>Level : {item.level}</p>
//                 <p>Duration : {item.duration}</p>
//                 <button
//                   className="px-2 mt-2 bg-blue-400 hover:bg-blue-500 rounded-sm animate-bounce cursor-pointer"
//                   onClick={handleEnroll}
//                 >
//                   Enroll Now
//                 </button>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     );
//   })}

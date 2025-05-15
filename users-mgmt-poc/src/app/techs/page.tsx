'use client';
import * as React from 'react';
import { useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

import technologies from '../api/dummyTechnologies';

// import TechTopBar from '../components/TechTopBar';

// interface;

export default function Techs() {
  const pathname = usePathname();
  const techs = technologies;

  const [technology, setTechnology] = useState([
    {
      id: 1,
      name: 'Python',
      description:
        'A versatile programming language used for web development, data analysis, AI, and more.',
      courses: [
        {
          title: 'Python for Beginners',
          level: 'Beginner',
          duration: '4 weeks',
        },
        {
          title: 'Advanced Python Programming',
          level: 'Advanced',
          duration: '6 weeks',
        },
      ],
    },
  ]);
  // console.log(technology);

  const handleTechs = (id: number) => {
    const techSelected = techs.filter((tech) => id === tech.id);
    setTechnology(techSelected);
    console.log(techSelected[0].name);
  };

  const handleEnroll = () => { alert('Course Enrolled !! '); };

  return (
    <>
      {/* <p>Techs Page</p> */}

      {/* Tech TopBar    ---------- Make a Tech TopBar Component */}

      <div className="p-2 m-2 flex gap-4 bg-gray-100 rounded-md">
        {/* {JSON.stringify(techs, null, 2)} */}
        {/* {JSON.stringify(pathname)} */}
        {techs &&
          techs.map((tech) => {
            return (
              <div key={tech.id} className="">
                {/* <button
                  onClick={() => handleTechs(tech.id)}
                  // className="p-1 px-2 hover:rounded-md hover:bg-gray-200 hover:cursor-pointer"
                  // className={clsx(
                  //   'flex grow items-center justify-center gap-4 rounded-md p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
                  //   {
                  //     'bg-sky-100 text-blue-600': pathname === tech.id,
                  //   }
                  // )}
                  // className={clsx()}
                >
                  {tech.name}
                </button> */}
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
          })}
        {/* <TechTopBar techs={techs} handleTechs={handleTechs(id)} /> */}
        {/* TechTopBar(techs, handleTechs) */}
      </div>
      {/* {JSON.stringify(techs)} */}

      {/* ----------  Courses  ---------- */}

      {/* {JSON.stringify(technology)} */}
      {technology &&
        technology.map((tech) => {
          return (
            <div key={tech.id} className="p-2 mx-2 ">
              {/* <p>Technology {tech.id}: {tech.name}</p> */}
              <p>{tech.name}</p>
              <p>-- {tech.description}</p>
              <p className="p-2">Courses :-</p>
              <div className="flex">
                {tech.courses.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="p-2 m-2 w-80 h-50 rounded-sm border border-red-300"
                    >
                      <p>{item.title}</p>
                      <Image
                        src="/vercel.svg"
                        alt="Couese Image"
                        width={50}
                        height={50}
                        className="my-2 bg-gray-300 border border-black rounded-sm"
                      />
                      {/* src="/vercel.svg" */}
                      {/* <Image className="dark:invert" src="/vercel.svg" alt="Course logo" width={150} height={150} /> */}
                      <p>Level : {item.level}</p>
                      <p>Duration : {item.duration}</p>
                      <button
                        className="px-2 mt-2 bg-blue-400 hover:bg-blue-500 rounded-sm animate-bounce cursor-pointer"
                        onClick={handleEnroll}
                      >
                        Enroll Now
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
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

'use client';

// import { useState, useEffect } from 'react';

// export function setLocalStorage() {
//   // const [storedValue, setStoredValue] = useState(null);
//   useEffect(() => {
//     try {
//       // const employees = window.localStorage.getItem(key);
//       // const admin = window.localStorage.getItem(key);

//       localStorage.setItem('employeesNew', JSON.stringify(employees));
//       localStorage.setItem('adminNew', JSON.stringify(admin));
//     } catch (error) {
//       console.error('Error writing localStorage key:', key, error);
//     }
//   }, []);
// }

const employees = [
  {
    id: 0,
    firstName: 'Kiran',
    email: 'employee0@example.com',
    password: '123',
    taskCount: {
      active: 2,
      newTask: 3,
      completed: 2,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        taskTitle: 'Design Homepage Navigation',
        taskDescription:
          'Create the initial homepage navigation design in Figma.',
        taskDate: '2026-06-18',
        category: 'Design',
      },
      {
        active: false,
        newTask: false,
        taskTitle: 'Update Logo',
        taskDescription: 'Revise company logo according to brand guidelines.',
        taskDate: '2026-06-15',
        category: 'Branding',
      },
      {
        active: true,
        newTask: false,
        taskTitle: 'Review UI Components',
        taskDescription: 'Check consistency across shared UI components.',
        taskDate: '2026-06-20',
        category: 'UI/UX',
      },
    ],
  },
  {
    id: 1,
    firstName: 'Aarav',
    email: 'employee1@example.com',
    password: '123',
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: 'Design Homepage',
        taskDescription: 'Create the initial homepage design in Figma.',
        taskDate: '2026-06-18',
        category: 'Design',
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: 'Update Logo',
        taskDescription: 'Revise company logo according to brand guidelines.',
        taskDate: '2026-06-15',
        category: 'Branding',
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: 'Review UI Components',
        taskDescription: 'Check consistency across shared UI components.',
        taskDate: '2026-06-20',
        category: 'UI/UX',
      },
    ],
  },

  {
    id: 2,
    firstName: 'Diya',
    email: 'employee2@example.com',
    password: '123',
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: 'Create Landing Page',
        taskDescription:
          'Design a responsive landing page for the new product.',
        taskDate: '2026-06-19',
        category: 'Web Design',
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: 'Prepare Wireframes',
        taskDescription: 'Develop wireframes for the mobile application.',
        taskDate: '2026-06-21',
        category: 'UI/UX',
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: 'Client Presentation',
        taskDescription: 'Present design concepts to the client.',
        taskDate: '2026-06-16',
        category: 'Meeting',
      },
    ],
  },

  {
    id: 3,
    firstName: 'Rohan',
    email: 'employee3@example.com',
    password: '123',
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: 'Develop Login API',
        taskDescription: 'Implement authentication endpoints.',
        taskDate: '2026-06-20',
        category: 'Backend',
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: 'Database Setup',
        taskDescription: 'Configure PostgreSQL database.',
        taskDate: '2026-06-14',
        category: 'Database',
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: 'Payment Integration',
        taskDescription: 'Integrate third-party payment gateway.',
        taskDate: '2026-06-17',
        category: 'Backend',
      },
    ],
  },

  {
    id: 4,
    firstName: 'Meera',
    email: 'employee4@example.com',
    password: '123',

    taskCount: {
      active: 2,
      newTask: 0,
      completed: 2,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: 'Content Strategy',
        taskDescription: 'Plan content for upcoming marketing campaign.',
        taskDate: '2026-06-18',
        category: 'Marketing',
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: 'SEO Audit',
        taskDescription: 'Review website SEO performance.',
        taskDate: '2026-06-21',
        category: 'SEO',
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: 'Newsletter Draft',
        taskDescription: 'Create monthly newsletter content.',
        taskDate: '2026-06-13',
        category: 'Content',
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: 'Social Media Plan',
        taskDescription: 'Schedule posts for social media channels.',
        taskDate: '2026-06-12',
        category: 'Marketing',
      },
    ],
  },

  {
    id: 5,
    firstName: 'Kabir',
    email: 'employee5@example.com',
    password: '123',
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: 'Test User Registration',
        taskDescription: 'Perform QA testing on registration flow.',
        taskDate: '2026-06-21',
        category: 'QA',
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: 'Bug Verification',
        taskDescription: 'Verify fixes for reported bugs.',
        taskDate: '2026-06-16',
        category: 'Testing',
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: 'Automation Script',
        taskDescription: 'Create automated test scripts.',
        taskDate: '2026-06-18',
        category: 'Automation',
      },
    ],
  },
];

const admin = {
  id: 100,
  email: 'admin@example.com',
  password: '123',
  firstName: 'ADMIN',
};

// console.log('Initial employees data:', employees);
// console.log('Initial admin data:', admin);

export const setLocalStorage = () => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
  }
};

export const getLocalStorage = () => {
  if (typeof window !== 'undefined') {
    const employees = localStorage.getItem('employees')
      ? JSON.parse(localStorage.getItem('employees'))
      : [];

    const admin = localStorage.getItem('admin')
      ? JSON.parse(localStorage.getItem('admin'))
      : [];

    // console.log('Retrieved employees from localStorage:', employees);
    // console.log('Retrieved admin from localStorage:', admin);
    return { employees, admin };
  }
};

// SAMPLE EMPLOYEE JSON DATA WITH TASKS
// const employeeWithTasks = [
//   {
//     id: 1,
//     firstName: 'Aarav',
//     email: 'employee1@example.com',
//     password: '123',

//     taskNumbers: {
//       active: 2,
//       newTask: 1,
//       completed: 1,
//       failed: 0,
//     },

//     tasks: [
//       {
//         active: true,
//         newTask: true,
//         completed: false,
//         failed: false,
//         taskTitle: 'Design Homepage',
//         taskDescription: 'Create the initial homepage design in Figma.',
//         taskDate: '2026-06-18',
//         category: 'Design',
//       },
//       {
//         active: false,
//         newTask: false,
//         completed: true,
//         failed: false,
//         taskTitle: 'Update Logo',
//         taskDescription: 'Revise company logo according to brand guidelines.',
//         taskDate: '2026-06-15',
//         category: 'Branding',
//       },
//       {
//         active: true,
//         newTask: false,
//         completed: false,
//         failed: false,
//         taskTitle: 'Review UI Components',
//         taskDescription: 'Check consistency across shared UI components.',
//         taskDate: '2026-06-20',
//         category: 'UI/UX',
//       },
//     ],
//   },
// ];

// OLD SIMPLE JSON DATA WITHOUT TASKS
// const employees = [
//   {
//     id: 1,
//     email: 'employee1@example.com',
//     password: '123',
//   },
//   {
//     id: 2,
//     email: 'employee2@example.com',
//     password: '123',
//   },
//   {
//     id: 3,
//     email: 'employee3@example.com',
//     password: '123',
//   },
//   {
//     id: 4,
//     email: 'employee4@example.com',
//     password: '123',
//   },
//   {
//     id: 5,
//     email: 'employee5@example.com',
//     password: '123',
//   },
// ];

// const admin = {
//   id: 100,
//   email: 'admin@example.com',
//   password: '123',
// };

// typescript -------------------- local Storage hook for Next.js App Router
//
// "use client"; // Required for Next.js App Router

// import { useState, useEffect } from "react";

// export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T | ((val: T) => T)) => void] {
//   // 1. Initialize state with initialValue to prevent SSR mismatch
//   const [storedValue, setStoredValue] = useState<T>(initialValue);

//   // 2. Fetch from localStorage once component is mounted on the client
//   useEffect(() => {
//     try {
//       const item = window.localStorage.getItem(key);
//       if (item) {
//         setStoredValue(JSON.parse(item));
//       }
//     } catch (error) {
//       console.error("Error reading localStorage key:", key, error);
//     }
//   }, [key]);

//   // 3. Return a wrapped version of useState's setter function that persists the new value to localStorage
//   const setValue = (value: T | ((val: T) => T)) => {
//     try {
//       const valueToStore = value instanceof Function ? value(storedValue) : value;
//       setStoredValue(valueToStore);
//       if (typeof window !== "undefined") {
//         window.localStorage.setItem(key, JSON.stringify(valueToStore));
//       }
//     } catch (error) {
//       console.error("Error setting localStorage key:", key, error);
//     }
//   };

//   return [storedValue, setValue];
// }

'use client'

import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function Home() {
    // Define an interface for the post data
    interface Post {
        id: number;
        title: string;
        body: string;
    }
    
    const [data, setData] = useState<Post[]>([]);
    // const [data, setData] = useState(null);
    // const [loading, setLoading] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    
    const fetchData = () => {
        setIsLoading(true);
        axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            setData(response.data);
        })
        .catch(error => {
            console.error('Error fetching data: ', error);
            setError(error.message);
        })
        .finally(() => setIsLoading(false)); // complete loading success/fail
    };

    // useEffect(() => {
    //     axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
    //     .then(response => {
    //         setData(response.data);
    //     })
    //     .catch(error => {
    //         console.error('Error fetching data: ', error);
    //     });
    // }, []);
    
    const hideData = () => {
        setData([]);
    };

    return (
        <div className='bg-white flex flex-col items-center justify-center'>
        <h1 className='text-2xl font-bold'>Users Management POC</h1>
        <h1>Posts</h1>
        <h2>Get Data from API</h2>
        <div className='p-2 m-2 flex gap-4 bg-gray-100 rounded-md'>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={fetchData}>Get Data</button>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={hideData}>Hide Data</button>
        </div>
        <ul className='p-2 m-2'>
            {error && <p>Error: {error}</p>}
            {isLoading && <p>Loading...</p>}
           
            {/* {data && <pre>{JSON.stringify(data, null, 2)}</pre>} */}

            {data && data.map((post: Post) => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
        </div>
    );
    }



// Fecth along with loading and error handling
// import React, { useState, useEffect } from 'react';

// function DataFetchingComponent() {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('your_api_endpoint');
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         const jsonData = await response.json();
//         setData(jsonData);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error: {error}</p>;
//   }

//   return (
//     <div>
//       {/* Render your data here */}
//       {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
//     </div>
//   );
// }

// export default DataFetchingComponent;
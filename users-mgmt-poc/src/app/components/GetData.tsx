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
    
    const fetchData = () => {
        axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            setData(response.data);
        })
        .catch(error => {
            console.error('Error fetching data: ', error);
        });
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
            {data && data.map(post => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
        </div>
    );
    }
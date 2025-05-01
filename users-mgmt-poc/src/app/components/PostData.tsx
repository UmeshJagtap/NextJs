'use client'

import React, { useState, useEffect } from 'react';
// const axios = require('axios');
import axios from 'axios';

interface Post {
    id: number;
    title: string;
    body: string;
}

export default function PostForm() {
    const [postData, setPostData] = useState({
        title: '',
        body: ''
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/posts', postData)
            .then(response => {
                console.log('Post created: ', response.data);
                // Optionally update state or do other tasks after successful post
            })
            .catch(error => {
                console.error('Error creating post: ', error);
                // Handle error
            });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setPostData({
            ...postData,
            [name]: value
        });
    };

    return (
        <div className='p-10 bg-white flex flex-col items-center justify-center bg-gray-100'>
            <h1 className='text-2xl font-bold'>Users Management POC</h1>
            <h2>Create Post</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input
                        type="text"
                        name="title"
                        value={postData.title}
                        onChange={handleChange}
                        className='border-2 border-gray-300 rounded p-2 m-2'
                        placeholder='Enter title'
                    />
                </label>
                <br />
                <label>
                    Body:
                    <textarea
                        name="body"
                        value={postData.body}
                        onChange={handleChange}
                        className='border-2 border-gray-300 rounded p-2 m-2'    
                        placeholder='Enter body'
                    />
                </label>
                <br />
                <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Submit</button>
            </form>
        </div>
    );
}
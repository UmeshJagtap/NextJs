'use client'

import React from 'react';

import GetData from '@/app/components/GetData';
import PostData from '../components/PostData';


export default function Home() {
    return (
        <div className='bg-gray-100 flex flex-col items-center justify-center'>
            <PostData />
            <GetData />
        </div>
    );
}

// 'use client'

// import React, {useState, useEffect} from 'react';
// // const axios = require('axios');
// import axios from 'axios';

// interface Post {
//     id: number;
//     title: string;
//     body: string;
// }
// function PostForm() {
//     const [postData, setPostData] = useState({
//     title: '',
//     body: ''
//     });

//     const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post('https://jsonplaceholder.typicode.com/posts', postData)
//         .then(response => {
//         console.log('Post created: ', response.data);
//         // Optionally update state or do other tasks after successful post
//         })
//         .catch(error => {
//         console.error('Error creating post: ', error);
//         // Handle error
//         });
//     };

//     const handleChange = (e) => {
//     const { name, value } = e.target;
//     setPostData({
//         ...postData,
//         [name]: value
//     });
//     };

//     return (
//     <div>
//         <h2>Create Post</h2>
//         <form onSubmit={handleSubmit}>
//         <label>
//             Title:
//             <input
//             type="text"
//             name="title"
//             value={postData.title}
//             onChange={handleChange}
//             />
//         </label>
//         <br />
//         <label>
//             Body:
//             <textarea
//             name="body"
//             value={postData.body}
//             onChange={handleChange}
//             />
//         </label>
//         <br />
//         <button type="submit">Submit</button>
//         </form>
//     </div>
//     );
//     }


// export default function Home() {
// // Define an interface for the post data
// interface Post {
//     id: number;
//     title: string;
//     body: string;
// }

// const [data, setData] = useState<Post[]>([]);

// useEffect(() => {
//     axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
//     .then(response => {
//         setData(response.data);
//     })
//     .catch(error => {
//         console.error('Error fetching data: ', error);
//     });
// }, []);

// return (
//     <div>
//     <h1>Posts</h1>
//     <h2>Get Data from API</h2>
//     <ul className='p-2 m-2'>
//         {data.map(post => (
//         <li key={post.id}>{post.title}</li>
//         ))}
//     </ul>
//     <h2>Post Data to API</h2>
//     <PostForm />
//     </div>
// );
// }


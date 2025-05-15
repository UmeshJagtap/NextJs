'use client'
import React, {useState, useEffect} from 'react';
const axios = require('axios');


// Simple --GET-- AXIOS request in Next.js
const GetDataWithAxios = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

// Simple --POST-- AXIOS request in Next.js
const  PostFormDataWithAxios = () => {
  const [postData, setPostData] = useState({
    title: '',
    body: ''
  });

  const handleSubmit = (e) => {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostData({
      ...postData,
      [name]: value
    });
  };

  return (
    <div>
      <h2>Create Post</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={postData.title}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Body:
          <textarea
            name="body"
            value={postData.body}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <h1>Axios Example</h1>
      <GetDataWithAxios />
      <PostFormDataWithAxios />
    </div>
  );
}
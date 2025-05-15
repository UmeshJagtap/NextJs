// import axios from 'axios'
// import React from 'react'
// axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/'
// axios.defaults.headers.post['Content-Type'] = 'application/json'
// axios.defaults.headers.post['Accept'] = 'application/json'



// const page = () => {
//   return (
//     <div>page</div>
//   )
// }

// export default page


// import { useEffect, useState } from 'react';
// import { AxiosInstance } from '../utils/AxiosInstance';

// const Home = () => {
//     const [data, setData] = useState(null);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         AxiosInstance.get('/data')
//             .then(response => {
//                 setData(response.data);
//             })
//             .catch(error => {
//                 setError(error.message);
//             });
//     }, []);

//     if (error) return <div>Error: {error}</div>;
//     if (!data) return <div>Loading...</div>;

//     return (
//         <div>
//             <h1>Data from API</h1>
//             <pre>{JSON.stringify(data, null, 2)}</pre>
//         </div>
//     );
// };

// export default Home;





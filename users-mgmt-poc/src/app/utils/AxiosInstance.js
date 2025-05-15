import axios from "axios";

export const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://jsonplaceholder.typicode.com/";
export const API_KEY = process.env.NEXT_PUBLIC_API_KEY || "your_api_key_here";

// Axios Interceptor Instance -------++
export function AxiosInstance() {
    return axios.create({
        baseURL: process.env.BASE_URL
    });
}

// Axios Interceptor for Request -------++
AxiosInstance.interceptors.request.use(
    (config) => {
        config.headers["Content-Type"] = "application/json";
        config.headers["Authorization"] = `Bearer ${API_KEY}`;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);  

// Axios Interceptor for Response -------++
AxiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export { AxiosInstance };
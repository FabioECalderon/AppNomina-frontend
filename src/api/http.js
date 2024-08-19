import axios from 'axios';
import { clearSession, getSession } from './session';

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    // Append token in Authorization header for request different to GET
    const token = getSession();
    if (token && config.method !== 'GET') {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    console.log(JSON.stringify(error, null, 2));
    if (error.response?.status === 401) {
      clearSession();
      window.location = 'login';
    }

    //Process errors from every backend responses in a single place
    return Promise.reject(error.message);
  },
);

export default instance;

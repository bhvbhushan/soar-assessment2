import axios from 'axios';

// Create Axios instance
const axiosInstance = axios.create({
  baseURL: '/', // Adjust as needed
  headers: {
    'Content-Type': 'application/json',
  },
});

// Optional: Add any default configurations or interceptors here

export default axiosInstance;

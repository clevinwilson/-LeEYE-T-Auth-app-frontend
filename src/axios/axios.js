import axios from 'axios';

const axiosInstance = () => {
    const instance = axios.create({
        baseURL: "http://localhost:4000/",
        timeout: 5000,
        headers: {
            'Content-Type': 'application/json'
        }
    });

    instance.interceptors.request.use((request) => {
        const token = localStorage.getItem("JwtToken")
        request.headers.Authorization = `Bearer ${token}`
        return request
    })

    return instance;
}

export default axiosInstance;
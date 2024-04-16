import axios from "axios";


const axiosInterceptorInstance = axios.create({
    baseURL: import.meta.env.VITE_ADMINURL,
});

axiosInterceptorInstance.interceptors.request.use((req) => {
    if (localStorage.getItem("currentAdmin")) {
        req.headers.Authorization = "Bearer " + localStorage.getItem("currentAdmin");
    }
    return req;
});



export default axiosInterceptorInstance;

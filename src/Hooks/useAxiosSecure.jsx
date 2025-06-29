import axios from 'axios';
import {use} from 'react';
import {AuthCotext} from '../Contexts/AuthProvider.jsx';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000'
})

const useAxiosSecure = () => {
    const {saveUser} = use(AuthCotext)
    axiosInstance.interceptors.request.use(config => {
        config.headers.authorization = `Bearer ${saveUser.accessToken}`
        return config
    })
    return axiosInstance
};

export default useAxiosSecure;
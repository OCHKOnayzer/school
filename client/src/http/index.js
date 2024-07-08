import axios from "axios";
export const AUTH_API_URL = `http://localhost:8080/api/auth`;
export const SUB_API_URL = `http://localhost:8080/api/sub`;
export const QUEST_API_URL = `http://localhost:8080/api/study`;

export const apiAuth = axios.create({
    withCredentials:true,
    baseURL: AUTH_API_URL
})
export const apiSub = axios.create({ 
    baseURL: SUB_API_URL
})
export const apiQuest = axios.create({
    baseURL: QUEST_API_URL
})

apiAuth.interceptors.request.use(config=> { 
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})

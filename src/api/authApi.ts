import axios from "axios";

// export const serverUrl = "http://localhost:8000"

// @ts-ignore
const api = axios.create({
    withCredentials: true,
    baseURL: '',
    headers:{
        'ngrok-skip-browser-warning':true
    }
})
//@ts-ignore
export const ngrokInstance = axios.create({
    baseURL: '',
    headers:{
        'ngrok-skip-browser-warning':true
    }
})


api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${sessionStorage.getItem('accessToken')}`
    return config
})
api.interceptors.response.use((config) => {

    return config
}, async (error) => {

    const originalRequest = error.config
    if (error.response.status == 401) {
        const response = await axios.get(`${process.env.SERVER_URL}/api/v1/auth/refresh`, { withCredentials: true })
        sessionStorage.setItem('accessToken', response.data.userData.accessToken)
        return api.request(originalRequest)
    }
})

export default api
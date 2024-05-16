import axios from "axios";


export const axiosPrivate = axios.create({
    baseURL: "http://localhost:8080",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json"
    }
})
import axios from "axios";

// using localStorage

// just using access token only

const accessToken = localStorage.getItem("accessToken")

let headers = {
    "Authorization": `Bearer ${accessToken}`
}

export const apiClient = axios.create({
    baseURL: "http://localhost:8080",
    headers: headers
})




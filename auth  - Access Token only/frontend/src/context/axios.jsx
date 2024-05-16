import { useEffect } from 'react'
import { apiClient } from '../api/axios'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/auth'

const useAxios = () => {

    const { isAuthenticated,accessToken } = useAuth()

    const navigate = useNavigate()

    useEffect(() => {

        const requestInterceptor = apiClient.interceptors.request.use(
            config => {
                if (accessToken) {
                    config.headers.Authorization = `Bearer ${accessToken}`
                }
                return config
            },
            error => {
                return Promise.reject(error)
            }
        )

        const responseInterceptor = apiClient.interceptors.response.use(
            response => response,
            error => {
                // if access token is expired
                if (error.response.status === 403) {
                    // redirect to login page
                    navigate("/login")
                    localStorage.removeItem("accessToken")
                }
                return Promise.reject(error)
            }
        )

        return () => {
            apiClient.interceptors.response.eject(responseInterceptor)
            apiClient.interceptors.request.eject(requestInterceptor)
        }

    }, [isAuthenticated])

    return apiClient
}

export default useAxios
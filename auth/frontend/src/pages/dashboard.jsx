import React, { useState } from 'react'
import { useAuth } from '../hooks/auth'
import Button from '../components/button'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const DashboardPage = () => {
    const { accessToken, isAuthenticated,setAccessToken,setIsAuthenticated } = useAuth()

    const [isLoading, setLoading] = useState(false)

    const navigate = useNavigate()

    const handleLogout = async () => {
        try {
            setLoading(true)
            const response = await axios.post('http://localhost:8080/auth/logout',{},{
                headers: {
                   Authorization: `Bearer ${accessToken}` 
                },
                withCredentials: true // for cookie clear,set by backend
            })
            if (response?.data?.message) {
                toast.success(response?.data?.message)
            } else {
                toast.success('Logged out successfully')
            }
            setAccessToken(null)
            setIsAuthenticated(false)
            navigate("/login")
        } catch (error) {
            console.log(error)
            if (error?.response?.data?.message) {
                toast.error(error.response.data.message)
            } else {
                toast.error('Failed to logout')
            }
        }finally{
            setLoading(false)
        }
    }
    return (
        <div className='flex flex-col items-center justify-center'>
            <h2>DashboardPage</h2>
            {accessToken && <p>Access Token: {accessToken}</p>}
            {isAuthenticated ? <p>User is authenticated</p> : <p>User is not authenticated</p>}

            <Button onClick={handleLogout}>
                {
                   isLoading ? 'Logging out...' : 'Logout' 
                }
            </Button>
        </div>
    )
}

export default DashboardPage
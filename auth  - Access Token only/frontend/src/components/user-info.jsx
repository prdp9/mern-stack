import React, { useEffect, useState } from 'react'
import { useAuth } from '../hooks/auth'
import useAxios from '../context/axios'

const UserInfo = () => {

    const [user, setUser] = useState(null)
    const { accessToken, isAuthenticated, } = useAuth()

    const apiClient = useAxios()

    async function fetchUser() {
        try {
            const response = await apiClient.get("/user")
            setUser(response.data)

        } catch (error) {
            console.log("error", error)
        }
    }

    useEffect(() => {
        fetchUser()
    }, [accessToken, isAuthenticated])


    return (
        <div>
            <h2>User Info</h2>
            <div>
                <p>Name: {user?.name}</p>
                <p>Email: {user?.email}</p>

            </div>
        </div>
    )
}

export default UserInfo
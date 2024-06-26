import React, { useState } from 'react'
import Input from '../input'
import Button from '../button'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'
import useAxios from '../../context/axios'

const LoginForm = () => {

    const [formValues, setFormValues] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate()

    const axios = useAxios()

    const { setAccessToken, setIsAuthenticated } = useAuth()

    const handleChange = (e) => {

        const { name, value } = e.target

        setFormValues(prev => {
            return {
                ...prev,
                [name]: value
            }
        })

    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.post("http://localhost:8080/auth/login", formValues, {
                withCredentials: true
            })
            if (response?.data?.message) {
                toast.success(response?.data?.message)
            } else {
                toast.success('Logged in successfully')
            }


            // for access token using localstorage
            localStorage.setItem("accessToken", response?.data?.accessToken)

            // for refresh and acess token
            setAccessToken(response?.data?.accessToken)



            // for both method
            setIsAuthenticated(true)
            navigate("/dashboard")
        } catch (error) {
            console.log('error from backend', error?.response?.data?.message)

            if (error?.response?.data?.message) {
                toast.error(error.response.data.message)
            } else {
                toast.error('Failed to log in')
            }
        }

        // send backend
    }
    return (

        <form onSubmit={handleSubmit}>
            <div className='flex flex-col gap-5 justify-center items-center pt-5'>
                <Input type='email' placeholder='Enter your email'
                    value={formValues.email}
                    name='email'
                    label="Email"
                    onChange={handleChange}

                />
                <Input type='password'
                    label="Password"
                    placeholder='Enter your password'
                    value={formValues.password}
                    onChange={handleChange}
                    name='password'

                />

                <Button>
                    Submit
                </Button>
            </div>
        </form>
    )
}

export default LoginForm
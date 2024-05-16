import { createContext, useState } from 'react'


export const AuthContext = createContext()


export const AuthProvider = ({ children }) => {

	const [isAuthenticated, setIsAuthenticated] = useState(false)

	const [accessToken, setAccessToken] = useState(localStorage.getItem("accessToken") || null)


	const storeValue = {
		isAuthenticated,
		setIsAuthenticated,
		accessToken,
		setAccessToken
	}

	return <AuthContext.Provider value={storeValue}>
		{children}
	</AuthContext.Provider>
}


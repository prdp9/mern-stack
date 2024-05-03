import {createContext} from 'react'


export const AuthContext = createContext()


export const AuthProvider = ({children}) => {

	const [isAuthenticated, setIsAuthenticated] = useState(false)


	const storeValue = {
		isAutheticated,
		setIsAutheticated
	}

	return <AuthContext.Provider value={storeValue}>
		{children}
	</AuthContext.Provider>
}


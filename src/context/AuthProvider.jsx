import { useState, useEffect, createContext, useCallback } from "react"

const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [auth, setAuth] = useState({})
    const [token, setToken] = useState('')
    const [authLS, setAuthLS] = useState()
    const [tokenLS, setTokenLS] = useState('')

    useEffect(() => {
        setAuthLS(JSON.parse(localStorage.getItem('data')) || {})
        setTokenLS(localStorage.getItem('token') || '')
    }, [auth])

    const logout = useCallback(() => {
        setAuth({})
        setToken('')
        localStorage.removeItem('data')
        localStorage.removeItem('token')
    }, [])
    

    return <AuthContext.Provider
        value={{ 
            auth,
            setAuth,
            token,
            setToken,
            logout,
            authLS,
            tokenLS
        }}>
            {children}
        </AuthContext.Provider> 
}

export {
    AuthProvider
}

export default AuthContext
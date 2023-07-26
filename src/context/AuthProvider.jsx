import { useState, useEffect, createContext, useCallback } from "react"

const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [auth, setAuth] = useState({})
    const [token, setToken] = useState('')
    const [tokenAdmin, setTokenAdmin] = useState('')
    const [authLS, setAuthLS] = useState({})
    const [tokenLS, setTokenLS] = useState('')
    const [tokenAdminLS, setTokenAdminLS] = useState('')
    const [alertConection, setAlertConection] = useState({})
    const [loading, setLoading] = useState(false)

    const urlAPI = import.meta.env.VITE_API_LOTO

    useEffect(() => {
        setAuthLS(JSON.parse(localStorage.getItem('data')) || {})
        setTokenLS(localStorage.getItem('token') || '')
        setTokenAdminLS(localStorage.getItem('tokenAdmin') || '')
    }, [auth])

    const loginAction = async (data) => {
        setLoading(true)
        try {
            const response = await fetch(`${urlAPI}/users/login`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const result = await response.json()
            setLoading(false)
            return result
        } catch (error) {
            setLoading(false)
            setAlertConection({
                msg: 'Lo sentimos, ocurrió un error',
                error: true
            })
            setTimeout(() => {
                setAlertConection({})
            }, 5000);
        }
    }
    

    const logout = useCallback(() => {
        setAuth({})
        setToken('')
        setTokenAdmin('')
        setAuthLS({})
        setTokenLS('')
        localStorage.removeItem('data')
        localStorage.removeItem('token')
        localStorage.removeItem('tokenAdmin')
    }, [])
    

    return <AuthContext.Provider
        value={{ 
            auth,
            setAuth,
            token,
            setToken,
            logout,
            authLS,
            tokenLS,
            loginAction,
            alertConection,
            setTokenAdmin,
            tokenAdmin,
            tokenAdminLS,
            loading
        }}>
            {children}
        </AuthContext.Provider> 
}

export {
    AuthProvider
}

export default AuthContext
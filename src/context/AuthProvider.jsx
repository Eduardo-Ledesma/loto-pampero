import { useState, useEffect, createContext, useCallback } from "react"

const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [auth, setAuth] = useState({})
    const [data, setData] = useState(JSON.parse(localStorage.getItem('data')) || {})

    useEffect(() => {
        const token = localStorage.getItem('token')
        // console.log(token);
    }, [])

    const logout = useCallback(() => {
        setAuth({})
        setData({})
        localStorage.removeItem('data')
    }, [])
    

    return <AuthContext.Provider
        value={{ 
            auth,
            setAuth,
            logout,
            data,
        }}>
            {children}
        </AuthContext.Provider> 
}

export {
    AuthProvider
}

export default AuthContext
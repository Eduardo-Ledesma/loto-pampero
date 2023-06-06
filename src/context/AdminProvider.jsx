import { useState, createContext } from "react"
import useAuth from "../hooks/useAuth"

const AdminContext = createContext()

const AdminProvider = ({children}) => {

    const [sellers, setSellers] = useState([])
    const [noSellers, setNoSellers] = useState(false)
    const [alert, setAlert] = useState({})

    const { tokenAdminLS } = useAuth()
    const urlAPI = import.meta.env.VITE_API_LOTO

    const showAlert = alert => {
        setAlert(alert)
        setTimeout(() => {
            setAlert({})
        }, 3000);
    }

    // Obtener los vendedores para el admin
    const getSellersAdmin = async () => {
        if(!tokenAdminLS) return
        
        try {
            if(!tokenAdminLS) return
            
            const response = await fetch(`${urlAPI}/users/manage/list/2`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${tokenAdminLS}`
                }
            })
            const result = await response.json()
            setNoSellers(false)
            setSellers(result.users);
        } catch (error) {
            console.log(error)
            setNoSellers(true)
        }
    }
    
    return <AdminContext.Provider
        value={{
            sellers,
            getSellersAdmin,
            noSellers,
            showAlert,
            alert
        }}
    >
        {children}
    </AdminContext.Provider>
}

export { 
    AdminProvider
}

export default AdminContext
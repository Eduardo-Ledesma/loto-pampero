import { useState, createContext } from "react"
import useAuth from "../hooks/useAuth"
import Swal from "sweetalert2"
import styles from '../css/HeaderNav.module.css'

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
            
            const response = await fetch(`${urlAPI}/admin/2`, {
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

    // Submit al formulario, depende si agrego nuevo o edito
    const submitClient = async seller => {
        await addSeller(seller)
        // if(seller.id) {
        //     editClient(seller)
        // } else {
        //     addClient(seller)
        // }
    }

    // Nuevos clientes
    const addSeller = async (seller) => {
        if(!tokenAdminLS) return
        console.log(seller)
        
        try {
            const response = await fetch(`${urlAPI}/admin/`, {
                method: 'POST',
                body: JSON.stringify(seller),
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${tokenAdminLS}`
                }
            })
            
            console.log(response);
            // setClients([...clients, result.client])
            if(response.ok) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Vendedor Agregado Correctamente!',
                    showConfirmButton: false,
                    timer: 2400,
                    customClass: {
                        popup: `${styles.sweetEdit}`
                    }
                })
            } else {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Ups, ocurrió un error... lo sentimos.',
                    showConfirmButton: false,
                    timer: 2400,
                    customClass: {
                        popup: `${styles.sweetEdit}`
                    }
                })
            }

        } catch (error) {
            console.log(error);
            
        }
    }
    
    return <AdminContext.Provider
        value={{
            sellers,
            getSellersAdmin,
            noSellers,
            showAlert,
            alert,
            submitClient
        }}
    >
        {children}
    </AdminContext.Provider>
}

export { 
    AdminProvider
}

export default AdminContext
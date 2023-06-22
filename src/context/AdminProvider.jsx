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

    const showError = () => {
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
    
    // Nuevos clientes
    const addSeller = async (seller) => {
        if(!tokenAdminLS) return
        
        try {
            const response = await fetch(`${urlAPI}/admin/`, {
                method: 'POST',
                body: JSON.stringify(seller),
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${tokenAdminLS}`
                }
            })
            
            // setSellers([...sellers, result.users])
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
                showError()
            }

        } catch (error) {
            console.log(error);
            showError()
        }
    }

    // Confirmar editar cliente
    const editSeller = async (seller) => {
        if(!tokenAdminLS) return

        try {
            const result = await fetch(`${urlAPI}/admin/${seller.id}`, {
                method: 'PUT',
                body: JSON.stringify(seller),
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${tokenAdminLS}`
                }
            })
            
            if(result.ok) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Cliente Editado Correctamente!',
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
                    title: 'El email ya se encuentra en uso',
                    showConfirmButton: false,
                    timer: 3500,
                    customClass: {
                        popup: `${styles.sweetEdit}`
                    }
                })
            }
            
        } catch (error) {
            console.error(error);
            showError()
        }
    }

    // Eliminar cliente
    const deleteSeller = async id => {
        if(!tokenAdminLS) return
        
        try {
            await fetch(`${urlAPI}/admin/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${tokenAdminLS}`
                }            
            })
            const updatedSellers = sellers.filter(seller => seller.id !== id)
            setSellers(updatedSellers)
        } catch (error) {
            console.log(error);
            showError()
        }
    }
    
    return <AdminContext.Provider
        value={{
            sellers,
            getSellersAdmin,
            noSellers,
            showAlert,
            alert,
            addSeller,
            editSeller,
            deleteSeller
        }}
    >
        {children}
    </AdminContext.Provider>
}

export { 
    AdminProvider
}

export default AdminContext
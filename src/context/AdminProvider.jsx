import { useState, createContext } from "react"
import useAuth from "../hooks/useAuth"
import Swal from "sweetalert2"
import styles from '../css/HeaderNav.module.css'

const AdminContext = createContext()

const AdminProvider = ({children}) => {

    const [sellers, setSellers] = useState([])
    const [noSellers, setNoSellers] = useState(false)
    const [alert, setAlert] = useState({})
    const [showLotteries, setLotteries] = useState([])
    const [lotteryById, setLotteryById] = useState({})
    const [winners, setWinners] = useState({})
    const [winnersW4, setWinnersW4] = useState([])
    const [winnersW3, setWinnersW3] = useState([])
    const [winnersW2, setWinnersW2] = useState([])
    const [sellerClients, setSellerClients] = useState([])
    const [error, setError] = useState(false) 

    const { tokenAdminLS } = useAuth()
    const urlAPI = import.meta.env.VITE_API_LOTO

    const showAlert = alert => {
        setAlert(alert)
        setTimeout(() => {
            setAlert({})
        }, 3500);
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
        setError(false)
        
        try {
            const response = await fetch(`${urlAPI}/admin/2`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${tokenAdminLS}`
                }
            })
            const result = await response.json()
            setError(false)
            setSellers(result.users);
        } catch (error) {
            setError(true)
        }
    }

    const getClientsSellers = async id => {
        setError(false)

        try {
            const response = await fetch(`${urlAPI}/clients/seller/${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${tokenAdminLS}`
                }
            })
            if(!response.ok) {
                console.log(response)
                return
            }
            const result = await response.json()
            setSellerClients(result.clients)
        } catch (error) {
            showError()
            setTimeout(() => {
                setError(true)
            }, 2500)
        }
    }
    
    // Nuevos clientes
    const addSeller = async (seller) => {
        if(!tokenAdminLS) return
        setError(false)

        try {
            const response = await fetch(`${urlAPI}/admin/`, {
                method: 'POST',
                body: JSON.stringify(seller),
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${tokenAdminLS}`
                }
            })
            
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
            showError()
            setTimeout(() => {
                setError(true)
            }, 2500);
        }
    }

    // Confirmar editar cliente
    const editSeller = async (seller) => {
        if(!tokenAdminLS) return
        setError(false)

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
            setError(false)
        } catch (error) {
            showError()
            setTimeout(() => {
                setError(true)
            }, 2500)
        }
    }

    // Eliminar cliente
    const deleteSeller = async id => {
        if(!tokenAdminLS) return
        setError(false)

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
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Vendedor eliminado!',
                showConfirmButton: false,
                timer: 2000
            })
        } catch (error) {
            showError()
            setTimeout(() => {
                setError(true)
            }, 2500);
        }
    }

    const getLotteries = async () => {
        if(!tokenAdminLS) return

        try {
            const response = await fetch(`${urlAPI}/lottery`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${tokenAdminLS}`
                }            
            })
            const result = await response.json()
            setLotteries(result.lottery)
        } catch (error) {
            console.log(error)
        }
    }

    const getLottery = async id => {
        if(!tokenAdminLS) return
        setError(false)

        try {
            const response = await fetch(`${urlAPI}/lottery/${id}`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${tokenAdminLS}`
                }            
            })
            const result = await response.json()
            if(response.ok) {
                setLotteryById(result.lottery)
                setWinners(result.winners)
                setWinnersW4(result.winners.with4)
                setWinnersW3(result.winners.with3)
                setWinnersW2(result.winners.with2)
            }
            
        } catch (error) {
            showError()
            setTimeout(() => {
                setError(true)
            }, 2500)
        }
    }

    const closeLottery = async lottery => {
        if(!tokenAdminLS) return

        try {
            const response = await fetch(`${urlAPI}/lottery`, {
                method: 'POST',
                body: JSON.stringify(lottery),
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${tokenAdminLS}`
                }            
            })
        
            await response.json()
            if(response.ok) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Sorteo finalizado correctamente!',
                    showConfirmButton: false,
                    timer: 2950,
                    customClass: {
                        popup: `${styles.sweetEdit}`
                    }
                })
                return 1
            } else {
                console.log(response);
                return 2
            }

        } catch (error) {
            showError()
            setTimeout(() => {
                setError(true)
            }, 2500)  
        }
    } 

    const deleteLottery = async id => {
        if(!tokenAdminLS) return

        try {
            const response = await fetch(`${urlAPI}/lottery/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${tokenAdminLS}`
                }            
            })
            if(response.ok) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Sorteo eliminado!',
                    showConfirmButton: false,
                    timer: 2000
                })
                return 1
            } else {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Ocurrió un error',
                    showConfirmButton: false,
                    timer: 2000
                })
                return 2
            }
        } catch (error) {
            showError()
            setTimeout(() => {
                setError(true)
            }, 2500)
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
            deleteSeller,
            closeLottery,
            getLotteries,
            showLotteries,
            getLottery,
            lotteryById,
            winners,
            winnersW4,
            winnersW3,
            winnersW2,
            deleteLottery,
            getClientsSellers,
            sellerClients,
            error
        }}
    >
        {children}
    </AdminContext.Provider>
}

export { 
    AdminProvider
}

export default AdminContext
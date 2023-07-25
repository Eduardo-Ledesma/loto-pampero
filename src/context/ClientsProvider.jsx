import { useState, createContext } from "react"
import useAuth from "../hooks/useAuth"
import Swal from "sweetalert2"
import styles from '../css/HeaderNav.module.css'

const ClientsContext = createContext()

const ClientsProvider = ({children}) => {

    const [clients, setClients] = useState([])
    const [client, setClient] = useState({})
    const [alert, setAlert] = useState({})
    const [loading, setLoading] = useState(false)
    const [noClients, setNoClients] = useState(false)
    const [lottery, setLottery] = useState([])

    const { tokenLS, logout, tokenAdminLS } = useAuth()
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

    // Obtener los clientes del vendedor
    const getClients = async () => {
        try {
            if(!tokenLS) return
            // let token;
            // tokenLS.length ? token = tokenLS : token = false 
            // tokenAdminLS.length ? token = tokenAdminLS : token = false 
            

            const response = await fetch(`${urlAPI}/clients`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${tokenLS}`
                }
            })
            const result = await response.json()
            if(result.message === 'TokenExpiredError') {
                logout()
                return
            }
            setNoClients(false)
            setClients(result.clients);
        } catch (error) {
            console.log(error)
            setNoClients(true)
        }
    }

    // Submit al formulario, depende si agrego nuevo o edito
    const submitClient = async client => {
        if(client.id) {
            editClient(client)
        } else {
            const result = addClient(client)
            return result
        }
    }

    // Nuevos clientes
    const addClient = async (client) => {
        

        try {
            const response = await fetch(`${urlAPI}/clients`, {
                method: 'POST',
                body: JSON.stringify(client),
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${tokenLS}`
                }
            })
            const result = await response.json()
            
            if(result.message) {
                return 1
            } else if(result.client.name) {
                setClients([...clients, result.client])
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Cliente Agregado Correctamente!',
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
            console.log(error)
            showError()
        }
    }

    // Obtener un cliente en específico para editarlo
    const getClient = async (id) => {
        if(!tokenLS) return

        setLoading(true)
        try {
            const response = await fetch(`${urlAPI}/clients/${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${tokenLS}`
                }
            })
            const client = await response.json()
            setClient(client.client)
            setLoading(false)
        } catch (error) {
            console.log(error);
        } 
    }

    // Confirmar editar cliente
    const editClient = async (client) => {
        if(!tokenLS) return

        try {
            const result = await fetch(`${urlAPI}/clients/${client.id}`, {
                method: 'PUT',
                body: JSON.stringify(client),
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${tokenLS}`
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
                showError()
            }
            
        } catch (error) {
            console.error(error)
            showError()
        }
    }

    // Eliminar cliente
    const deleteClient = async id => {
        if(!tokenLS) return
        
        try {
            await fetch(`${urlAPI}/clients/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${tokenLS}`
                }            
            })
            const updatedClients = clients.filter(client => client.id !== id)
            setClients(updatedClients)
            showLottery()
        } catch (error) {
            console.log(error)
            showError()
        }
    }
    
    const showLottery = async () => {
        try {
            if(!tokenLS) return
            
            const response = await fetch(`${urlAPI}/plays`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${tokenLS}`
                }
            })
            if(response.ok) {
                const result = await response.json()
                setLottery(result.plays)
            }
            
        } catch (error) {
            console.log(error)
        }
    }

    // Agregar lotos nuevos
    const newLottery = async data =>  {
        if(!tokenLS) return

        try {
            const response = await fetch(`${urlAPI}/plays`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${tokenLS}`
                }
            })

            if(!response.ok) {
                return 1
            } else {
                return 2
            }
        } catch (error) {
            console.log(error);
        }
    }

    const deleteLottery = async id => {
        try {
            if(!tokenLS) return

            await fetch(`${urlAPI}/plays/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${tokenLS}`
                }
            })
            const updatedLottery = lottery.filter( lot => lot.id !== id)
            setLottery(updatedLottery)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <ClientsContext.Provider
            value={{
                clients,
                setClients,
                getClients,
                getClient,
                submitClient,
                client,
                setClient, 
                showAlert,
                alert,
                loading,
                deleteClient,
                noClients,
                showLottery,
                lottery,
                newLottery,
                deleteLottery
            }}
        >
            {children}
        </ClientsContext.Provider>
    )
}

export {
    ClientsProvider
}

export default ClientsContext

import { useState, useEffect, createContext } from "react"
import useAuth from "../hooks/useAuth"

const ClientsContext = createContext()

const ClientsProvider = ({children}) => {

    const [clients, setClients] = useState([])
    const [client, setClient] = useState({})
    const [alert, setAlert] = useState({})
    const [loading, setLoading] = useState(false)

    const { tokenLS } = useAuth()
    const urlAPI = import.meta.env.VITE_API_LOTO

    const showAlert = alert => {
        setAlert(alert)
        setTimeout(() => {
            setAlert({})
        }, 3500);
    }

    // Obtener los clientes del vendedor
    const getClients = async () => {
        try {
            if(!tokenLS) return
            
            const response = await fetch(`${urlAPI}/clients`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${tokenLS}`
                }
            })
            const result = await response.json()
            setClients(result.clients);
        } catch (error) {
            console.log(error)
        }
    }
    // useEffect(() => {
    //     const getClients = async () => {
    //         try {
    //             if(!tokenLS) return
                
    //             const response = await fetch(`${urlAPI}/clients`, {
    //                 headers: {
    //                     "Content-Type": "application/json",
    //                     Authorization: `Bearer ${tokenLS}`
    //                 }
    //             })
    //             const result = await response.json()
    //             setClients(result.clients);
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }
    //     getClients()
    // }, [tokenLS, clients])

    // Agregar clientes nuevos
    const submitClient = async client => {
        if(client.id) {
            editClient(client)
        } else {
            addClient(client)
        }
    }

    const addClient = async (client) => {
        if(!tokenLS) return

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
            setClients([...clients, result.client])
            
            setAlert({
                msg: 'Cliente Agregado Correctamente!',
                error: false
            })
            setTimeout(() => {
                setAlert({})
            }, 2500);
        } catch (error) {
            console.log(error);
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
            await fetch(`${urlAPI}/clients/${client.id}`, {
                method: 'PUT',
                body: JSON.stringify(client),
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${tokenLS}`
                }
            })

            setAlert({
                msg: 'Cliente Editado Correctamente!',
                error: false
            })
            setTimeout(() => {
                setAlert({})
            }, 2500);
        } catch (error) {
            console.error(error);
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
            const proyectosActualizados = clients.filter(client => client.id !== id)
            setClients(proyectosActualizados)
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
                deleteClient
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

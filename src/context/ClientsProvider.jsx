import { useState, useEffect, createContext } from "react"
import useAuth from "../hooks/useAuth"

const ClientsContext = createContext()

const ClientsProvider = ({children}) => {

    const [clients, setClients] = useState([])
    const [client, setClient] = useState({})
    const [alert, setAlert] = useState([])

    const { tokenLS } = useAuth()
    const urlAPI = import.meta.env.VITE_API_LOTO

    const showAlert = alert => {
        setAlert(alert)
        setTimeout(() => {
            setAlert([])
        }, 3500);
    }

    // Obtener los clientes del vendedor
    useEffect(() => {
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
        getClients()
    }, [tokenLS])

    // Agregar clientes nuevos
    const addClient = async client => {
        if(!tokenLS) return
        console.log(client);
        try {
            const response = await fetch(`${urlAPI}/clients`, {
                method: 'POST',
                body: JSON.stringify(client),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${tokenLS}`
                }
            })
            const result = await response.json()
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }

    // Obtener un cliente en específico para editarlo
    const getClient = async (id) => {
        if(!tokenLS) return
        const response = await fetch(`${urlAPI}/clients/${id}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${tokenLS}`
            }
        })
        const client = await response.json()
        setClient(client.client)
    }

    // Confirmar editar cliente
    const editClient = async (id, data) => {
        if(!tokenLS) return
        try {
            const response = await fetch(`${urlAPI}/clients/${id}`, {
                method: 'PUT',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${tokenLS}`
                }
            })
            await response.json()
        } catch (error) {
            console.log(error);
        }
    }
    

    return (
        <ClientsContext.Provider
            value={{
                clients,
                setClients,
                getClient,
                addClient,
                client,
                showAlert,
                alert
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

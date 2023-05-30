import { useState, useEffect, createContext } from "react"

const ClientsContext = createContext()

const ClientsProvider = ({children}) => {


    return (
        <ClientsContext.Provider
            value={{}}
        >
            {children}
        </ClientsContext.Provider>
    )
}

export {
    ClientsProvider
}

export default ClientsContext

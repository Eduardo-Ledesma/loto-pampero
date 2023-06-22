import { useEffect } from "react"
import Clients from "../components/Clients"
import Lottery from "../components/Lottery"
import useClients from "../hooks/useClients"


const Userlogged = () => {

    const { clients, setClient, getClients, noClients, showLottery, lottery } = useClients()

    useEffect(() => {
        setClient({})
        getClients()
        showLottery()
    }, [])


    return (
        <>
            <h2 className="mt-10 md:mt-0 mb-20 text-6xl font-black underline text-center lg:text-left">Clientes</h2>
            {clients.length ? (
                <table className="w-full mt-10 table-auto bg-indigo-800 rounded-lg bg-opacity-70">
                    <thead className="bg-indigo-600 bg-opacity-50">
                        <tr>
                            <th className="p-2 font-bold">Cliente</th>
                            <th className="p-2 font-bold">Números</th>
                            <th className="p-2 font-bold">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clients.map( client => (
                            <Clients
                                client={client}
                                key={client.id}
                            />
                        ))}
                    </tbody>
                </table>
            ) : noClients ? ( <p className="text-center text-5xl mt-10">Lo sentimos, ocurrió un error inesperado...</p> 
            ) : (
                <p className="text-center mt-10">Aún no tienes clientes registrados</p>
            )}

            <h2 className="mt-14 md:mt-20 mb-20 text-6xl font-black underline text-center lg:text-left">Lotos de la Semana</h2>
            {lottery.length ? (
                <table className="w-full my-10 table-auto bg-indigo-800 rounded-lg bg-opacity-70">
                <thead className="bg-indigo-600 bg-opacity-50">
                    <tr>
                        <th className="p-2 font-bold">Cliente</th>
                        <th className="p-2 font-bold">Números</th>
                        <th className="p-2 font-bold">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {lottery.map( lot => (
                        <Lottery
                            lottery={lot}
                            key={lot.id}
                        />
                    ))}
                </tbody>
            </table>
            ) : (
                <p className="text-center mt-10">Aún no tienes lotos creados</p>
            )}
        </>
    )
}

export default Userlogged
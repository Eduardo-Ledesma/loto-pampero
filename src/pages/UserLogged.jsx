import { useLoaderData } from "react-router-dom"
import { showClients } from "../api/clients"
import Clients from "../components/Clients"

export async function loader() {
    const clients = await showClients()
    return clients
}

const Userlogged = () => {

    const clients = useLoaderData()
    
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
            ) : (
                <p className="text-center mt-10">Aún no tienes clientes registrados</p>
            )}
        </>
    )
}

export default Userlogged
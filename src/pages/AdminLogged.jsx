import { useEffect } from "react";
import Sellers from "../components/Sellers";
import useAdmin from "../hooks/useAdmin"

const AdminLogged = () => {

    const { sellers, getSellersAdmin, noSellers } = useAdmin()

    useEffect(() => {
        getSellersAdmin()
    }, [])
    
    return (
        <>
            <h2 className="mt-10 md:mt-0 mb-20 text-6xl font-black underline text-center lg:text-left">Vendedores</h2>
            { sellers?.length ? (
                <table className="w-full mt-10 table-auto bg-indigo-800 rounded-lg bg-opacity-70">
                    <thead className="bg-indigo-600 bg-opacity-50">
                        <tr>
                            <th className="p-2 font-bold">Vendedor</th>
                            <th className="p-2 font-bold">Email</th>
                            <th className="p-2 font-bold">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sellers.map( seller => (
                            <Sellers
                                seller={seller}
                                key={seller.id}
                            />
                        ))}
                    </tbody>
                </table>
            ) : noSellers ? ( <p className="text-center text-5xl mt-10">Lo sentimos, ocurrió un error inesperado...</p> 
            ) : (
                <p className="text-center mt-10">Aún no tienes vendedores registrados</p>
            )}
        </>
        
    )
}

export default AdminLogged
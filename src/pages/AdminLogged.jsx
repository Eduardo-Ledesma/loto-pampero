import { useEffect } from "react";
import Sellers from "../components/Sellers";
import LotteriesAdmin from "../components/LotteriesAdmin"
import useAdmin from "../hooks/useAdmin"

const AdminLogged = () => {

    const { sellers, getSellersAdmin, getLotteries, showLotteries } = useAdmin()

    useEffect(() => {
        getSellersAdmin()
        getLotteries()
    }, [])
    
    return (
        <>
            <h2 className="mt-10 md:mt-0 mb-20 text-6xl font-black text-gray-300 underline 
                text-center lg:text-left">Vendedores</h2>
            { sellers?.length ? (
                <table className="w-full mt-10 table-auto bg-indigo-800 border-2 border-indigo-600 bg-opacity-70">
                    <thead className="bg-indigo-600 bg-opacity-50">
                        <tr>
                            <th className="p-2 text-2xl sm:text-4xl font-bold">Vendedor</th>
                            <th className="p-2 text-2xl sm:text-4xl font-bold">Email</th>
                            <th className="p-2 text-2xl sm:text-4xl font-bold">Acciones</th>
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
            ) : <p className="text-center mt-10 font-bold text-gray-200">Aún no tienes vendedores registrados</p>}

            { showLotteries?.length ? (
                <section className="mt-20">
                    <h2 className="mb-20 text-6xl font-black text-gray-300 underline 
                        text-center lg:text-left">Sorteos Finalizados</h2>

                    <div className="rounded-md border-2 border-blue-600">
                        {showLotteries.map( lot => (
                            <LotteriesAdmin
                                lot={lot}
                                key={lot.id}
                            />
                        ))}      
                    </div>                
                </section>
            ) : (
                <p className="text-center mt-32 font-bold text-gray-200">Aún no hay ningún sorteo finalizado.</p>
            )}
        </>
        
    )
}

export default AdminLogged
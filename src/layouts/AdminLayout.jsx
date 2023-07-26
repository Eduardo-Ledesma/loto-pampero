import HeaderLogged from "../components/HeaderLogged"
import AsideAdmin from "../components/AsideAdmin"
import { Outlet } from "react-router-dom"
import useAdmin from "../hooks/useAdmin"

// Vista del Admin una vez iniciada la sesión
const AdminLayout = () => {
    
    const { error } = useAdmin()

    return (
    <>
        <div className="bg-stone-900 bg-opacity-50 min-h-screen">
            <HeaderLogged />

            { error ? (
                <>
                <div className="px-2">
                    <h2 className="text-center text-5xl sm:text-6xl mt-10 mb-20">Lo sentimos, ocurrió un error inesperado...</h2>
                    <p className="text-center text-3xl sm:text-4xl">Por favor intente nuevamente en unos minutos.</p>
                </div>
                <img src="/soldar.gif" alt="Error inesperado" className="w-80 md:w-2/5 xl:max-w-xl mx-auto mt-10 rounded-md pb-10" />
                </>
                
            ) : (
                <div className="md:flex md:min-h-screen">
                    <AsideAdmin className="px-12" /> 
                    
                    <main className="sm:px-6 md:px-4 lg:px-10 pt-20 md:pt-0 flex-1 md:border-l border-white">
                        <Outlet />
                    </main>
                </div>
            )}

        </div>
    </>
    )
}

export default AdminLayout
import HeaderLogged from "../components/HeaderLogged"
import Aside from "../components/Aside"
import AsideAdmin from "../components/AsideAdmin"
import { Outlet, useLocation } from "react-router-dom"

// Vista del vendedor una vez iniciada la sesión
const ProtectedLayout = () => {

    const location = useLocation()
    
    return (
    <>
        <div className="bg-stone-900 bg-opacity-50 min-h-screen">
            <HeaderLogged />

            <div className="md:flex md:min-h-screen">
                { location.pathname === '/adminlogged' ? <AsideAdmin className="px-12" /> : <Aside className="px-12" />}
                
                <main className="px-10 pt-20 md:pt-0 flex-1 md:border-l border-white">
                    <Outlet />
                </main>
            </div>
        </div>
            
            
    </>
    )
}

export default ProtectedLayout
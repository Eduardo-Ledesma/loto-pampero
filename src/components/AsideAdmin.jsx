import { Link, Navigate } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import Swal from 'sweetalert2'

const AsideAdmin = () => {

    const { authLS, tokenAdmin, tokenAdminLS, logout } = useAuth()

    const handleClick = () => {
        Swal.fire({
            title: 'Deseas cerrar sesión?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar',
        }).then( async (result) => {
            if (result.isConfirmed) {
                logout()
            }
        })
    }

    return (
        <>
            { tokenAdmin.length || tokenAdminLS.length ? authLS.role === 1 ? (
                <aside className="mx-8 text-center md:text-left border-b-2 md:border-none pb-20 md:p-0 md:w-1/3 lg:w-1/5">
                    <h2 className="text-4xl pt-1 font-bold">Bienvenido/a {authLS.name}!</h2>
    
                    <nav>
                        <Link to="newseller"
                            className="bg-sky-600 py-4 rounded-lg text-3xl block max-w-md mx-auto md:max-w-full
                            text-center uppercase font-bold mt-20 hover:bg-sky-700 transition-colors"
                        >
                            Crear Vendedor
                        </Link>

                        <Link to="newlotteryadmin"
                            className="bg-sky-600 py-4 rounded-lg text-3xl block max-w-md mx-auto md:max-w-full 
                            text-center uppercase font-bold mt-12 hover:bg-sky-700 transition-colors"
                        >
                            Cargar Loto
                        </Link>
        
                        <Link to="closelottery"
                            className="bg-sky-600 py-4 rounded-lg text-3xl block max-w-md mx-auto md:max-w-full 
                            text-center uppercase font-bold mt-12 hover:bg-sky-700 transition-colors"
                        >
                            Finalizar Sorteo
                        </Link>
                    </nav>
        
                    <Link className="block mt-20 text-3xl underline hover:text-blue-400 transition-colors" 
                        to="/password/change"
                    >
                        Cambiar Contraseña
                    </Link>

                    <button
                        type="button"
                        className="bg-red-700 p-3 rounded-lg text-3xl font-bold mt-12 hover:bg-red-900 transition-colors flex items-center gap-2"
                        onClick={handleClick}
                    >
                        Cerrar Sesión
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                        </svg>
                    </button>
                </aside>
            ) : (
                <Navigate to="/userlogged" replace={true} />
            ) : (
                <Navigate to="/" replace={true} />
            )}
        
        </>
    )
}

export default AsideAdmin
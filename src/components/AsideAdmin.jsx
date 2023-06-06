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
                <aside className="mx-8 text-center md:text-left">
                    <h2 className="text-4xl pt-1 font-bold">Bienvenido/a {authLS.name}!</h2>
    
                    <nav>
                        <Link to="newseller"
                            className="bg-sky-600 py-4 rounded-lg text-3xl block max-w-md mx-auto md:max-w-full
                            text-center uppercase font-bold mt-20 hover:bg-sky-700 transition-colors"
                        >
                            Crear Vendedor
                        </Link>
        
                        <Link to="newlottery"
                            className="bg-sky-600 py-4 rounded-lg text-3xl block max-w-md mx-auto md:max-w-full 
                            text-center uppercase font-bold mt-12 hover:bg-sky-700 transition-colors"
                        >
                            Finalizar Sorteo
                        </Link>
                    </nav>
        
                    <Link className="block mt-20 text-3xl underline hover:text-blue-400 transition-colors" to="/">Cambiar Contraseña</Link>
                    <button
                        type="button"
                        className="bg-red-700 p-3 rounded-md text-2xl uppercase font-bold mt-12 hover:bg-red-900 transition-colors"
                        onClick={handleClick}
                    >
                        Cerrar Sesión
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
import { Link, Navigate } from "react-router-dom"
import useAuth from "../hooks/useAuth"

const Aside = () => {

    const { token, logout, authLS, tokenLS } = useAuth()

    const handleClick = () => {
        if(confirm('¿Deseas cerrar la sesión?')) {
            logout()
        }
    }

    return (
        <>
            { token.length || tokenLS.length ? (
                <aside className="mx-8 text-center md:text-left">
                    <h2 className="text-4xl pt-1 font-bold">Bienvenido/a {authLS.name}!</h2>

                    <nav>
                        <Link to="newclient"
                            className="bg-sky-600 py-4 rounded-lg text-3xl block max-w-md mx-auto md:max-w-full
                            text-center uppercase font-bold mt-20 hover:bg-sky-700 transition-colors"
                        >
                            Cargar Cliente
                        </Link>

                        <Link to="newlottery"
                            className="bg-sky-600 py-4 rounded-lg text-3xl block max-w-md mx-auto md:max-w-full 
                            text-center uppercase font-bold mt-12 hover:bg-sky-700 transition-colors"
                        >
                            Cargar Loto
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
                <Navigate to="/" replace={true} />
            )}        
        </>
    )
}

export default Aside
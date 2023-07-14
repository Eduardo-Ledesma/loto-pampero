import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import useAdmin from "../hooks/useAdmin"
import Swal from "sweetalert2"

const Sellers = ({seller}) => {

    const navigate = useNavigate()
    const { name, email, id } = seller
    const { deleteSeller } = useAdmin()

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
        setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        // Limpieza del evento al desmontar el componente
        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleClick = () => {

        Swal.fire({
            title: 'Deseas Eliminar el Vendedor?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Eliminar',
            confirmButtonAriaLabel: 'Confirmar',
            cancelButtonText: 'Cancelar',
            cancelButtonAriaLabel: 'Cancelar',
        }).then(async (result) => {
            if (result.isConfirmed) {
                await deleteSeller(id)
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Vendedor eliminado!',
                    showConfirmButton: false,
                    timer: 2000
                })
            }
        })
    }

    return (
        <>
            <tr className="border-b last-of-type:border-0">
                <td className="text-2xl sm:text-4xl p-6 font-bold">
                    {name}
                </td>
                <td className="text-2xl sm:text-4xl p-6 font-bold text-center">
                    {email}
                </td>
                <td className="p-6 flex flex-col items-start lg:flex-row lg:gap-x-8 lg:justify-center">
                    <button
                        type="button"
                        className="bg-green-600 hover:bg-green-700 transition-colors px-4
                            py-2 rounded-lg uppercase font-bold text-2xl sm:text-3xl mb-4 w-auto lg:mb-0"
                        onClick={() => navigate(`editseller/${id}`)}
                    >
                        {windowWidth < 500 ? (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8">
                                <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
                                <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
                            </svg>
                        ) : (
                            'Editar'
                        )}
                    </button>

                    <button
                        className="bg-red-600 hover:bg-red-700 transition-colors px-4 
                            py-2 rounded-lg uppercase font-bold text-2xl sm:text-3xl w-auto"
                        onClick={handleClick}
                    >
                        {windowWidth < 500 ? (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-7 h-7">
                                <path fillRule="evenodd" d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z" clipRule="evenodd" />
                            </svg>
                        ) : (
                            'Eliminar'
                        )}
                    </button>
                    
                </td>
            </tr>
        </>
    )
}

export default Sellers

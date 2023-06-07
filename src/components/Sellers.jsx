import { useNavigate } from "react-router-dom"
import useAdmin from "../hooks/useAdmin"
import Swal from "sweetalert2"

const Sellers = ({seller}) => {

    const navigate = useNavigate()
    const { name, email, id } = seller
    const { deleteSeller } = useAdmin()

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
                <td className="p-6 lg:flex lg:gap-x-8 lg:justify-center">
                    <button
                        type="button"
                        className="bg-green-600 hover:bg-green-700 transition-colors px-4 
                            py-2 rounded-lg uppercase font-bold text-2xl sm:text-3xl mb-4 lg:mb-0"
                        onClick={() => navigate(`editseller/${id}`)}
                    >
                        Editar
                    </button>

                    <button
                        className="bg-red-600 hover:bg-red-700 transition-colors px-4 
                            py-2 rounded-lg uppercase font-bold text-2xl sm:text-3xl"
                        onClick={handleClick}
                    >
                        Eliminar
                    </button>
                    
                </td>
            </tr>
        </>
    )
}

export default Sellers

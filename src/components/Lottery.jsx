import useClients from "../hooks/useClients"
import Swal from "sweetalert2"

const Lottery = ({lottery}) => {

    const { name, n1, n2, n3, n4, id } = lottery
    const { deleteLottery } = useClients()

    const handleClick = () => {

        Swal.fire({
            title: 'Deseas Eliminar el Loto?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Eliminar',
            confirmButtonAriaLabel: 'Confirmar',
            cancelButtonText: 'Cancelar',
            cancelButtonAriaLabel: 'Cancelar',
        }).then( async (result) => {
            if (result.isConfirmed) {
                await deleteLottery(id)
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Loto eliminado!',
                    showConfirmButton: false,
                    timer: 2000
                })
            }
        })
    }

    return (
        <>
            <tr className="border-b last-of-type:border-0">
                <td className="p-6 font-bold">
                    {name}
                </td>
                <td className="p-6 font-bold text-center">
                    {n1} - {n2} - {n3} - {n4}
                </td>
                <td className="p-6 lg:flex lg:gap-x-8 lg:justify-center">

                    <button
                        type="submit"
                        className="bg-red-600 hover:bg-red-700 transition-colors px-4 py-2 rounded-lg uppercase 
                        font-bold text-2xl sm:text-3xl flex items-center gap-1"
                        onClick={() => handleClick(id)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-7 h-7">
                            <path fillRule="evenodd" d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z" clipRule="evenodd" />
                        </svg>
                        Eliminar
                    </button>
                </td>
            </tr>
        </>
    )
}

export default Lottery
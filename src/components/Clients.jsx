

const Clients = ({client}) => {

    const { fullName, number1, number2, number3, number4 } = client

    return (
        <>
            <tr className="border-b last-of-type:border-0">
                <td className="p-6 font-bold">
                    {fullName}
                </td>
                <td className="p-6 font-bold text-center">
                    {number1} - {number2} - {number3} - {number4}
                </td>
                <td className="p-6 lg:flex lg:gap-x-8 lg:justify-center">
                    <button
                        type="button"
                        className="bg-green-600 hover:bg-green-700 transition-colors px-4 py-2 rounded-lg uppercase font-bold text-3xl mb-4 lg:mb-0"
                    >
                        Editar
                    </button>
                    <button
                        type="button"
                        className="bg-red-600 hover:bg-red-700 transition-colors px-4 py-2 rounded-lg uppercase font-bold text-3xl"
                    >
                        Eliminar
                    </button>
                </td>
            </tr>
        </>
    )
}

export default Clients
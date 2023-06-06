

const Sellers = ({seller}) => {

    const { name, email } = seller

    return (
        <>
            <tr className="border-b last-of-type:border-0">
                <td className="p-6 font-bold">
                    {name}
                </td>
                <td className="p-6 font-bold text-center">
                    {email}
                </td>
                <td className="p-6 lg:flex lg:gap-x-8 lg:justify-center">
                    <button
                        type="button"
                        className="bg-green-600 hover:bg-green-700 transition-colors px-4 
                            py-2 rounded-lg uppercase font-bold text-3xl mb-4 lg:mb-0"
                        // onClick={() => navigate(`editClient/${id}`)}
                    >
                        Editar
                    </button>

                    <button
                        className="bg-red-600 hover:bg-red-700 transition-colors px-4 
                            py-2 rounded-lg uppercase font-bold text-3xl"
                        // onClick={handleClick}
                    >
                        Eliminar
                    </button>
                    
                </td>
            </tr>
        </>
    )
}

export default Sellers

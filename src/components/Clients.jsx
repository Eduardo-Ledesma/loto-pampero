import { useNavigate, Form, redirect } from "react-router-dom"
import { deleteClient } from "../api/clients"

export async function action({params}) {
    await deleteClient(params.clientId)

    return redirect('/userlogged')
}

const Clients = ({client}) => {

    const navigate = useNavigate()
    const { name, n1, n2, n3, n4, id } = client

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
                        type="button"
                        className="bg-green-600 hover:bg-green-700 transition-colors px-4 py-2 rounded-lg uppercase font-bold text-3xl mb-4 lg:mb-0"
                        onClick={() => navigate(`editClient/${id}`)}
                    >
                        Editar
                    </button>
                    <Form
                        method="POST"
                        action={`deleteClient/${id}`}
                        onSubmit={(e) => {
                            if(!confirm('Deseas eliminar el cliente?')) {
                                e.preventDefault()
                            } 
                        }}
                    >
                        <button
                            type="submit"
                            className="bg-red-600 hover:bg-red-700 transition-colors px-4 py-2 rounded-lg uppercase font-bold text-3xl"
                        >
                            Eliminar
                        </button>
                    </Form>
                </td>
            </tr>
        </>
    )
}

export default Clients
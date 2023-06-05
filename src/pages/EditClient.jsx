import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import FormNewClient from "../components/FormNewClient"
import useClients from "../hooks/useClients"

// export async function action({request, params}) {
//     const formData = await request.formData()
//     const data = Object.fromEntries(formData)

//     // Validate
//     const fullName = formData.get('fullName')
//     const error = []
//     if(Object.values(data).includes('') || !fullName.trim()) {
//         error.push('Todos los campos son obligatorios');
//         return error
//     }
//     await editClient(params.clientId, data)

//     return redirect('/userlogged')
// }

const EditClient = () => {

    const navigate = useNavigate()
    const params = useParams()
    const { getClient, loading } = useClients()

    useEffect(() => {
        getClient(params.clientId)
    }, [])

    return (
        <>
            <h2 className="mt-10 md:mt-0 mb-20 text-6xl font-black underline text-center lg:text-left">Editar cliente</h2>

            <div className="flex justify-center md:justify-end">
                <button
                    type="button"
                    className="bg-blue-800 font-bold px-4 py-1 mb-20 rounded-lg uppercase transition-colors hover:bg-blue-700"
                    onClick={() => navigate('/userlogged')}
                >
                    Volver
                </button>
            </div>

            {loading ? (
                <p>Cargando los Datos</p>
            ) : (
                <div className="bg-indigo-700 rounded-lg lg:w-full 2xl:w-2/4 mx-auto px-5 py-10 bg-opacity-70 mb-20">
                    <FormNewClient />
                </div>
            )}
            
        </>
    )
}

export default EditClient
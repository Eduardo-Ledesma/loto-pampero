import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import FormNewClient from "../components/FormNewClient"
import useClients from "../hooks/useClients"
import { ClipLoader } from "react-spinners"

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
                <div className="flex gap-4 justify-center items-center pb-6">
                    <p>Cargando...</p>
                    <ClipLoader color="rgba(10, 148, 120, 1)" />
                </div>
            ) : (
                <FormNewClient />
            )}
            
        </>
    )
}

export default EditClient
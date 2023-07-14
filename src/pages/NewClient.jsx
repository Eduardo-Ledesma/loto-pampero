import { useNavigate } from "react-router-dom"
import FormNewClient from "../components/FormNewClient"
import useClients from "../hooks/useClients"

const NewClient = () => {

    const navigate = useNavigate()
    const { noClients } = useClients()

    return (
    <>
        { noClients ? (
            <p className="text-center font-bold text-6xl mt-10">Lo sentimos, ocurrió un error inesperado...</p>
        ) : (
            <div>
                <h2 className="mt-10 md:mt-0 mb-20 text-6xl font-black underline text-center lg:text-left">Nuevo cliente</h2>

                <div className="flex justify-center md:justify-end">
                    <button
                        type="button"
                        className="bg-blue-800 font-bold px-4 py-1 mb-20 rounded-lg uppercase transition-colors hover:bg-blue-700"
                        onClick={() => navigate('/userlogged')}
                    >
                        Volver
                    </button>
                </div>

                <FormNewClient />            
            </div>
            )
        }
        
    </>
    )
}

export default NewClient
import { useNavigate } from "react-router-dom"
import FormNewSeller from "../components/FormNewSeller";
import useAdmin from "../hooks/useAdmin";

const NewSeller = () => {

    const navigate = useNavigate()
    const { noSellers } = useAdmin()

    return (
        <>
        { noSellers ? (
            <p className="text-center font-bold text-6xl mt-10">Lo sentimos, ocurrió un error inesperado...</p>
        ) : ( 
            <div>
                <h2 className="mt-10 md:mt-0 mb-20 text-6xl font-black underline text-center lg:text-left">Nuevo Vendedor</h2>

                <div className="flex justify-center md:justify-end">
                    <button
                        type="button"
                        className="bg-blue-800 font-bold px-4 py-1 mb-20 rounded-lg uppercase 
                            transition-colors hover:bg-blue-700"
                        onClick={() => navigate('/adminlogged')}
                    >
                        Volver
                    </button>
                </div>

                <FormNewSeller />         
            </div>
            )
        }
        
        </>
    )
}

export default NewSeller
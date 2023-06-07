import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import FormEditSeller from '../components/FormEditSeller'
import useAdmin from "../hooks/useAdmin"

const EditSeller = () => {

    // const params = useParams()
    const navigate = useNavigate()
    // const { getSeller, loading } = useAdmin()

    // useEffect(() => {
    //     getSeller(params.sellerId)
    // }, [])

    return (
        <>
            <h2 className="mt-10 md:mt-0 mb-20 text-6xl font-black underline text-center lg:text-left">Editar Vendedor</h2>

            <div className="flex justify-center md:justify-end">
                <button
                    type="button"
                    className="bg-blue-800 font-bold px-4 py-1 mb-20 rounded-lg uppercase transition-colors hover:bg-blue-700"
                    onClick={() => navigate('/adminlogged')}
                >
                    Volver
                </button>
            </div>

            <div className="bg-indigo-700 rounded-lg lg:w-full 2xl:w-2/4 mx-auto px-5 py-10 bg-opacity-70 mb-20">
                <FormEditSeller />
            </div>

        </>
    )
}

export default EditSeller
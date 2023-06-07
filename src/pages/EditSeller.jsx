import { useNavigate } from "react-router-dom"

const EditSeller = () => {

    const navigate = useNavigate()

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
        </>
    )
}

export default EditSeller
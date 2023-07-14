import { useNavigate } from "react-router-dom"
import FormNewLottery from "../components/FormNewLottery"

const NewLottery = () => {
    const navigate = useNavigate()

    return (
        <>
        <h2 className="mt-10 md:mt-0 mb-20 text-6xl font-black underline text-center lg:text-left">Nuevo loto</h2>

        <div className="flex justify-center md:justify-end">
            <button
                type="button"
                className="bg-blue-800 font-bold px-4 py-1 mb-20 rounded-lg uppercase transition-colors hover:bg-blue-700"
                onClick={() => navigate('/userlogged')}
            >
                Volver
            </button>
        </div>

        <div className="bg-indigo-700 rounded-lg lg:w-full 2xl:w-3/4 mx-auto p-10 bg-opacity-70 mb-20">
            <FormNewLottery />
        </div>
    </>
    )
}

export default NewLottery
import { useState } from "react"; 
import { useNavigate } from "react-router-dom"
import FormNewLottery from "../components/FormNewLottery"
import 'animate.css';

const NewLottery = () => {

    const [formNoRegistered, setFormNoRegistered] = useState(false)
    const navigate = useNavigate()

    const handleClickHere = () => {
        setFormNoRegistered(!formNoRegistered)
    }

    return (
        <>
        <h2 className="mt-10 md:mt-0 mb-20 text-6xl font-black underline text-center lg:text-left text-gray-300">Nuevo loto</h2>

        <div className="flex justify-center md:justify-end">
            <button
                type="button"
                className="bg-blue-800 font-bold px-4 py-1 mb-20 rounded-lg uppercase transition-colors hover:bg-blue-700"
                onClick={() => navigate('/userlogged')}
            >
                Volver
            </button>
        </div>

        { !formNoRegistered ? (
            <p className="font-bold text-gray-300 mb-16">Si la persona <span className="uppercase text-sky-500">no </span>
            está registrada entre tus clientes, has {''}
                <button type="button"
                    className="text-sky-500 uppercase text-4xl animate__animated animate__flash hover:text-sky-600 transition-colors"
                    onClick={handleClickHere}
                > click aquí.</button>
            </p>
        ) : (
            <p className="font-bold text-gray-300 mb-16">Si la persona <span className="uppercase text-sky-500">ya </span>
            está registrada entre tus clientes, has {''}
                <button type="button"
                    className="text-sky-500 uppercase text-4xl animate__animated animate__flash hover:text-sky-600 transition-colors"
                    onClick={handleClickHere}
                > click aquí.</button>
            </p>
        )} 

        <div className="bg-indigo-700 rounded-lg lg:w-full 2xl:w-3/4 mx-auto p-10 bg-opacity-70 mb-20 animate__animated animate__fadeIn">
            <FormNewLottery 
                formNoRegistered={formNoRegistered}
            />
        </div>
    </>
    )
}

export default NewLottery
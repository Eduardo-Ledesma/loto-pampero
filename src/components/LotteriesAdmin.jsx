import { Link } from "react-router-dom"
import formatDate from "../helpers/FormatDate"

const LotteriesAdmin = ({lot}) => {

    return (
        <>
            <div className="flex justify-between font-bold p-10 bg-indigo-800 rounded-lg 
            bg-opacity-70 border-b last-of-type:border-0">
                <p className="">Fecha: <span className="text-amber-500">{formatDate(lot?.date)}</span></p>

                <Link to={`winners/${lot.id}`}
                    className="hover:scale-110 text-gray-300 transition-transform"
                >Ver Ganadores</Link>
            </div>
        </>
    )
}

export default LotteriesAdmin
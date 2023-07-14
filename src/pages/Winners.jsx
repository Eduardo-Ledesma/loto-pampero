import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import useAdmin from "../hooks/useAdmin"
import formatDate from "../helpers/FormatDate"

const Winners = () => {

    const { getLottery, lotteryById, winners } = useAdmin()
    const navigate = useNavigate()
    const params = useParams()

    useEffect(() => {
        if(params.id) {
            getLottery(params.id)
            console.log(lotteryById);
            console.log(winners);
        }
    }, [params])

    const { n1,n2,n3,n4,n5,n6,n7,n8,n9,n10,n11,n12,n13,n14,n15,n16,n17,n18,n19,n20 } = lotteryById

    return (
        <div>
            { lotteryById?.date ? (
                <h2 className="mt-10 md:mt-0 mb-20 text-6xl font-black text-gray-200 text-center lg:text-left">
                    Sorteo del <span className="text-sky-600">{formatDate(lotteryById.date)}</span>
                </h2>
            ) : (
                'Cargando'
            )}
            

            <div className="flex justify-center md:justify-end">
                <button
                    type="button"
                    className="bg-blue-800 font-bold px-4 py-1 mb-20 rounded-lg uppercase 
                        transition-colors hover:bg-blue-700"
                    onClick={() => navigate(-1)}
                >
                    Volver
                </button>
            </div>

            <section className="bg-gray-800 rounded-md px-10 py-6 mx-6 xl:w-4/5 sm:mx-auto border-2 border-gray-600">
                <h3 className="font-bold text-5xl text-sky-400 mb-10 text-center">Números</h3>
                <ul className="flex gap-6 justify-center flex-wrap font-bold text-5xl mb-4">
                    <li className="border-2 border-white p-2 rounded">{n1}</li>
                    <li className="border-2 border-white p-2 rounded">{n2}</li>
                    <li className="border-2 border-white p-2 rounded">{n3}</li>
                    <li className="border-2 border-white p-2 rounded">{n4}</li>
                    <li className="border-2 border-white p-2 rounded">{n5}</li>
                    <li className="border-2 border-white p-2 rounded">{n6}</li>
                    <li className="border-2 border-white p-2 rounded">{n7}</li>
                    <li className="border-2 border-white p-2 rounded">{n8}</li>
                    <li className="border-2 border-white p-2 rounded">{n9}</li>
                    <li className="border-2 border-white p-2 rounded">{n10}</li>
                    <li className="border-2 border-white p-2 rounded">{n11}</li>
                    <li className="border-2 border-white p-2 rounded">{n12}</li>
                    <li className="border-2 border-white p-2 rounded">{n13}</li>
                    <li className="border-2 border-white p-2 rounded">{n14}</li>
                    <li className="border-2 border-white p-2 rounded">{n15}</li>
                    <li className="border-2 border-white p-2 rounded">{n16}</li>
                    <li className="border-2 border-white p-2 rounded">{n17}</li>
                    <li className="border-2 border-white p-2 rounded">{n18}</li>
                    <li className="border-2 border-white p-2 rounded">{n19}</li>
                    <li className="border-2 border-white p-2 rounded">{n20}</li>
                </ul>
            </section>
        </div>
    )
}

export default Winners
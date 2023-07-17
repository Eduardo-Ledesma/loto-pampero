import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Winners4 from "../components/Winners4"
import useAdmin from "../hooks/useAdmin"
import formatDate from "../helpers/FormatDate"

const Winners = () => {

    const { getLottery, lotteryById, winnersW4, winnersW3, winnersW2 } = useAdmin()
    const navigate = useNavigate()
    const params = useParams()

    useEffect(() => {
        if(params.id) {
            getLottery(params.id)
        }
    }, [params])

    const { n1,n2,n3,n4,n5,n6,n7,n8,n9,n10,n11,n12,n13,n14,n15,n16,n17,n18,n19,n20 } = lotteryById

    return (
        <>
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

            <article className="bg-gray-800 border-2 border-gray-600 rounded-md px-10 py-6 mx-6 sm:mx-auto">
                <section className="">
                    <h3 className="font-bold text-5xl text-sky-400 mb-12 text-center">Números</h3>
                    <ul className="flex gap-6 justify-center flex-wrap font-bold text-5xl mb-4">
                        <li className="border-2 border-white p-2 rounded">{n1}</li> - 
                        <li className="border-2 border-white p-2 rounded">{n2}</li> - 
                        <li className="border-2 border-white p-2 rounded">{n3}</li> - 
                        <li className="border-2 border-white p-2 rounded">{n4}</li> - 
                        <li className="border-2 border-white p-2 rounded">{n5}</li> - 
                        <li className="border-2 border-white p-2 rounded">{n6}</li> - 
                        <li className="border-2 border-white p-2 rounded">{n7}</li> - 
                        <li className="border-2 border-white p-2 rounded">{n8}</li> - 
                        <li className="border-2 border-white p-2 rounded">{n9}</li> - 
                        <li className="border-2 border-white p-2 rounded">{n10}</li> - 
                        <li className="border-2 border-white p-2 rounded">{n11}</li> - 
                        <li className="border-2 border-white p-2 rounded">{n12}</li> - 
                        <li className="border-2 border-white p-2 rounded">{n13}</li> - 
                        <li className="border-2 border-white p-2 rounded">{n14}</li> - 
                        <li className="border-2 border-white p-2 rounded">{n15}</li> - 
                        <li className="border-2 border-white p-2 rounded">{n16}</li> - 
                        <li className="border-2 border-white p-2 rounded">{n17}</li> - 
                        <li className="border-2 border-white p-2 rounded">{n18}</li> - 
                        <li className="border-2 border-white p-2 rounded">{n19}</li> - 
                        <li className="border-2 border-white p-2 rounded">{n20}</li> - 
                    </ul>
                </section>

                <div className="flex flex-col gap-10">
                { winnersW4?.length ? ( 
                    <section className="mt-20 flex flex-col">
                        <div className="flex gap-2 mb-10 items-center justify-center lg:justify-start">
                            <h2 className="font-bold text-gray-300 text-5xl">Ganadores con 
                            <span className="text-green-500"> 4</span> aciertos</h2>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trophy" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffbf00" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M8 21l8 0" />
                                <path d="M12 17l0 4" />
                                <path d="M7 4l10 0" />
                                <path d="M17 4v8a5 5 0 0 1 -10 0v-8" />
                                <path d="M5 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                <path d="M19 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                            </svg>
                        </div>
                        <div className="flex flex-wrap justify-center lg:justify-start gap-10">
                            { winnersW4.map(winner => (
                                <Winners4 
                                    key={winner.id}
                                    winner={winner}
                                />
                            ))}
                        </div>
                    </section>
                ) : (
                    <p className="mt-20 font-bold text-gray-300">No hay ganadores con 4 aciertos.</p>
                )}
                
                { winnersW3?.length ? ( 
                    <section className="mt-20 flex flex-col">
                        <div className="flex gap-2 mb-10 items-center justify-center lg:justify-start">
                            <h2 className="font-bold text-gray-300 text-5xl">Ganadores con 
                            <span className="text-green-500"> 3</span> aciertos</h2>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trophy" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#9e9e9e" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M8 21l8 0" />
                                <path d="M12 17l0 4" />
                                <path d="M7 4l10 0" />
                                <path d="M17 4v8a5 5 0 0 1 -10 0v-8" />
                                <path d="M5 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                <path d="M19 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                            </svg>
                        </div>
                        <div className="flex flex-wrap justify-center lg:justify-start gap-10">
                            { winnersW3.map(winner => (
                                <Winners4 
                                    key={winner.id}
                                    winner={winner}
                                />
                            ))}    
                        </div>
                    </section>
                ) : (
                    <p className="mt-10 font-bold text-gray-300">No hay ganadores con 3 aciertos.</p>
                )}

                { winnersW2?.length ? ( 
                    <section className="mt-20 flex flex-col">
                        <div className="flex gap-2 mb-10 items-center justify-center lg:justify-start">
                            <h2 className="font-bold text-gray-300 text-5xl">Ganadores con 
                            <span className="text-green-500"> 2</span> aciertos</h2>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trophy" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#97330f" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M8 21l8 0" />
                                <path d="M12 17l0 4" />
                                <path d="M7 4l10 0" />
                                <path d="M17 4v8a5 5 0 0 1 -10 0v-8" />
                                <path d="M5 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                <path d="M19 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                            </svg>
                        </div>
                        <div className="flex flex-wrap justify-center lg:justify-start gap-10">
                            { winnersW2.map(winner => (
                                <Winners4 
                                    key={winner.id}
                                    winner={winner}
                                />
                            ))}
                        </div>
                    </section>
                ) : (
                    <p className="mt-10 font-bold text-gray-300">No hay ganadores con 2 aciertos.</p>
                )}  
                </div>
            </article>
        </>
    )
}

export default Winners
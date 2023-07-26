import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Winners4 from "../components/Winners4"
import useAdmin from "../hooks/useAdmin"
import formatDate from "../helpers/FormatDate"
import Swal from "sweetalert2"
import { ClipLoader } from "react-spinners";

const Winners = () => {

    const { getLottery, lotteryById, winnersW4, winnersW3, winnersW2, deleteLottery } = useAdmin()
    const navigate = useNavigate()
    const params = useParams()
    const { n1,n2,n3,n4,n5,n6,n7,n8,n9,n10,n11,n12,n13,n14,n15,n16,n17,n18,n19,n20 } = lotteryById

    useEffect(() => {
        if(params.id) {
            getLottery(params.id)
        }
    }, [params])

    const handleClick = async id => {
        Swal.fire({
            title: 'Deseas Eliminar el Sorteo?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Eliminar',
            confirmButtonAriaLabel: 'Confirmar',
            cancelButtonText: 'Cancelar',
            cancelButtonAriaLabel: 'Cancelar',
        }).then( async (result) => {
            if (result.isConfirmed) {
                const result = await deleteLottery(id)
                if(result) {
                    setTimeout(() => {
                        navigate('/adminlogged')
                    }, 2100);
                }
            }
        })
    }

    return (
        <>
            { lotteryById?.date ? (
                <>
                    <h2 className="mt-10 md:mt-0 text-6xl font-black text-gray-200 text-center md:text-left">
                        Sorteo del <span className="text-sky-600">{formatDate(lotteryById.date)}</span>
                    </h2>
                    <button
                        className="bg-red-600 hover:bg-red-700 transition-colors px-4 py-2 rounded-lg uppercase font-bold 
                        text-2xl sm:text-3xl flex mx-auto md:mx-0 items-center gap-1 mt-14 mb-20"
                        onClick={() => handleClick(params?.id)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-7 h-7">
                            <path fillRule="evenodd" d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z" clipRule="evenodd" />
                        </svg>
                        Eliminar
                    </button>
                </>
            ) : (
                <div className="flex gap-4 justify-center items-center pb-6">
                    <p>Cargando...</p>
                    <ClipLoader color="rgba(10, 148, 120, 1)" />
                </div>
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

            <article className="bg-gray-800 border-2 border-gray-600 rounded-md px-10 py-6 mx-6 mb-4 sm:mx-auto">
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
                    <p className="mt-20 font-bold text-red-500">No hay ganadores con 4 aciertos.</p>
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
                    <p className="mt-10 font-bold text-red-500">No hay ganadores con 3 aciertos.</p>
                )}

                { winnersW2?.length ? ( 
                    <section className="mt-20 flex flex-col">
                        <div className="flex gap-2 mb-10 items-center justify-center lg:justify-start">
                            <h2 className="font-bold text-gray-300 text-5xl">Ganadores con 
                            <span className="text-green-500"> 2</span> aciertos</h2>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trophy" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#c54719" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M8 21l8 0" />
                                <path d="M12 17l0 4" />
                                <path d="M7 4l10 0" />
                                <path d="M17 4v8a5 5 0 0 1 -10 0v-8" />
                                <path d="M5 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                <path d="M19 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                            </svg>
                        </div>
                        <div className="flex flex-wrap justify-center lg:justify-start gap-10 pb-10">
                            { winnersW2.map(winner => (
                                <Winners4 
                                    key={winner.id}
                                    winner={winner}
                                />
                            ))}
                        </div>
                    </section>
                ) : (
                    <p className="mt-10 font-bold text-red-500">No hay ganadores con 2 aciertos.</p>
                )}  
                </div>
            </article>
        </>
    )
}

export default Winners
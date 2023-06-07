import { useNavigate } from "react-router-dom"

const CloseLottery = () => {

    const navigate = useNavigate()

    return (
        <div>
            <h2 className="mt-10 md:mt-0 mb-20 text-6xl font-black underline text-center lg:text-left">Finalizar el Sorteo</h2>
            
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
            
            <div className="bg-indigo-700 rounded-lg lg:w-full 2xl:w-3/4 mx-auto px-5 py-10 bg-opacity-70 mb-20">
                <form>
                    <legend className="text-center mb-20 text-4xl font-bold">
                        Completa el siguiente formulario colocando los 20 números correspondientes a la loteria
                    </legend>

                    <div className="flex justify-center flex-wrap gap-6">
                        <input type="number" name="n1" id="n1" 
                            placeholder="N°1" min="0" max="99"
                            className="py-2 px-5 bg-indigo-600 rounded-lg border border-white"
                        />
                        <input type="number" name="n2" id="n2" 
                            placeholder="N°2" min="0" max="99"
                            className="py-2 px-5 bg-indigo-600 rounded-lg border border-white"
                        />
                        <input type="number" name="n3" id="n3" 
                            placeholder="N°3" min="0" max="99"
                            className="py-2 px-5 bg-indigo-600 rounded-lg border border-white"
                        />
                        <input type="number" name="n4" id="n4" 
                            placeholder="N°4" min="0" max="99" 
                            className="py-2 px-5 bg-indigo-600 rounded-lg border border-white"
                        />
                        <input type="number" name="n5" id="n5" 
                            placeholder="N°5" min="0" max="99"
                            className="py-2 px-5 bg-indigo-600 rounded-lg border border-white"
                        />
                        <input type="number" name="n6" id="n6" 
                            placeholder="N°6" min="0" max="99"
                            className="py-2 px-5 bg-indigo-600 rounded-lg border border-white"
                        />
                        <input type="number" name="n7" id="n7" 
                            placeholder="N°7" min="0" max="99"
                            className="py-2 px-5 bg-indigo-600 rounded-lg border border-white"
                        />
                        <input type="number" name="n8" id="n8" 
                            placeholder="N°8" min="0" max="99" 
                            className="py-2 px-5 bg-indigo-600 rounded-lg border border-white"
                        />
                        <input type="number" name="n9" id="n9" 
                            placeholder="N°9" min="0" max="99"
                            className="py-2 px-5 bg-indigo-600 rounded-lg border border-white"
                        />
                        <input type="number" name="n10" id="n10" 
                            placeholder="N°10" min="0" max="99"
                            className="py-2 px-5 bg-indigo-600 rounded-lg border border-white"
                        />
                        <input type="number" name="n11" id="n11" 
                            placeholder="N°11" min="0" max="99"
                            className="py-2 px-5 bg-indigo-600 rounded-lg border border-white"
                        />
                        <input type="number" name="n12" id="n12" 
                            placeholder="N°12" min="0" max="99" 
                            className="py-2 px-5 bg-indigo-600 rounded-lg border border-white"
                        />
                        <input type="number" name="n13" id="n13" 
                            placeholder="N°13" min="0" max="99"
                            className="py-2 px-5 bg-indigo-600 rounded-lg border border-white"
                        />
                        <input type="number" name="n14" id="n14"
                            placeholder="N°14" min="0" max="99"
                            className="py-2 px-5 bg-indigo-600 rounded-lg border border-white"
                        />
                        <input type="number" name="n15" id="n15" 
                            placeholder="N°15" min="0" max="99"
                            className="py-2 px-5 bg-indigo-600 rounded-lg border border-white"
                        />
                        <input type="number" name="n16" id="n16" 
                            placeholder="N°16" min="0" max="99" 
                            className="py-2 px-5 bg-indigo-600 rounded-lg border border-white"
                        />
                        <input type="number" name="n17" id="n17" 
                            placeholder="N°17" min="0" max="99"
                            className="py-2 px-5 bg-indigo-600 rounded-lg border border-white"
                        />
                        <input type="number" name="n18" id="n18" 
                            placeholder="N°18" min="0" max="99"
                            className="py-2 px-5 bg-indigo-600 rounded-lg border border-white"
                        />
                        <input type="number" name="n19" id="n19" 
                            placeholder="N°19" min="0" max="99"
                            className="py-2 px-5 bg-indigo-600 rounded-lg border border-white"
                        />
                        <input type="number" name="n20" id="n20" 
                            placeholder="N°20" min="0" max="99" 
                            className="py-2 px-5 bg-indigo-600 rounded-lg border border-white"
                        />
                    </div>
                    
                    <input type="submit"  value='Finalizar Sorteo'
                        className="uppercase bg-stone-800 font-bold rounded-lg px-4 py-2 mt-20 
                        hover:cursor-pointer hover:bg-stone-700 transition-colors w-full lg:w-3/4 lg:block mx-auto"
                    />
                </form>

            
            </div>
        </div>
    )
}

export default CloseLottery
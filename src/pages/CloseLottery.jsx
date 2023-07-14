import { useState } from "react"
import { useNavigate } from "react-router-dom"
import AlertApi from "../components/AlertApi"
import useAdmin from '../hooks/useAdmin'
import Swal from "sweetalert2"
import styles from '../css/HeaderNav.module.css'

const CloseLottery = () => {

    const [n1, setN1] = useState('1')
    const [n2, setN2] = useState('2')
    const [n3, setN3] = useState('3')
    const [n4, setN4] = useState('4')
    const [n5, setN5] = useState('20')
    const [n6, setN6] = useState('21')
    const [n7, setN7] = useState('22')
    const [n8, setN8] = useState('23')
    const [n9, setN9] = useState('24')
    const [n10, setN10] = useState('25')
    const [n11, setN11] = useState('26')
    const [n12, setN12] = useState('27')
    const [n13, setN13] = useState('28')
    const [n14, setN14] = useState('29')
    const [n15, setN15] = useState('30')
    const [n16, setN16] = useState('31')
    const [n17, setN17] = useState('32')
    const [n18, setN18] = useState('33')
    const [n19, setN19] = useState('34')
    const [n20, setN20] = useState('35')

    const navigate = useNavigate()
    const { showAlert, alert, closeLottery } = useAdmin()

    const handleSubmit = async e => {
        e.preventDefault()

        const numbers = [n1,n2,n3,n4,n5,n6,n7,n8,n9,n10,n11,n12,n13,n14,n15,n16,n17,n18,n19,n20]
        const noRepeat = new Set(numbers)
        if(numbers.includes('')) {
            showAlert({
                msg: 'No pueden haber campos vacios',
                error: true
            })
            return
        }
        if(noRepeat.size < numbers.length) {
            showAlert({
                msg: 'No pueden haber numeros repetidos',
                error: true
            })
            return
        }

        const numbersObj = {n1,n2,n3,n4,n5,n6,n7,n8,n9,n10,n11,n12,n13,n14,n15,n16,n17,n18,n19,n20}

        await closeLottery(numbersObj)
        // Swal.fire({
        //     position: 'center',
        //     icon: 'success',
        //     title: '¡¡¡Nora Higonet Ganó 50 millones de dólares!!!',
        //     showConfirmButton: false,
        //     timer: 3000,
        //     customClass: {
        //         popup: `${styles.sweetEdit}`
        //     }
        // })
    }

    const { msg } = alert

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
            
            <form className="bg-indigo-700 rounded-lg lg:w-full 2xl:w-3/4 mx-auto 
                px-5 py-10 bg-opacity-70 mb-20"
                onSubmit={handleSubmit}    
            >
                <legend className="text-center mb-20 text-4xl font-bold">
                    Completa el siguiente formulario colocando los 20 números correspondientes a la loteria
                </legend>

                { msg && <AlertApi alert={alert} /> }
                <div className="flex justify-center flex-wrap gap-6">
                    <input type="number" name="n1" id="n1" 
                        placeholder="N°1" min="0" max="99"
                        className="py-2 px-5 bg-indigo-600 rounded-lg border border-white"
                        value={n1}
                        onChange={e => setN1(+e.target.value)}
                    />
                    <input type="number" name="n2" id="n2" 
                        placeholder="N°2" min="0" max="99"
                        className="py-2 px-5 bg-indigo-600 rounded-lg border border-white"
                        value={n2}
                        onChange={e => setN2(+e.target.value)}
                    />
                    <input type="number" name="n3" id="n3" 
                        placeholder="N°3" min="0" max="99"
                        className="py-2 px-5 bg-indigo-600 rounded-lg border border-white"
                        value={n3}
                        onChange={e => setN3(+e.target.value)}
                    />
                    <input type="number" name="n4" id="n4" 
                        placeholder="N°4" min="0" max="99" 
                        className="py-2 px-5 bg-indigo-600 rounded-lg border border-white"
                        value={n4}
                        onChange={e => setN4(+e.target.value)}
                    />
                    <input type="number" name="n5" id="n5" 
                        placeholder="N°5" min="0" max="99"
                        className="py-2 px-5 bg-indigo-600 rounded-lg border border-white"
                        value={n5}
                        onChange={e => setN5(+e.target.value)}
                    />
                    <input type="number" name="n6" id="n6" 
                        placeholder="N°6" min="0" max="99"
                        className="py-2 px-5 bg-indigo-600 rounded-lg border border-white"
                        value={n6}
                        onChange={e => setN6(+e.target.value)}
                    />
                    <input type="number" name="n7" id="n7" 
                        placeholder="N°7" min="0" max="99"
                        className="py-2 px-5 bg-indigo-600 rounded-lg border border-white"
                        value={n7}
                        onChange={e => setN7(+e.target.value)}
                    />
                    <input type="number" name="n8" id="n8" 
                        placeholder="N°8" min="0" max="99" 
                        className="py-2 px-5 bg-indigo-600 rounded-lg border border-white"
                        value={n8}
                        onChange={e => setN8(+e.target.value)}
                    />
                    <input type="number" name="n9" id="n9" 
                        placeholder="N°9" min="0" max="99"
                        className="py-2 px-5 bg-indigo-600 rounded-lg border border-white"
                        value={n9}  
                        onChange={e => setN9(+e.target.value)}
                    />
                    <input type="number" name="n10" id="n10" 
                        placeholder="N°10" min="0" max="99"
                        className="py-2 px-5 bg-indigo-600 rounded-lg border border-white"
                        value={n10}
                        onChange={e => setN10(+e.target.value)}
                    />
                    <input type="number" name="n11" id="n11" 
                        placeholder="N°11" min="0" max="99"
                        className="py-2 px-5 bg-indigo-600 rounded-lg border border-white"
                        value={n11}
                        onChange={e => setN11(+e.target.value)}
                    />
                    <input type="number" name="n12" id="n12" 
                        placeholder="N°12" min="0" max="99" 
                        className="py-2 px-5 bg-indigo-600 rounded-lg border border-white"
                        value={n12}
                        onChange={e => setN12(+e.target.value)}
                    />
                    <input type="number" name="n13" id="n13" 
                        placeholder="N°13" min="0" max="99"
                        className="py-2 px-5 bg-indigo-600 rounded-lg border border-white"
                        value={n13}
                        onChange={e => setN13(+e.target.value)}
                    />
                    <input type="number" name="n14" id="n14"
                        placeholder="N°14" min="0" max="99"
                        className="py-2 px-5 bg-indigo-600 rounded-lg border border-white"
                        value={n14}
                        onChange={e => setN14(+e.target.value)}
                    />
                    <input type="number" name="n15" id="n15" 
                        placeholder="N°15" min="0" max="99"
                        className="py-2 px-5 bg-indigo-600 rounded-lg border border-white"
                        value={n15}
                        onChange={e => setN15(+e.target.value)}
                    />
                    <input type="number" name="n16" id="n16" 
                        placeholder="N°16" min="0" max="99" 
                        className="py-2 px-5 bg-indigo-600 rounded-lg border border-white"
                        value={n16}
                        onChange={e => setN16(+e.target.value)}
                    />
                    <input type="number" name="n17" id="n17" 
                        placeholder="N°17" min="0" max="99"
                        className="py-2 px-5 bg-indigo-600 rounded-lg border border-white"
                        value={n17}
                        onChange={e => setN17(+e.target.value)}
                    />
                    <input type="number" name="n18" id="n18" 
                        placeholder="N°18" min="0" max="99"
                        className="py-2 px-5 bg-indigo-600 rounded-lg border border-white"
                        value={n18}
                        onChange={e => setN18(+e.target.value)}
                    />
                    <input type="number" name="n19" id="n19" 
                        placeholder="N°19" min="0" max="99"
                        className="py-2 px-5 bg-indigo-600 rounded-lg border border-white"
                        value={n19}
                        onChange={e => setN19(+e.target.value)}
                    />
                    <input type="number" name="n20" id="n20" 
                        placeholder="N°20" min="0" max="99" 
                        className="py-2 px-5 bg-indigo-600 rounded-lg border border-white"
                        value={n20}
                        onChange={e => setN20(+e.target.value)}
                    />
                </div>

                <input type="submit"  value='Finalizar Sorteo'
                    className="uppercase bg-amber-600 font-bold text-4xl rounded-lg px-4 py-3 mt-20 
                    hover:cursor-pointer hover:bg-amber-700 transition-colors w-full lg:w-2/4 lg:block mx-auto"
                />
            </form>

        </div>
    )
}

export default CloseLottery
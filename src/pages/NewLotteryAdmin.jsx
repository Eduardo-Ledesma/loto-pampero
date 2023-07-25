import { useState, useEffect } from "react";
import AlertApi from "../components/AlertApi";
import useAdmin from "../hooks/useAdmin";

const NewLotteryAdmin = () => {

    const [sellerSelect, setSellerSelect] = useState('')
    const [clientSelect, setClientSelect] = useState('')
    const [clientState, setClientState] = useState({})
    const [n1, setN1] = useState('')
    const [n2, setN2] = useState('')
    const [n3, setN3] = useState('')
    const [n4, setN4] = useState('')
    const [isSeller, setIsSeller] = useState(false)

    const { sellers, showAlert, alert, getClientsSellers, sellerClients } = useAdmin()

    // TODO: agregar value y onchange al input de nombre cliente
    const handleChange = async e => {
        setSellerSelect(+e.target.value)
        setClientState({})
        setN1('')
        setN2('')
        setN3('')
        setN4('')

        // Mostrar o no el segundo select
        if(e.target.value === '') {
            setIsSeller(false)
            return
        }
        
        setIsSeller(true)
        // Llamo a la api para traerme los clientes asi lleno el select
        await getClientsSellers(+e.target.value)
    }

    useEffect(() => {
        if(sellerClients.length) {
            const clientSelected = sellerClients.find( client => client.name === clientSelect)
            if(clientSelected?.name) {
                setClientState(clientSelected)
                setN1(clientSelected.n1)
                setN2(clientSelected.n2)
                setN3(clientSelected.n3)
                setN4(clientSelected.n4)
            }
        }
    }, [clientSelect])

    const handleSubmit = async e => {
        e.preventDefault()
        console.log('enviando')
    }

    const { msg } = alert
    
    return (
        <form 
            onSubmit={handleSubmit}
            className="bg-indigo-700 rounded-lg lg:w-full 2xl:w-3/4 mx-auto p-10 bg-opacity-70 mb-20"
        >
            { msg && <AlertApi alert={alert} /> }
            <legend className="text-center mb-20 text-5xl font-bold text-gray-200">Completa los siguientes campos</legend>

            <div className="flex flex-col lg:flex-row mb-16">
                <label className="mb-6 lg:w-1/3" htmlFor="fullName">Seleccionar Vendedor:</label>
                <select name="fullName" id="fullName" onChange={e => handleChange(e)}
                    className="py-2 px-5 lg:w-2/3 bg-indigo-600 rounded-lg border border-white hover:cursor-pointer"
                >
                    <option value="">Administrador</option>
                    { sellers.map(sell => (
                        <option key={sell.id} value={sell.id}>{sell.name}</option>
                    ))}
                </select>
            </div>

            { isSeller ? (
                <div className="flex flex-col lg:flex-row mb-16">
                    <label className="mb-6 lg:w-1/3" htmlFor="fullName">Seleccionar Cliente:</label>
                    <select name="fullName" id="fullName" onChange={e => setClientSelect(e.target.value)}
                        className="py-2 px-5 lg:w-2/3 bg-indigo-600 rounded-lg border border-white hover:cursor-pointer"
                    >
                        <option value="">-- Seleccione --</option>
                        { sellerClients.map(client => (
                            <option key={client.id} value={client.name}>{client.name}</option>
                        ))}
                    </select>
                </div>
            ) : (
                <div className="flex flex-col lg:flex-row mb-16">
                    <label className="mb-6 lg:w-1/3" htmlFor="name">Nombre del Cliente:</label>
                    <input type="text" name="name" id="name" placeholder="Nombre y apellido del cliente"
                        className="py-2 px-5 lg:w-2/3 bg-indigo-600 rounded-lg border border-white"
                    />
                </div>
            )}
            
            <div className="flex flex-col lg:flex-row">
                <label className="mb-6 lg:w-1/3" htmlFor="fullName">Números:</label>
                <div className="flex justify-between flex-wrap gap-y-4 lg:w-2/3">
                    <input type="number" name="number1" id="number1" onChange={e => setN1(+e.target.value)}
                        placeholder="N°1" min="0" max="99" value={n1}
                        className="py-2 px-5 bg-indigo-600 rounded-lg border border-white"
                    />
                    <input type="number" name="number2" id="number2" onChange={e => setN2(+e.target.value)}
                        placeholder="N°2" min="0" max="99" value={n2}
                        className="py-2 px-5 bg-indigo-600 rounded-lg border border-white"
                    />
                    <input type="number" name="number3" id="number3" onChange={e => setN3(+e.target.value)}
                        placeholder="N°3" min="0" max="99" value={n3}
                        className="py-2 px-5 bg-indigo-600 rounded-lg border border-white"
                    />
                    <input type="number" name="number4" id="number4" onChange={e => setN4(+e.target.value)}
                        placeholder="N°4" min="0" max="99" value={n4}
                        className="py-2 px-5 bg-indigo-600 rounded-lg border border-white"
                    />
                </div>
            </div>
            <input type="submit"  value="Cargar Nuevo Loto"
                    className="uppercase bg-slate-900 font-bold text-4xl rounded-full px-4 py-4 mt-20 
                    hover:cursor-pointer hover:bg-slate-800 transition-colors w-full lg:w-2/4 lg:block mx-auto"
            />
        </form>
    )
}

export default NewLotteryAdmin
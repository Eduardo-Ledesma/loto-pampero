import { useState, useEffect } from "react";
import useClients from "../hooks/useClients";

const FormNewLottery = () => {

    const [userName, setUserName] = useState('')
    const [clientState, setClientState] = useState({})
    const [n1, setN1] = useState(null)
    const [n2, setN2] = useState(null)
    const [n3, setN3] = useState(null)
    const [n4, setN4] = useState(null)
    const { clients, newLottery } = useClients()

    useEffect(() => {
            const client = clients.filter(client => client.name === userName)
            if(client.length) {
                setClientState(client[0])
                setN1(client[0].n1)
                setN2(client[0].n2)
                setN3(client[0].n3)
                setN4(client[0].n4)
            }
        }, [userName])


    const handleSubmit = async e => {
        e.preventDefault()
        
        const clientObj = {
            clientId: clientState.id,
            n1: n1,
            n2: n2,
            n3: n3,
            n4: n4
        }
        
        if(Object.values(clientObj).includes('')) {
            console.log('Todos lo campos son obligatorios')
            return
        }

        await newLottery(clientObj)
    }

    return (
        <form 
            onSubmit={handleSubmit}
        >
            <legend className="text-center mb-20 text-5xl font-bold">Completa los siguientes campos</legend>
        
            <div className="flex flex-col lg:flex-row mb-12">
                <label className="mb-6 lg:w-1/3" htmlFor="fullName">Seleccionar Cliente:</label>
                <select name="fullName" id="fullName" onChange={e => setUserName(e.target.value)}
                    className="py-2 px-5 lg:w-2/3 bg-indigo-600 rounded-lg border border-white hover:cursor-pointer"
                >
                <option value="">-- Seleccione --</option>
                { clients.map(client => (
                    <option key={client.id} value={client.name}>{client.name}</option>
                ))}
                </select>
            </div>
                        
            <div className="flex flex-col lg:flex-row">
                <label className="mb-6 lg:w-1/3" htmlFor="fullName">Números:</label>
                <div className="flex justify-between flex-wrap gap-y-4 lg:w-2/3">
                    <input type="number" name="number1" id="number1" onChange={e => setN1(+e.target.value)}
                        placeholder="N°1" min="0" max="99" defaultValue={n1 ?? clientState?.n1}
                        className="py-2 px-5 bg-indigo-600 rounded-lg border border-white"
                    />
                    <input type="number" name="number2" id="number2" onChange={e => setN2(+e.target.value)}
                        placeholder="N°2" min="0" max="99" defaultValue={n2 ?? clientState?.n2}
                        className="py-2 px-5 bg-indigo-600 rounded-lg border border-white"
                    />
                    <input type="number" name="number3" id="number3" onChange={e => setN3(+e.target.value)}
                        placeholder="N°3" min="0" max="99" defaultValue={n3 ?? clientState?.n3}
                        className="py-2 px-5 bg-indigo-600 rounded-lg border border-white"
                    />
                    <input type="number" name="number4" id="number4" onChange={e => setN4(+e.target.value)}
                        placeholder="N°4" min="0" max="99" defaultValue={n4 ?? clientState?.n4}
                        className="py-2 px-5 bg-indigo-600 rounded-lg border border-white"
                    />
                </div>
            </div>
            <input type="submit"  value="Cargar Nuevo Loto"
                    className="uppercase bg-stone-800 font-bold rounded-lg px-4 py-2 mt-20 
                    hover:cursor-pointer hover:bg-stone-700 transition-colors w-full lg:w-3/4 lg:block mx-auto"
            />
        </form>
    )
}

export default FormNewLottery
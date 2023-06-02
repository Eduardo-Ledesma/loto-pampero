import { useEffect, useState } from "react"
import useClients from "../hooks/useClients"
import { useParams } from "react-router-dom"
import Alert from "./Alert"

const FormNewClient = () => {

    const [name, setName] = useState('')
    const [n1, setN1] = useState('')
    const [n2, setN2] = useState('')
    const [n3, setN3] = useState('')
    const [n4, setN4] = useState('')

    const { showAlert, alert, addClient } = useClients()

    // const params = useParams()
    // console.log(params);

    const handleSubmit = e => {
        e.preventDefault()

        if([name,n1,n2,n3,n4].includes('')) {
            showAlert({
                msg: 'Todos los campos son obligatorios',
                error: true
            })
            return
        } 

        addClient({name,n1,n2,n3,n4})
    }

    // useEffect( () => {
    //     getClient(params.clientId)
    // }, [])

    const { msg } = alert

    return (

        <form
            onSubmit={handleSubmit}
        >
            { msg && <Alert alert={alert} /> }
            <legend className="text-center mb-20 text-5xl font-bold">Completa los siguientes campos</legend>
            
            <div className="flex flex-col lg:flex-row mb-12">
                <label className="mb-6 lg:w-1/3" htmlFor="name">Nombre y Apellido:</label>
                <input type="text" name="name" id="name" placeholder="Nombre y Apellido"
                    className="py-2 px-5 lg:w-2/3 bg-indigo-600 rounded-lg border border-white"
                    onChange={e => setName(e.target.value)}
                />
            </div>

            <div className="flex flex-col lg:flex-row">
                <label className="mb-6 lg:w-1/3">Números:</label>
                <div className="flex justify-between flex-wrap gap-y-4 lg:w-2/3">
                    <input type="number" name="n1" id="n1" 
                        placeholder="N°1" min="0" max="99" onChange={e => setN1(+e.target.value)}
                        className="py-2 px-5 bg-indigo-600 rounded-lg border border-white"
                    />
                    <input type="number" name="n2" id="n2" 
                        placeholder="N°2" min="0" max="99" onChange={e => setN2(+e.target.value)}
                        className="py-2 px-5 bg-indigo-600 rounded-lg border border-white"
                    />
                    <input type="number" name="n3" id="n3" 
                        placeholder="N°3" min="0" max="99" onChange={e => setN3(+e.target.value)}
                        className="py-2 px-5 bg-indigo-600 rounded-lg border border-white"
                    />
                    <input type="number" name="n4" id="n4"
                        placeholder="N°4" min="0" max="99" onChange={e => setN4(+e.target.value)}
                        className="py-2 px-5 bg-indigo-600 rounded-lg border border-white"
                    />
                </div>
            </div>
            
            <input type="submit"  value="Cargar Nuevo Cliente"
                    className="uppercase bg-stone-800 font-bold rounded-lg px-4 py-2 mt-20 
                    hover:cursor-pointer hover:bg-stone-700 transition-colors w-full lg:w-3/4 lg:block mx-auto"
            />
        </form>
    )
}

export default FormNewClient
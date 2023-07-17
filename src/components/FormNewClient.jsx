import { useEffect, useState } from "react"
import useClients from "../hooks/useClients"
import { useParams, useNavigate } from "react-router-dom"
import AlertApi from "./AlertApi"

const FormNewClient = () => {

    const [id, setId] = useState(null)
    const [name, setName] = useState('')
    const [n1, setN1] = useState('')
    const [n2, setN2] = useState('')
    const [n3, setN3] = useState('')
    const [n4, setN4] = useState('')
    const navigate = useNavigate()

    const { showAlert, alert, submitClient, client } = useClients()

    const params = useParams()

    useEffect( () => {
        if(client.name) {
            setId(client.id)
            setName(client.name)
            setN1(client.n1)
            setN2(client.n2)
            setN3(client.n3)
            setN4(client.n4)
        }
    }, [params])

    const handleSubmit = async e => {
        e.preventDefault()

        if([name,n1,n2,n3,n4].includes('') || name.trim() === '') {
            showAlert({
                msg: 'Todos los campos son obligatorios',
                error: true
            })
            return
        } 

        const result = await submitClient({id,name,n1,n2,n3,n4})
        if(result === 1) {
            showAlert({
                msg: 'Ya existe un cliente con el nombre elegido',
                error: true
            })
            return
        }
        setId(null)
        setName('')
        setN1('')
        setN2('')
        setN3('')
        setN4('')
        setTimeout(() => {
            navigate('/userlogged')
        }, 2500);
    }

    
    const { msg } = alert

    return (

        <form
            onSubmit={handleSubmit}
            className="bg-indigo-700 rounded-lg lg:w-full 2xl:w-3/4 mx-auto px-5 py-10 bg-opacity-70 mb-20"
        >
            { msg && <AlertApi alert={alert} /> }
            <legend className="text-center mb-20 text-5xl font-bold">Completa los siguientes campos</legend>
            
            <div className="flex flex-col lg:flex-row mb-12">
                <label className="mb-6 lg:w-1/3" htmlFor="name">Nombre y Apellido:</label>
                <input type="text" name="name" id="name" placeholder="Nombre y Apellido"
                    className="py-2 px-5 lg:w-2/3 bg-indigo-600 rounded-lg border border-white"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </div>

            <div className="flex flex-col lg:flex-row">
                <label className="mb-6 lg:w-1/3">Números:</label>
                <div className="flex justify-between flex-wrap gap-y-4 lg:w-2/3">
                    <input type="number" name="n1" id="n1" value={n1}
                        placeholder="N°1" min="0" max="99" onChange={e => setN1(+e.target.value)}
                        className="py-2 px-5 bg-indigo-600 rounded-lg border border-white"
                    />
                    <input type="number" name="n2" id="n2" value={n2}
                        placeholder="N°2" min="0" max="99" onChange={e => setN2(+e.target.value)}
                        className="py-2 px-5 bg-indigo-600 rounded-lg border border-white"
                    />
                    <input type="number" name="n3" id="n3" value={n3}
                        placeholder="N°3" min="0" max="99" onChange={e => setN3(+e.target.value)}
                        className="py-2 px-5 bg-indigo-600 rounded-lg border border-white"
                    />
                    <input type="number" name="n4" id="n4" value={n4}
                        placeholder="N°4" min="0" max="99" onChange={e => setN4(+e.target.value)}
                        className="py-2 px-5 bg-indigo-600 rounded-lg border border-white"
                    />
                </div>
            </div>
            
            <input type="submit"  value={params?.clientId ? 'Editar Cliente' : 'Agregar Nuevo Cliente'}
                    className="uppercase bg-slate-900 font-bold text-4xl rounded-full px-4 py-4 mt-20 
                    hover:cursor-pointer hover:bg-slate-800 transition-colors w-full lg:w-2/4 lg:block mx-auto"
            />
        </form>
    )
}

export default FormNewClient
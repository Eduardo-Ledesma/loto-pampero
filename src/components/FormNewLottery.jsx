import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useClients from "../hooks/useClients";
import AlertApi from "./AlertApi"

const FormNewLottery = ({formNoRegistered}) => {

    const [userNameSelect, setUserNameSelect] = useState('')
    const [userNameInput, setUserNameInput] = useState('')
    const [clientState, setClientState] = useState({})
    const [n1, setN1] = useState('')
    const [n2, setN2] = useState('')
    const [n3, setN3] = useState('')
    const [n4, setN4] = useState('')
    const { clients, newLottery, showAlert, alert } = useClients()

    const navigate = useNavigate()

    useEffect(() => {
            const client = clients.filter(client => client.name === userNameSelect)
            if(client.length) {
                setClientState(client[0])
                setN1(client[0].n1)
                setN2(client[0].n2)
                setN3(client[0].n3)
                setN4(client[0].n4)
            }
    }, [userNameSelect])


    const handleSubmit = async e => {
        e.preventDefault()
        
        let clientObj = {};

        if(formNoRegistered) {  // Validación si es con input
            clientObj = {
                clientName: userNameInput,
                n1: n1,
                n2: n2,
                n3: n3,
                n4: n4
            }

            if(!userNameInput) {
                showAlert({
                    msg: 'Todos los campos son obligatorios',
                    error: true
                })
                return
            } 

        } else { // Validación si es con select
            clientObj = {
                clientId: clientState.id,
                n1: n1,
                n2: n2,
                n3: n3,
                n4: n4
            }

            if(!userNameSelect) {
                showAlert({
                    msg: 'Selecciona un cliente',
                    error: true
                })
                return
            }
        }

        const numbers = [n1, n2, n3, n4];
        const uniqueNumbers = new Set(numbers);
        if (uniqueNumbers.size < numbers.length) {
            showAlert({
                msg: 'Asegúrate de que los números no se repitan',
                error: true
            });
            return;
        }

        const result = await newLottery(clientObj)
        if(result === 1) {
            showAlert({
                msg: 'El cliente ya tiene un loto con esos mismos numeros en este sorteo',
                error: true
            })
            return
        }

        setClientState({})
        setUserNameSelect('')
        setUserNameInput('')
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
        >
            { msg && <AlertApi alert={alert} /> }
            <legend className="text-center mb-20 text-5xl font-bold text-gray-200">Completa los siguientes campos</legend>
        
            { formNoRegistered ? (
                <div className="flex flex-col lg:flex-row mb-16">
                    <label htmlFor="userName2"
                        className="lg:w-1/3 mb-4"
                    >Nombre y Apellido:</label>
                    <input type="text" 
                        name="userName2"
                        id="userName2"
                        placeholder="Nombre y Apellido"
                        className="py-2 px-5 lg:w-2/3 bg-indigo-600 rounded-lg border border-white"
                        value={userNameInput}
                        onChange={e => setUserNameInput(e.target.value)}
                    />
                </div>
            ) : (
                <div className="flex flex-col lg:flex-row mb-16">
                    <label className="mb-6 lg:w-1/3" htmlFor="fullName">Seleccionar Cliente:</label>
                    <select name="fullName" id="fullName" onChange={e => setUserNameSelect(e.target.value)}
                        className="py-2 px-5 lg:w-2/3 bg-indigo-600 rounded-lg border border-white hover:cursor-pointer"
                    >
                        <option value="">-- Seleccione --</option>
                        { clients.map(client => (
                            <option key={client.id} value={client.name}>{client.name}</option>
                        ))}
                    </select>
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

export default FormNewLottery
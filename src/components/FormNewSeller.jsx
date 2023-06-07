import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Alert from "./Alert"
import useAdmin from "../hooks/useAdmin"

const FormNewSeller = () => {

    // const [id, setId] = useState(null)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    
    const { showAlert, alert, submitClient } = useAdmin()
    const navigate = useNavigate()

    const handleSubmit = async e => {
        e.preventDefault()
        
        if([name,email,password,repeatPassword].includes('') || !name.trim() || !password.trim() || !repeatPassword.trim()) {
            showAlert({
                msg: 'Todos los campos son obligatorios',
                error: true
            })
            return
        }
        if(!/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(email)) {
            showAlert({
                msg: 'Email no válido',
                error: true
            })
            return
        }
        if(password !== repeatPassword) {
            showAlert({
                msg: 'Las contraseñas no coinciden',
                error: true
            })
            return
        }

        await submitClient({name,email,password})

        setName('')
        setEmail('')
        setPassword('')
        setRepeatPassword('')
        setTimeout(() => {
            navigate('/adminlogged')
        }, 2500);
    }

    const { msg } = alert

    return (
        <form
            onSubmit={handleSubmit}
            noValidate
        >
            { msg && <Alert alert={alert} /> }
            <legend className="text-center mb-20 text-5xl font-bold">Completa los siguientes campos</legend>

            <div className="flex flex-col lg:flex-row mb-12">
                <label className="mb-6 lg:w-1/3" htmlFor="name">Nombre y Apellido:</label>
                <input type="text" name="name" id="name" placeholder="Nombre y Apellido"
                    className="py-2 px-5 lg:w-2/3 bg-indigo-600 rounded-lg border border-white"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </div>

            <div className="flex flex-col lg:flex-row mb-12">
                <label className="mb-6 lg:w-1/3" htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" placeholder="Email"
                    className="py-2 px-5 lg:w-2/3 bg-indigo-600 rounded-lg border border-white"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </div>

            <div className="flex flex-col lg:flex-row mb-12">
                <label className="mb-6 lg:w-1/3" htmlFor="password">Contraseña:</label>
                <input type="password" name="password" id="password" placeholder="Contraseña"
                    className="py-2 px-5 lg:w-2/3 bg-indigo-600 rounded-lg border border-white"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </div>

            <div className="flex flex-col lg:flex-row mb-12">
                <label className="mb-6 lg:w-1/3" htmlFor="rep-password">Repite la Contraseña:</label>
                <input type="password" name="rep-password" id="repeat-password" placeholder="Repetir Contraseña"
                    className="py-2 px-5 lg:w-2/3 bg-indigo-600 rounded-lg border border-white"
                    value={repeatPassword}
                    onChange={e => setRepeatPassword(e.target.value)}
                />
            </div>

            <input type="submit"  value={'Agregar Nuevo Vendedor'}
                    className="uppercase bg-stone-800 font-bold rounded-lg px-4 py-2 mt-20 
                    hover:cursor-pointer hover:bg-stone-700 transition-colors w-full lg:w-3/4 lg:block mx-auto"
            />
        </form>
    )
}

export default FormNewSeller
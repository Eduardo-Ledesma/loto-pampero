import { useState } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import useClients from "../hooks/useClients"
import Alert from '../components/Alert'
import stylesForm from '../css/Form.module.css'

const ChangePassword = () => {

    const navigate = useNavigate()
    const { tokenLS, tokenAdminLS } = useAuth()
    const { showAlert, alert } = useClients()

    const [currentPassword, setCurrentPassword] = useState()
    const [newPassword, setNewPassword] = useState()
    const [repeatNewPassword, setRepeatNewPassword] = useState()

    const handleSubmit = e => {
        e.preventDefault()
        
        if(newPassword !== repeatNewPassword) {
            showAlert({
                msg: 'Las contraseñas no coinciden',
                error: true
            })
            return
        }

        console.log('actualizando contraseña');
    }

    const { msg } = alert

    return (
        <>
            { tokenAdminLS || tokenLS ? (
                <main className="contenedor">

                    <form className={stylesForm.form}
                        onSubmit={handleSubmit}
                    >
                        <div className="flex justify-center">
                            <button
                                type="button"
                                className="bg-blue-800 font-bold px-4 py-1 mb-20 rounded-lg 
                                    uppercase transition-colors hover:bg-blue-700"
                                onClick={() => navigate(-1)}
                            >
                                Volver
                            </button>
                        </div>

                        <legend className={stylesForm.form_legend}>
                            A continuación podrás establecer una nueva contraseña
                        </legend>
                            { msg && <Alert alert={alert}/>}
                            <div className='flex justify-center my-12'>
                                <input className={stylesForm.input_reset} 
                                    type="password" name="currentPassword" 
                                    id="current-password" placeholder="Contraseña actual"
                                    onChange={e => setCurrentPassword(e.target.value)}    
                                />
                            </div>
                            <div className='flex justify-center my-12'>
                                <input className={stylesForm.input_reset} 
                                    type="password" name="newPassword" 
                                    id="new-password" placeholder="Contraseña nueva"
                                    onChange={e => setNewPassword(e.target.value)}    
                                />
                            </div>
                            <div className='flex justify-center'>
                                <input className={stylesForm.input_reset} 
                                    type="password" name="repeatPassword" 
                                    id="repeat-password" placeholder="Repite la contraseña nueva"
                                    onChange={e => setRepeatNewPassword(e.target.value)}     
                                />
                            </div>
                            <div className={stylesForm.form_btn}>
                                <input className={stylesForm.loginBtn} 
                                type="submit" value="Establecer nueva contraseña"/>
                            </div>
                    </form>
                </main>
            ) : (
                <Navigate to="/" />
            )}
            
        </>
    )
}

export default ChangePassword
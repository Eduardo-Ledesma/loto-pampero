import { useState } from "react"
import { Link } from "react-router-dom"
import Alert from "../components/Alert"
import styles from '../css/Form.module.css'

const ForgotPassword = () => {

    const [email, setEmail] = useState('')
    const [alert, setAlert] = useState({})
    
    const handleSubmit = async e => {
        e.preventDefault()

        if(!email) {
            setAlert({
                msg: 'El email es obligatorio',
                error: true
            });
            return
        }
    }
    
    const { msg } = alert

    return (
        <>
            
            <form 
                className={styles.form}
                onSubmit={handleSubmit}
            >
                <legend className={styles.form_legend}>
                    A continuación introduce tu correo electrónico y te enviaremos un enlace para que puedas actualizar tu contraseña
                </legend>
                { msg && <Alert alert={alert} />}
                <div className='flex justify-center my-12'>
                    <input className={styles.input_reset} type="email" name="email" id="email"
                        placeholder="Correo electrónico" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div> 

                <div className='flex justify-center mb-12'> 
                <input 
                    type="submit"
                    className={styles.loginBtn}
                    value='Enviar Enlace'   
                />
                </div>  

                <Link className={styles.nav_enlace} to="/">Volver al inicio de sesión</Link>
            </form>
        </>
    )
}

export default ForgotPassword
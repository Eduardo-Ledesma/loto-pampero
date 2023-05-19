import { Link } from "react-router-dom"
import styles from '../css/Form.module.css'

const ForgotPassword = () => {
    return (
        <>
            <form className={styles.form}>
                <legend className={styles.form_legend}>
                    A continuación introduce tu correo electrónico y te enviaremos un enlace para que puedas actualizar tu contraseña
                </legend>

                <div className='flex justify-center my-12'>
                    <input className={styles.input_reset} type="email" name="email" id="email" placeholder="Correo electrónico"/>
                </div> 

                <div className='flex justify-center mb-12'> 
                <button type="button" className={styles.loginBtn}>Enviar Enlace</button>
                </div>  

                <Link className={styles.nav_enlace} to="/">Volver al inicio de sesión</Link>
            </form>
        </>
    )
}

export default ForgotPassword
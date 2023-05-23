import { Link } from "react-router-dom"
import styles from '../css/Form.module.css'

const Form = () => {

    return (
        <>
            <form 
                className={styles.form}
            >
                <fieldset className={styles.form_fieldset}>
                <legend className={styles.form_legend}>Inicie Sesión para continuar</legend>
                    <div className={styles.form_div}>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" placeholder="Email"/>
                    </div>
                    <div className={styles.form_div}>
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" name="password" id="password" placeholder="Contraseña"/>
                    </div>
                    <div className={styles.form_btn}>
                        <input 
                            className={styles.loginBtn} 
                            type="submit" 
                            value="Iniciar Sesión"  
                        />
                    </div>
                </fieldset>   
            </form>

            <nav className={styles.nav}>
                <Link className={styles.nav_enlace} to="/password/forgot">¿Olvidaste tu contraseña?</Link>
            </nav>
        </>
    )
}

export default Form
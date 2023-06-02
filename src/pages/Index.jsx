import { useState } from "react";
import { Link, Navigate } from "react-router-dom"
import styles from '../css/Form.module.css'
import { loginAction } from "../api/actions";
import useAuth from "../hooks/useAuth";
import Alert from "../components/Alert";

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [alert, setAlert] = useState({})

    const { setAuth, token, setToken, tokenLS } = useAuth()

    const handleSubmit = async e => {
        e.preventDefault()

        if(!email || !password) {
            setAlert({
                msg: 'Todos los campos son obligatorios',
                error: true
            })
            return
        }
        const data = { email, password }
        const result = await loginAction(data)

        if(result.message) {
            setAlert({
                msg: 'Email o contraseña incorrectos',
                error: true
            })
            return
        }
        localStorage.setItem('data', JSON.stringify(result.user))
        localStorage.setItem('token', result.accessToken)
        setAuth(result.user);
        setToken(result.accessToken)
    }

    const { msg } = alert
    
    return (
        
        <>
            {token.length || tokenLS.length ? ( 
                <Navigate to="/userlogged" replace={true} />
            ) : (
                <main className="contenedor">
                    <form 
                        className={styles.form}
                        onSubmit={handleSubmit}
                    >
                        <fieldset className={styles.form_fieldset}>
                            <legend className={styles.form_legend}>Inicie Sesión para continuar</legend>

                            { msg && <Alert alert={alert} />}
                            <div className={styles.form_div}>
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" id="email" placeholder="Email" 
                                    value={email} onChange={e => setEmail(e.target.value)}
                                />
                            </div>
                            <div className={styles.form_div}>
                                <label htmlFor="password">Contraseña</label>
                                <input type="password" name="password" id="password" placeholder="Contraseña"
                                    value={password} onChange={e => setPassword(e.target.value)}
                                />
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
                </main>
                )}
        </>
    )
}

export default Login
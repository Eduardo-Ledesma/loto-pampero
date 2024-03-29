import { useState } from "react";
import { Link, Navigate } from "react-router-dom"
import styles from '../css/Form.module.css'
import useAuth from "../hooks/useAuth";
import Alert from "../components/Alert";
import AlertApi from "../components/AlertApi";
import { ClipLoader } from "react-spinners";

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [alert, setAlert] = useState({})

    const { auth, setAuth, authLS, token, setToken, tokenLS, loginAction, alertConection, setTokenAdmin, loading } = useAuth()

    const handleSubmit = async e => {
        e.preventDefault()

        if(!email || !password) {
            setAlert({
                msg: 'Todos los campos son obligatorios',
                error: true
            })
            setTimeout(() => {
                setAlert({})
            }, 3000);
            return
        }
        const data = { email, password }
        const result = await loginAction(data)

        if(result.message) {
            setAlert({
                msg: 'Email o contraseña incorrectos',
                error: true
            })
            setTimeout(() => {
                setAlert({})
            }, 3000);
            return
        }

        localStorage.setItem('data', JSON.stringify(result.user))
        
        setAuth(result.user);
        if(result.user.role === 2) {
            localStorage.setItem('token', result.accessToken)
            setToken(result.accessToken)
        } else {
            localStorage.setItem('tokenAdmin', result.accessToken)
            setTokenAdmin(result.accessToken)
        }
        
    }

    const { msg } = alert
    
    return (
        
        <>
            { auth.name || authLS.name ? token.length || tokenLS.length ? ( 
                <Navigate to="/userlogged" replace={true} />
            ) : (
                <Navigate to="/adminlogged" replace={true} />
            ) : (
                <main className="contenedor">
                    <form 
                        className={styles.form}
                        onSubmit={handleSubmit}
                    >
                        <fieldset className={styles.form_fieldset}>
                            <legend className={styles.form_legend}>Inicie Sesión para continuar</legend>

                            { msg && <Alert alert={alert} />}
                            { alertConection.msg && <AlertApi alertConection={alertConection} />}
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
                                    disabled={ loading || alertConection.msg ? true : false }  
                                />
                            </div>

                            { loading &&  (
                                <div className="flex mt-4 justify-center">
                                    <ClipLoader color="rgba(10, 148, 120, 1)" />
                                </div>
                            )}
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
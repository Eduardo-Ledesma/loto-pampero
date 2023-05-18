import styles from '../css/HeaderNav.module.css'

const NavLogin = () => {
    return (
        <nav className={styles.nav}>
            <a className={styles.nav_enlace} href="/">Crear Cuenta</a>
            <a className={styles.nav_enlace} href="/">Olvidé mi contraseña</a>
        </nav>
    )
}

export default NavLogin
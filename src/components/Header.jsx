import styles from '../css/HeaderNav.module.css'

const Header = () => {
    return (
        <header className="contenedor text-center">           
            <h1 className="mt-28 text-8xl mb-8 font-bold">Loto Club Atlético Pampero</h1>
            <img className={styles.borderImg} src="../img/cap.jpg" alt="Escudo club pampero"/>
        </header>
    )
}

export default Header
import styles from '../css/HeaderNav.module.css'

const Footer = () => {
    return (
    <footer className={`${styles.contenedor} ${styles.footer}`}>
            <div className={styles.icons}>
                <a href="https://www.facebook.com/clubatleticopampero" target="_blank" rel='noreferrer'>
                    <img src="../src/img/facebook.svg" alt="Icono Facebook"/>
                </a>
                <a href="https://www.instagram.com/clubpamperoguatrache.lp/" target="_blank" rel='noreferrer'>
                    <img src="../src/img/instagram.svg" alt="Icono Instagram"/>
                </a>
                <a href="https://twitter.com/CAPamperoOK" target="_blank" rel='noreferrer'>
                    <img src="../src/img/twitter.svg" alt="Icono Twitter"/>
                </a>
            </div>
    </footer>
    )
}

export default Footer
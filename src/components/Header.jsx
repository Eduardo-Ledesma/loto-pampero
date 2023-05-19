import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header className="contenedor text-center">           
            <h1 className="mt-28 text-8xl mb-8 font-bold">Loto Club Atlético Pampero</h1>
            <Link to="/">
                <img className="w-60 rounded-full my-0 mx-auto" src="../src/img/cap.jpg" alt="Escudo club pampero"/>
            </Link>
        </header>
    )
}

export default Header
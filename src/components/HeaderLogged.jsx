import { Link } from "react-router-dom"

const HeaderLogged = () => {
    return (
        <header 
            className="lg:mx-20 pt-14 pb-32 flex flex-col gap-8 justify-between
            items-center lg:flex-row"
        >      
            
            <h1 className="text-8xl font-bold order-1 lg:order-2 text-center">Loto Club Atlético Pampero</h1>
            <Link to="/userlogged">
                <img className="w-60 rounded-full order-1" src="../src/img/cap.jpg" alt="Escudo club pampero"/>
            </Link>     
        </header>
    )
}

export default HeaderLogged
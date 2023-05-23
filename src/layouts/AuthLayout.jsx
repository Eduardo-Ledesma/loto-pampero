import Header from "../components/Header"
import Footer from '../components/Footer'
import { Outlet } from "react-router-dom"
import '../css/globals.css'

// Vista general antes de iniciar sesión
const AuthLayout = () => {
    return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
    )
}

export default AuthLayout
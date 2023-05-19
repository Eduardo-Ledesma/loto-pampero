import Header from "../components/Header"
import Footer from '../components/Footer'
import { Outlet } from "react-router-dom"
import '../css/globals.css'

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
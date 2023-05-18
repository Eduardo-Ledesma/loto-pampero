import Header from "./Header"
import { Outlet } from "react-router-dom"
import '../css/globals.css'

function Layout() {
    return (
    <>
        <Header />

        <Outlet />
    </>
    )
}

export default Layout
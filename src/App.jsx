import Header from "./components/Header"
import Form from "./components/Form"
import NavLogin from "./components/NavLogin"
import './css/globals.css'

function App() {
  return (
    <>
      <Header />

      <main className="contenedor">
          <Form />
          <NavLogin />

          
          {/* <div className="icons">
              <a href="https://www.facebook.com/clubatleticopampero" target="_blank" rel='noreferrer'>
                  <img src="img/facebook.svg" alt="Icono Facebook"/>
              </a>
              <a href="https://www.instagram.com/clubpamperoguatrache.lp/" target="_blank" rel='noreferrer'>
                  <img src="img/instagram.svg" alt="Icono Instagram"/>
              </a>
              <a href="https://twitter.com/CAPamperoOK" target="_blank" rel='noreferrer'>
                  <img src="img/twitter.svg" alt="Icono Twitter"/>
              </a>
          </div> */}
      </main>
    </>
  )
}

export default App

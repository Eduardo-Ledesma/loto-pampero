import stylesForm from '../css/Form.module.css'

const NewUser = () => {
    return (
        <main className="contenedor">

            <form className={stylesForm.form}>
                <legend className={stylesForm.form_legend}>Introduce tu nueva contraseña</legend>
                    <div className='flex justify-center my-12'>
                        <input className={stylesForm.input_reset} type="password" name="password" id="password1" placeholder="Contraseña Nueva"/>
                    </div>
                    <div className='flex justify-center'>
                        <input className={stylesForm.input_reset} type="password" name="password" id="password2" placeholder="Repite la Contraseña"/>
                    </div>
                    <div className={stylesForm.form_btn}>
                        <input className={stylesForm.loginBtn} type="submit" value="Establecer contraseña"/>
                    </div>
            </form>
        </main>
    )
}

export default NewUser
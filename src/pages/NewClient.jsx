import { useNavigate, Form, useActionData, redirect } from "react-router-dom"
import FormNewClient from "../components/FormNewClient"
import Error from "../components/Error"
import { addClient } from "../api/clients"

export async function action({request}) {

    const formData = await request.formData()
    const data = Object.fromEntries(formData)

    // Validate
    const fullName = formData.get('fullName')
    const error = []
    if(Object.values(data).includes('') || !fullName.trim()) {
        error.push('Todos los campos son obligatorios');
        return error
    }
    await addClient(data)

    
    return redirect('/userlogged')
}

const NewClient = () => {

    const navigate = useNavigate()
    const error = useActionData()

    return (
    <>
        <h2 className="mt-10 md:mt-0 mb-20 text-6xl font-black underline text-center lg:text-left">Nuevo cliente</h2>

        <div className="flex justify-center md:justify-end">
            <button
                type="button"
                className="bg-blue-800 font-bold px-4 py-1 mb-20 rounded-lg uppercase transition-colors hover:bg-blue-700"
                onClick={() => navigate(-1)}
            >
                Volver
            </button>
        </div>

        <div className="bg-indigo-700 rounded-lg lg:w-full 2xl:w-2/4 mx-auto px-5 py-10 bg-opacity-70 mb-20">

            {error?.length && error.map((err, i ) => <Error key={i}>{err}</Error> )}
            <Form
                method="POST"
            >
            <legend className="text-center mb-20 text-5xl font-bold">Completa los siguientes campos</legend>
                <FormNewClient />
            
            <input type="submit"  value="Cargar Nuevo Cliente"
                    className="uppercase bg-stone-800 font-bold rounded-lg px-4 py-2 mt-20 
                    hover:cursor-pointer hover:bg-stone-700 transition-colors w-full lg:w-3/4 lg:block mx-auto"
            />
            </Form>
        </div>
    </>
    )
}

export default NewClient
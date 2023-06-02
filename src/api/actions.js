const urlAPI = import.meta.env.VITE_API_LOTO

export async function loginAction(data) {
    try {
        const response = await fetch(`${urlAPI}/users/login`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const result = await response.json()
        return result
    } catch (error) {
        console.error(error);
    }
}


// Mostrar los clientes del vendedor
export async function showClientsPosta(token) {
    const response = await fetch(`${urlAPI}/clients`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
    const clients = await response.json()
    return clients
}
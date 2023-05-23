const url = import.meta.env.VITE_API_URL

// Mostrar los clientes del vendedor
export async function showClients() {
    const response = await fetch(url)
    const clients = await response.json()
    return clients
}

// Agregar clientes nuevos
export async function addClient(data) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        await response.json()
    } catch (error) {
        console.log(error);
    }
}

// Obtener un cliente en específico para editarlo
export async function getClient(id) {
    const response = await fetch(`${url}/${id}`)
    const clients = await response.json()
    return clients
}

// Confirmar editar cliente
export async function editClient(id, data) {
    try {
        const response = await fetch(`${url}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        await response.json()
    } catch (error) {
        console.log(error);
    }
}
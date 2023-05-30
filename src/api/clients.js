const urlClients = import.meta.env.VITE_API_URL
const urlLottery = import.meta.env.VITE_API_URL2

// Mostrar los clientes del vendedor
export async function showClients() {
    const response = await fetch(urlClients)
    const clients = await response.json()
    return clients
}

// Agregar clientes nuevos
export async function addClient(data) {
    try {
        const response = await fetch(urlClients, {
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
    const response = await fetch(`${urlClients}/${id}`)
    const clients = await response.json()
    return clients
}

// Confirmar editar cliente
export async function editClient(id, data) {
    try {
        const response = await fetch(`${urlClients}/${id}`, {
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

// Eliminar cliente
export async function deleteClient(id) {
    try {
        const response = await fetch(`${urlClients}/${id}`, {
            method: 'DELETE'            
        })
        await response.json()
    } catch (error) {
        console.log(error);
    }
}


///// LOTOS /////

// Mostrar loto semanal del cliente
export async function showLottery() {
    const response = await fetch(urlLottery)
    const lottery = await response.json()
    return lottery
}

// Agregar lotos nuevos
export async function addLottery(data) {
    try {
        const response = await fetch(urlLottery, {
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

// Obtener un loto en específico para editarlo
export async function getLottery(id) {
    const response = await fetch(`${urlLottery}/${id}`)
    const lottery = await response.json()
    return lottery
}

// Confirmar editar loto
export async function editLottery(id, data) {
    try {
        const response = await fetch(`${urlLottery}/${id}`, {
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

// Eliminar loto
export async function deleteLottery(id) {
    try {
        const response = await fetch(`${urlLottery}/${id}`, {
            method: 'DELETE'            
        })
        await response.json()
    } catch (error) {
        console.log(error);
    }
}
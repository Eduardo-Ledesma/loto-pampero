
export async function getClients() {

    const url = import.meta.env.VITE_API_URL
    const result = await fetch(url)
    const clients = await result.json()
    return clients
}
const API_URL = "http://localhost:5555"

export async function getHello() {
    const response = await fetch(`${API_URL}/api/hello`)

    if(!response.ok) {
        throw new Error("Erro ao acessar o backend")
    }

    return response.json()
}
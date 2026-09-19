import { useEffect, useState } from "react"
import { getHello } from "../services/api"

function HomePage() {
    const [message, setMessage] = useState("Carregando...")

    useEffect(() => {
        getHello()
            .then((data) => {
                setMessage(data.message)
            })
            .catch(() => {
                setMessage("Erro ao conectar com o backend")
            })
    }, [])

    return (
        <main>
            <section>
                <h1>Aprenda espanhol com o HablaPlus</h1>

                <p>
                    Encontre cursos de espanhol e aprenda no seu ritmo,
                    com professores e conteúdos preparados para você.
                </p>

                <button type="button">
                    Conheça nossos cursos
                </button>

                <p>{message}</p>
            </section>
        </main>
    )
}

export default HomePage
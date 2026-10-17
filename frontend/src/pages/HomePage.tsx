import { useEffect, useState } from "react"
import { getHello } from "../services/api"

import { ThemeProvider, createTheme} from "@mui/material/styles"

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
       
    )
}

export default HomePage
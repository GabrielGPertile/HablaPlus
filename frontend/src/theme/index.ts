
import { createTheme } from "@mui/material/styles";

// Cria o tema global da aplicação.
const theme = createTheme({
    palette: {
        // Define o tema como claro.
        mode: "light",

        // Cor principal: ações e destaques importantes.
        primary: {
            main: "#CB070C",
        },

        // Cor secundária: detalhes e destaques complementares.
        secondary: {
            main: "#F9BD0B",
        },

        // Cores de fundo da aplicação e das superfícies.
        background: {
            default: "#FAFAED",
            paper: "#FAFAED",
        },

        // Cores dos textos principais e secundários.
        text: {
            primary: "#0D0D0B",
            secondary: "#44443F",
        },
    },

    // Define a fonte padrão dos componentes do MUI.
    typography: {
        fontFamily: "'Inter', sans-serif",
    },
});

// Permite importar esse tema em outros arquivos.
export default theme;
import { Box, Typography } from "@mui/material";

import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import PublicIcon from "@mui/icons-material/Public";
import DevicesIcon from "@mui/icons-material/Devices";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";

import Header from "../components/Header"

function HomePage() {
    return (
       <>
        <Header />

         <Box
                component="main"
                id="inicio"
                sx={{
                    width: "100%",
                    px: { xs: 2, md: 5, lg: 8 },
                    py: 4,
                }}
            >
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "1fr",
                            sm: "repeat(2, 1fr)",
                        },
                        gap: 3,
                    }}
                >
                    <Box
                        component="img"
                        src="/homeImagem1.png"
                        alt="HomeImagem 1"
                        sx={{
                            width: "100%",
                            height: 280,
                            objectFit: "cover",
                            borderRadius: 3,
                        }}
                    />

                    <Box
                        component="img"
                        src="/homeImagem2.png"
                        alt="HomeImagem 2"
                        sx={{
                            width: "100%",
                            height: 280,
                            objectFit: "cover",
                            borderRadius: 3,
                        }}
                    />

                    <Box
                        component="img"
                        src="/homeImagem3.png"
                        alt="HomeImagem 3"
                        sx={{
                            width: "100%",
                            height: 280,
                            objectFit: "cover",
                            borderRadius: 3,
                        }}
                    />

                    <Box
                        component="img"
                        src="/homeImagem4.png"
                        alt="HomeImagem 4"
                        sx={{
                            width: "100%",
                            height: 280,
                            objectFit: "cover",
                            borderRadius: 3,
                        }}
                    />
                </Box>

                <Box
                    sx={{
                        maxWidth: 850,
                        mx: "auto",
                        mt: 6,
                        textAlign: "center",
                    }}
                >
                    <Typography
                        variant="h3"
                        component="h1"
                        sx={{
                            fontWeight: 700,
                            color: "#0D0D0B",
                            mb: 2,
                            fontSize: {
                                xs: "2rem",
                                md: "2.75rem",
                            },
                        }}
                    >
                        Espanhol Genial
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            color: "#555",
                            fontSize: {
                                xs: "1rem",
                                md: "1.15rem",
                            },
                            lineHeight: 1.8,
                        }}
                    >
                        Aprender espanhol pode ser simples, divertido e
                        cheio de novas possibilidades! O Espanhol Genial
                        é um projeto criado para ajudar você a desenvolver
                        suas habilidades no idioma, explorando temas como
                        viagens, cultura, culinária e situações do dia a
                        dia. Descubra novas palavras, amplie seus
                        conhecimentos e aprenda espanhol no seu ritmo!
                    </Typography>
                </Box>
        
                <Box
                    component="section"
                    sx={{
                        mt: 8,
                        mb: 4,
                    }}
                >
                    <Typography
                        component="h2"
                        variant="h4"
                        sx={{
                            textAlign: "center",
                            fontWeight: 700,
                            color: "#0D0D0B",
                            mb: 5,
                            fontSize: {
                                xs: "1.7rem",
                                md: "2.25rem",
                            },
                        }}
                    >
                        Vantagens de estudar com o Espanhol Genial
                    </Typography>

                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: {
                                xs: "repeat(2, 1fr)",
                                sm: "repeat(3, 1fr)",
                                lg: "repeat(6, 1fr)",
                            },
                            gap: 4,
                        }}
                    >
                        {[
                            {
                                image: "benefits/benef_1.png",
                                title: "Aprendizado leve",
                                description:
                                    "Aprenda espanhol de forma leve, divertida e no seu ritmo.",
                            },
                            {
                                image: "benefits/benef_2.png",
                                title: "Cultura e Viagens",
                                description:
                                    "Explore novas culturas e prepare-se para conhecer o mundo.",
                            },
                            {
                                image: "benefits/benef_3.png",
                                title: "Estude onde quiser",
                                description:
                                    "Acesse seus estudos de onde estiver e aproveite seu tempo.",
                            },
                            {
                                image: "benefits/benef_4.png",
                                title: "Método Simples",
                                description:
                                    "Aprenda com conteúdos claros, práticos e fáceis de entender.",
                            },
                            {
                                image: "benefits/benef_5.png",
                                title: "Situações Reais",
                                description:
                                    "Conheça expressões e diálogos usados no dia a dia.",
                            },
                            {
                                image: "benefits/benef_6.png",
                                title: "Ganhe confiança",
                                description:
                                    "Desenvolva sua segurança para falar e compreender espanhol.",
                            },
                        ].map((item) => (
                            <Box
                                key={item.title}
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    textAlign: "center",
                                    gap: 1.5,
                                    p: 2,
                                    color: "#0D0D0B",
                                }}
                            >
                                <Box
                                    sx={{
                                        color: "#CB070C",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        mb: 1,
                                    }}
                                >
                                    {item.image ? (
                                        <Box
                                            component="img"
                                            src={item.image}
                                            alt={item.title}
                                            sx={{
                                                width: 150,
                                                height: 150,
                                                objectFit: "contain",
                                            }}
                                        />
                                    ) : (
                                        item.icon
                                    )}
                                </Box>

                                <Typography
                                    component="h3"
                                    variant="h6"
                                    sx={{
                                        fontWeight: 700,
                                        fontSize: "1rem",
                                    }}
                                >
                                    {item.title}
                                </Typography>

                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: "#555",
                                        lineHeight: 1.7,
                                    }}
                                >
                                    {item.description}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
       </>
    )
}

export default HomePage
import { Box, Typography, Button } from "@mui/material";

import { Accordion, AccordionSummary, AccordionDetails, } from "@mui/material";

import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";

import Header from "../components/Header"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function HomePage() {
    const courses = [
        {
            image: "/courses/course1.png",
            title: "Espanhol Básico",
            level: "Iniciante",
            modules: 10,
            certificate: true,
            description:
                "Aprenda os fundamentos do espanhol e dê seus primeiros passos no idioma.",
        },
        {
            image: "/courses/course2.png",
            title: "Espanhol para Viagens",
            level: "Intermediário",
            modules: 8,
            certificate: true,
            description:
                "Prepare-se para viajar, conhecer novas culturas e se comunicar em diferentes situações.",
        },
        {
            image: "/courses/course3.png",
            title: "Espanhol Avançado",
            level: "Avançado",
            modules: 12,
            certificate: true,
            description:
                "Aprimore sua comunicação, amplie seu vocabulário e desenvolva sua conversação.",
        },
    ];

    const faqs = [
        {
            question: "O que é o Espanhol Genial?",
            answer:
                "O Espanhol Genial é um projeto dedicado ao ensino da língua espanhola, com conteúdos voltados para tornar o aprendizado mais simples, prático e interessante.",
        },
        {
            question: "Preciso saber espanhol para começar?",
            answer:
                "Não! Temos o curso de Espanhol Básico, indicado para quem deseja aprender os fundamentos do idioma e dar os primeiros passos.",
        },
        {
            question: "Quais cursos estão disponíveis?",
            answer:
                "Atualmente, apresentamos opções de Espanhol Básico, Espanhol para Viagens e Espanhol Avançado. Cada curso é direcionado a diferentes níveis de conhecimento.",
        },
        {
            question: "Os cursos oferecem certificado?",
            answer:
                "Os cursos apresentados na plataforma possuem indicação de certificado. As informações sobre emissão e conclusão serão apresentadas nos detalhes de cada curso.",
        },
        {
            question: "Como faço para escolher meu curso?",
            answer:
                "Você pode conhecer as opções disponíveis na seção de cursos e escolher aquela que melhor corresponde ao seu nível de conhecimento e aos seus objetivos.",
        },
    ];

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

                    <Box
                        component="section"
                        sx={{
                            backgroundColor: "#F5EEDB",
                            borderRadius: 4,
                            py: { xs: 5, md: 7 },
                            px: { xs: 3, md: 6 },
                            mt: 8,
                            textAlign: "center",
                        }}
                    >
                        <Typography
                            sx={{
                                color: "#CB070C",
                                fontWeight: 700,
                                fontSize: "0.9rem",
                                letterSpacing: 2,
                                mb: 2,
                            }}
                        >
                            SUA JORNADA COMEÇA AQUI
                        </Typography>

                        <Typography
                            component="h2"
                            variant="h3"
                            sx={{
                                color: "#0D0D0B",
                                fontWeight: 700,
                                mb: 3,
                                fontSize: {
                                    xs: "1.8rem",
                                    md: "2.5rem",
                                },
                            }}
                        >
                            O espanhol está mais perto do que você imagina!
                        </Typography>

                        <Typography
                            sx={{
                                color: "#555",
                                fontSize: {
                                    xs: "1rem",
                                    md: "1.15rem",
                                },
                                lineHeight: 1.8,
                                maxWidth: 750,
                                mx: "auto",
                            }}
                        >
                            Descubra um novo idioma, explore culturas e prepare-se para
                            novas experiências. Aprenda espanhol com o Espanhol Genial!
                        </Typography>

                        <Button
                            variant="contained"
                            sx={{
                                mt: 3,
                                backgroundColor: "#CB070C",
                                color: "#FFFFFF",
                                fontWeight: 700,
                                fontSize: "1rem",
                                px: 4,
                                py: 1.5,
                                borderRadius: 2,
                                textTransform: "none",
                                "&:hover": {
                                    backgroundColor: "#A80509",
                                },
                            }}
                        >
                            Criar minha conta
                        </Button>
                    </Box>

                    <Box
                        component="section"
                        id="cursos"
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
                                mb: 2,
                            }}
                        >
                            Conheça nossos cursos
                        </Typography>

                        <Typography
                            sx={{
                                textAlign: "center",
                                color: "#555",
                                mb: 5,
                            }}
                        >
                            Encontre o curso ideal para começar sua jornada no espanhol!
                        </Typography>

                        <Box
                            sx={{
                                display: "grid",
                                gridTemplateColumns: {
                                    xs: "1fr",
                                    sm: "repeat(2, 1fr)",
                                    md: "repeat(3, 1fr)",
                                },
                                gap: 3,
                            }}
                        >
                            {courses.map((course) => (
                                <Box
                                    key={course.title}
                                    sx={{
                                        backgroundColor: "#FAFAED",
                                        border: "1px solid #E5DCC9",
                                        borderRadius: 3,
                                        overflow: "hidden",
                                        transition: "0.3s",
                                        "&:hover": {
                                            transform: "translateY(-5px)",
                                            boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
                                        },
                                    }}
                                >
                                    {/* Imagem e identificações do curso */}
                                    <Box
                                        sx={{
                                            position: "relative",
                                            width: "100%",
                                            height: 200,
                                        }}
                                    >
                                        <Box
                                            component="img"
                                            src={course.image}
                                            alt={course.title}
                                            sx={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover",
                                            }}
                                        />

                                        {/* Selo de certificado */}
                                        {course.certificate && (
                                            <Box
                                                sx={{
                                                    position: "absolute",
                                                    top: 12,
                                                    left: 12,
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: 0.7,
                                                    backgroundColor: "#F9BD0B",
                                                    color: "#0D0D0B",
                                                    px: 1.5,
                                                    py: 0.8,
                                                    borderRadius: 2,
                                                    fontWeight: 700,
                                                    fontSize: "0.75rem",
                                                    boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
                                                }}
                                            >
                                                <EmojiEventsOutlinedIcon fontSize="small" />
                                                Certificado
                                            </Box>
                                        )}

                                        {/* Quantidade de módulos */}
                                        <Box
                                            sx={{
                                                position: "absolute",
                                                bottom: 12,
                                                left: 12,
                                                backgroundColor: "rgba(13,13,11,0.85)",
                                                color: "#FFFFFF",
                                                px: 1.5,
                                                py: 0.8,
                                                borderRadius: 2,
                                                fontSize: "0.8rem",
                                                fontWeight: 600,
                                            }}
                                        >
                                            {course.modules} módulos
                                        </Box>
                                    </Box>

                                    {/* Informações do curso */}
                                    <Box sx={{ p: 3 }}>
                                        <Typography
                                            sx={{
                                                color: "#CB070C",
                                                fontWeight: 700,
                                                fontSize: "0.8rem",
                                                mb: 1,
                                            }}
                                        >
                                            {course.level}
                                        </Typography>

                                        <Typography
                                            component="h3"
                                            variant="h6"
                                            sx={{
                                                fontWeight: 700,
                                                color: "#0D0D0B",
                                                mb: 1.5,
                                            }}
                                        >
                                            {course.title}
                                        </Typography>

                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: "#555",
                                                lineHeight: 1.7,
                                                minHeight: 65,
                                            }}
                                        >
                                            {course.description}
                                        </Typography>

                                        <Button
                                            variant="contained"
                                            fullWidth
                                            sx={{
                                                mt: 3,
                                                backgroundColor: "#CB070C",
                                                color: "#FFFFFF",
                                                fontWeight: 700,
                                                textTransform: "none",
                                                borderRadius: 2,
                                                py: 1.2,
                                                "&:hover": {
                                                    backgroundColor: "#A80509",
                                                },
                                            }}
                                        >
                                            Conhecer curso
                                        </Button>
                                    </Box>
                                </Box>
                            ))}
                        </Box>

                        {/* Seção Quem Somos */}
                        <Box
                            component="section"
                            id="quem-somos"
                            sx={{
                                mt: 10,
                                mb: 6,
                                display: "grid",
                                gridTemplateColumns: {
                                    xs: "1fr",
                                    md: "1fr 1fr",
                                },
                                alignItems: "center",
                                gap: { xs: 4, md: 7 },
                                backgroundColor: "#F5EEDB",
                                borderRadius: 4,
                                p: { xs: 3, md: 5 },
                            }}
                        >
                            {/* Texto de apresentação */}
                            <Box>
                                <Typography
                                    sx={{
                                        color: "#CB070C",
                                        fontWeight: 700,
                                        fontSize: "0.9rem",
                                        letterSpacing: 2,
                                        mb: 2,
                                    }}
                                >
                                    QUEM SOMOS
                                </Typography>

                                <Typography
                                    component="h2"
                                    variant="h3"
                                    sx={{
                                        color: "#0D0D0B",
                                        fontWeight: 700,
                                        mb: 3,
                                        fontSize: {
                                            xs: "1.8rem",
                                            md: "2.4rem",
                                        },
                                    }}
                                >
                                    Muito mais que aprender um novo idioma!
                                </Typography>

                                <Typography
                                    sx={{
                                        color: "#555",
                                        lineHeight: 1.9,
                                        textAlign: "justify",
                                        mb: 2,
                                    }}
                                >
                                    O Espanhol Genial é um projeto dedicado ao ensino
                                    da língua espanhola, criado para tornar o aprendizado
                                    mais simples, acessível e interessante.
                                </Typography>

                                <Typography
                                    sx={{
                                        color: "#555",
                                        lineHeight: 1.9,
                                        textAlign: "justify",
                                        mb: 2,
                                    }}
                                >
                                    Acreditamos que aprender um novo idioma vai muito
                                    além de conhecer palavras e regras gramaticais.
                                    É também descobrir culturas, explorar novos lugares,
                                    conhecer pessoas e abrir portas para novas oportunidades.
                                </Typography>

                                <Typography
                                    sx={{
                                        color: "#555",
                                        lineHeight: 1.9,
                                        textAlign: "justify",
                                    }}
                                >
                                    Por isso, buscamos oferecer conteúdos que aproximem
                                    o espanhol do cotidiano, com temas práticos,
                                    explicações claras e uma experiência de aprendizado
                                    que respeita o ritmo de cada pessoa.
                                </Typography>
                            </Box>

                            {/* Imagem ilustrativa */}
                            <Box
                                component="img"
                                src="/homeImagem3.png"
                                alt="Aprendizado da língua espanhola"
                                sx={{
                                    width: "100%",
                                    height: {
                                        xs: 250,
                                        md: 420,
                                    },
                                    objectFit: "cover",
                                    borderRadius: 3,
                                }}
                            />
                        </Box>

                        {/* Missão e propósito */}
                        <Box
                            component="section"
                            sx={{
                                mt: 6,
                                mb: 4,
                                display: "grid",
                                gridTemplateColumns: {
                                    xs: "1fr",
                                    sm: "repeat(2, 1fr)",
                                },
                                gap: 3,
                            }}
                        >
                            <Box
                                sx={{
                                    p: 4,
                                    border: "1px solid #E5DCC9",
                                    borderRadius: 3,
                                    textAlign: "center",
                                }}
                            >
                                <Typography
                                    component="h3"
                                    variant="h5"
                                    sx={{
                                        color: "#CB070C",
                                        fontWeight: 700,
                                        mb: 2,
                                    }}
                                >
                                    Nossa missão
                                </Typography>

                                <Typography
                                    sx={{
                                        color: "#555",
                                        lineHeight: 1.8,
                                        textAlign: "justify",
                                    }}
                                >
                                    Tornar o aprendizado do espanhol uma experiência
                                    acessível, dinâmica e enriquecedora, incentivando
                                    cada estudante a desenvolver suas habilidades e
                                    conquistar novas possibilidades por meio do idioma.
                                </Typography>
                            </Box>

                            <Box
                                sx={{
                                    p: 4,
                                    border: "1px solid #E5DCC9",
                                    borderRadius: 3,
                                    textAlign: "center",
                                }}
                            >
                                <Typography
                                    component="h3"
                                    variant="h5"
                                    sx={{
                                        color: "#CB070C",
                                        fontWeight: 700,
                                        mb: 2,
                                    }}
                                >
                                    Nosso propósito
                                </Typography>

                                <Typography
                                    sx={{
                                        color: "#555",
                                        lineHeight: 1.8,
                                        textAlign: "justify",
                                    }}
                                >
                                    Inspirar pessoas a descobrirem o mundo da língua
                                    espanhola, construindo conhecimento, confiança e
                                    autonomia a cada nova etapa do aprendizado.
                                </Typography>
                            </Box>
                        </Box>


                        {/* Seção Perguntas Frequentes */}
                        <Box
                            component="section"
                            id="faq"
                            sx={{
                                mt: 10,
                                mb: 8,
                                maxWidth: 950,
                                mx: "auto",
                            }}
                        >
                            <Typography
                                sx={{
                                    color: "#CB070C",
                                    fontWeight: 700,
                                    fontSize: "0.9rem",
                                    letterSpacing: 2,
                                    textAlign: "center",
                                    mb: 2,
                                }}
                            >
                                FAQ
                            </Typography>

                            <Typography
                                component="h2"
                                variant="h3"
                                sx={{
                                    textAlign: "center",
                                    color: "#0D0D0B",
                                    fontWeight: 700,
                                    fontSize: {
                                        xs: "1.8rem",
                                        md: "2.4rem",
                                    },
                                    mb: 2,
                                }}
                            >
                                Perguntas frequentes
                            </Typography>

                            <Typography
                                sx={{
                                    textAlign: "center",
                                    color: "#555",
                                    lineHeight: 1.8,
                                    mb: 5,
                                }}
                            >
                                Tire suas dúvidas e descubra mais sobre o Espanhol Genial!
                            </Typography>

                            <Box>
                                {faqs.map((faq, index) => (
                                    <Accordion
                                        key={index}
                                        disableGutters
                                        elevation={0}
                                        sx={{
                                            mb: 2,
                                            border: "1px solid #E5DCC9",
                                            borderRadius: "12px !important",
                                            overflow: "hidden",
                                            backgroundColor: "#FAFAED",
                                            "&:before": {
                                                display: "none",
                                            },
                                            "&.Mui-expanded": {
                                                margin: "0 0 16px 0",
                                            },
                                        }}
                                    >
                                        <AccordionSummary
                                            expandIcon={
                                                <ExpandMoreIcon sx={{ color: "#CB070C" }} />
                                            }
                                            sx={{
                                                px: { xs: 2, md: 3 },
                                                py: 1,
                                                minHeight: 65,
                                                "& .MuiAccordionSummary-content": {
                                                    my: 1.5,
                                                },
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    fontWeight: 700,
                                                    color: "#0D0D0B",
                                                    fontSize: {
                                                        xs: "0.95rem",
                                                        md: "1.05rem",
                                                    },
                                                }}
                                            >
                                                {faq.question}
                                            </Typography>
                                        </AccordionSummary>

                                        <AccordionDetails
                                            sx={{
                                                px: { xs: 2, md: 3 },
                                                pb: 3,
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    color: "#555",
                                                    lineHeight: 1.8,
                                                    textAlign: "justify",
                                                }}
                                            >
                                                {faq.answer}
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                ))}
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default HomePage
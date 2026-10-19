import { AppBar, Toolbar, Box, Button } from "@mui/material";

const linkStyle = {
    color: "#0D0D0B",
    textTransform: "none",
    fontWeight: 500,
    fontSize: "0.95rem",
    px: 1.5,
    "&:hover": {
        color: "#CB070C",
        backgroundColor: "transparent",
    },
};

function Header() {
    return (
        <AppBar
            position="static"
            elevation={0}
            sx={{
                backgroundColor: "#F5EEDB",
                color: "#0D0D0B",
                borderBottom: "1px solid #E5DCC9",
            }}
        >
            <Toolbar
                sx={{
                    minHeight: "112px !important",
                    justifyContent: "space-between",
                    px: { xs: 2, md: 5, lg: 8 },
                    gap: 3,
                }}
            >
                {/* Logo */}
                <Box
                    component="img"
                    src="/logo.jpeg"
                    alt="Logo HablaPlus"
                    sx={{
                        width: 100,
                        height: 100,
                        objectFit: "contain",
                        flexShrink: 0,
                    }}
                />

                {/* Navegação */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 1,
                    }}
                >
                    <Button sx={linkStyle}>
                        Quem somos
                    </Button>

                    <Button sx={linkStyle}>
                        Cursos
                    </Button>

                    <Button sx={linkStyle}>
                        Como funciona
                    </Button>

                    {/* Ação principal */}
                    <Button
                        variant="contained"
                        sx={{
                            ml: 2,
                            px: 3,
                            py: 1.2,
                            borderRadius: "8px",
                            backgroundColor: "#CB070C",
                            color: "#FFFFFF",
                            textTransform: "none",
                            fontWeight: 600,
                            boxShadow: "none",
                            "&:hover": {
                                backgroundColor: "#A9060A",
                                boxShadow: "none",
                            },
                        }}
                    >
                        Entrar
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
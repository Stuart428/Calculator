import React from "react";
import {
    Box,
    Button,
    createTheme,
    CssBaseline,
    Grid,
    OutlinedInput,
    ThemeProvider,
    Typography,
    useMediaQuery
} from "@mui/material";

declare const greet: (name: string) => string;

const App = () => {
    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode: prefersDarkMode ? "dark" : "light",
                },
            }),
        [prefersDarkMode]
    );

    const sayHello = () => {
        const name = (document.querySelector("#greet-input") as HTMLInputElement)?.value;
        document.querySelector("#greet-msg")!.textContent = greet(name);
    };

    const handleKeyPress = (event: React.KeyboardEvent) => {
        if (event.key === "Enter") {
            (document.querySelector("#greet-btn") as HTMLInputElement)?.click();
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Grid container direction="column" textAlign="center" style={{marginTop: 128}}>
                <Grid item>
                    <img src="/assets/logo.svg" alt="Molybden logo" style={{height: "128px"}}/>
                </Grid>
                <Grid item style={{margin: 27}}>
                    <Typography variant="h3" fontSize={"2.5rem"} fontWeight={"bold"}>
                        Welcome to Molybden!
                    </Typography>
                </Grid>
                <Grid item style={{margin: 16}}>
                    <Typography variant="body1">Please enter your name and click the button.</Typography>
                </Grid>
                <Grid item>
                    <Box display="flex" justifyContent="center" height={38}>
                        <OutlinedInput
                            id="greet-input"
                            placeholder="Your name"
                            sx={{
                                height: "100%",
                            }}
                        />
                        <Button
                            id="greet-btn"
                            variant="contained"
                            onClick={sayHello}
                            onKeyDown={handleKeyPress}
                            size="medium"
                            sx={{
                                height: "100%",
                                marginLeft: "8px",
                                textTransform: "none"
                            }}
                        >
                            Greet
                        </Button>
                    </Box>
                </Grid>
                <Grid item style={{marginTop: 16}}>
                    <Typography id="greet-msg"></Typography>
                </Grid>
                {window.navigator.userAgent.indexOf("Mac") !== -1 && (<div className="draggable"></div>)}
            </Grid>
        </ThemeProvider>
    );
};

export default App;

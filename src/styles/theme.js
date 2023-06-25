'use client';
import { createTheme } from "@mui/material";

// import { Poppins } from "next/font/google";

const theme = createTheme({
    palette: {
        gradient: 'linear-gradient(to bottom, #FFCD4B 0%, #ED5887 100%)',
        primary: {
            main: '#FFCD4B',
            mainGradient: 'linear-gradient(to bottom, #FFCD4B, #ED5887)',
        }
    },
    typography: {
        // fontFamily: 'Poppins, sans-serif',
        h1: { fontSize: '3.1875rem', fontWeight: 700 },
    },
})

export default theme;
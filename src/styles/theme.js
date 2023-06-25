'use client';
import { createTheme } from "@mui/material";

import { Poppins } from "next/font/google";

export const designColors = {
    white: '#FFFFFF',
    black: '#000000',
    grey: '#F8F8F8'
}

const theme = createTheme({
    palette: {
        gradient: 'linear-gradient(to bottom, #FFCD4B 0%, #ED5887 100%)',
        primary: {
            main: '#FFCD4B',
            mainGradient: 'linear-gradient(to bottom, #FFCD4B, #ED5887)',
        },
    },
    typography: {
        fontFamily: 'Poppins, sans-serif',
        h1: { fontSize: '2.5rem', fontWeight: 700, lineHeight: '130%' },
        h2: { fontSize: '2rem', fontWeight: 700 },
        h3: { fontSize: '1.5rem', fontWeight: 400 },
        body1: { fontSize: '1rem',}
    },
    breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 960,
          lg: 1280,
          xl: 1920,
        },
      },
})

export default theme;
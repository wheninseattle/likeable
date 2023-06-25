'use client'
import { useState } from 'react';
import { Box, Container, ThemeProvider } from '@mui/material'
import theme from '@/styles/theme'
import { Button, Stack, Typography } from '@mui/material'
import IconBackgroundIcons from '@/components/icons/IconBackgroundIcons'

import IconStart from '@/components/icons/IconStart'
import IconHeart from '@/components/icons/IconHeart';


export default function Home() {

  const [fadeIn, setFadeIn] = useState(false)

  setTimeout(() => { setFadeIn(true) }, 2500);

  return (
    <ThemeProvider theme={theme} >
      <Container maxWidth="sm" sx={{ position: 'relative', height: '100vh', background: theme.palette.primary.mainGradient, display:'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
        {!fadeIn ?
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <IconHeart />
            <Typography variant="h1" gutterBottom sx={{ color: 'white' }}>Likeable</Typography>
            <Typography variant="body1" gutterBottom sx={{ color: 'white' }}>Swiping right on great design</Typography>
          </Box>
          :
          (
            <>
              <Box sx={{ position: 'absolute', top: '45%', right: 0 }} >
                <Button href='/swipe' sx={{ padding: 0 }}>
                  <IconStart />
                </Button>
              </Box>
              <Box sx={{ position: 'absolute' }} >
                <IconBackgroundIcons />
              </Box>
              <Typography variant="h1" gutterBottom sx={{ position: 'absolute', color: 'white', marginX: 4, top:'15%', zIndex: 2 }}>Find what you like, begin with a swipe</Typography>
            </>
          )
        }
      </Container>
    </ThemeProvider>
  )
}
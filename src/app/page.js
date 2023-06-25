'use client'
import { Box, Container, ThemeProvider } from '@mui/material'
import theme from '@/styles/theme'
import { Button, Stack, Typography } from '@mui/material'
import IconBackgroundIcons from '@/components/icons/IconBackgroundIcons'

import IconStart from '@/components/icons/IconStart'

export default function Home() {
  return (
    <ThemeProvider theme={theme} >
      <Container maxWidth="sm" sx={{ position: 'relative', height: '100vh', background: theme.palette.primary.mainGradient, alignItems: 'center', overflow: 'hidden' }}>
        <Box sx={{ position: 'absolute', top: '45%', right: 0}} >
          <Button href='/swipe' sx={{padding: 0}}>
          <IconStart />
          </Button>
        </Box>
        <Box sx={{ position: 'absolute'}} >
          <IconBackgroundIcons />
        </Box>
        <Typography variant="h1" gutterBottom sx={{ position:'relative', color: 'white', marginX: 4, marginTop: 10, zIndex: 2 }}>Find what you like, begin with a swipe</Typography>
      </Container>
    </ThemeProvider>
  )
}
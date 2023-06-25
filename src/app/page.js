'use client'
import { ThemeProvider } from '@mui/material'
import theme from '@/styles/theme'
import styles from './page.module.css'
import { Button, Stack, Typography } from '@mui/material'
export default function Home() {
  return (
    <main className={styles.main}>
      <ThemeProvider theme={theme} >
        <div className={styles.center}>
          <Stack spacing={2} direction="column" sx={{ alignItems: 'center' }}>
            <h1>likeable</h1>
            <Typography variant="h2" gutterBottom>🏗️♥️</Typography>
            <Button variant="contained" color="primary" href='/swipe' >Start your design fling</Button>
          </Stack>
        </div>
      </ThemeProvider>
    </main>
  )
}

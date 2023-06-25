'use client'
import styles from './page.module.css'
import { Button, Stack, Typography } from '@mui/material'
import prisma from '@/lib/prisma'

export default async function Home() {
  return (
    <main className={styles.main}>

      <div className={styles.center}>
        <Stack spacing={2} direction="column" sx={{ alignItems: 'center' }}>
          <h1>likeable</h1>
          <Typography variant="h2" gutterBottom>🏗️♥️</Typography>
          <Button variant="contained" color="primary">Start your design fling</Button>
        </Stack>
      </div>


    </main>
  )
}

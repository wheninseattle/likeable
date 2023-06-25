import React from 'react'
import prisma from '@/lib/prisma'

const dashboard = async () => {
  const meshes = await prisma.mesh.findMany()
  console.log(meshes)
  return (
    <div>dashboard</div>
  )
}

export default dashboard
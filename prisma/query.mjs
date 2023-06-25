import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

const main = async () => {
    const meshes = await prisma.mesh.findMany()
    console.log(meshes[0])
}

main()

import { PrismaClient } from '@prisma/client';
import fs from 'fs/promises';

if (process.env.SEED_MODE !== 'seed') {
    const prisma = new PrismaClient()

    const main = async () => {
        const meshes = await prisma.mesh.findMany()

        for (let mesh of meshes) {
            const meshFileBuffer = await fs.readFile(`./data/mesh-files/${mesh.id}.obj`)
            const meshFileString = String(meshFileBuffer)
            const res = await prisma.mesh.update({
                where: {
                    id: mesh.id
                },
                data: {
                    data: meshFileString
                }
            })
            console.log(res)
        }
    }

    main()
}
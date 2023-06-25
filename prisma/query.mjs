import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

if (process.env.SEED_MODE !== 'seed') {
    const main = async () => {
        const meshes = await prisma.mesh.findMany()
    }
    
    main()
}

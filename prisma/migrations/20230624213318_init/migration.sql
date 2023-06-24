-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Mesh" (
    "id" SERIAL NOT NULL,
    "data" JSONB NOT NULL,
    "clusterId" INTEGER NOT NULL,

    CONSTRAINT "Mesh_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cluster" (
    "id" SERIAL NOT NULL,
    "rewardValue" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Cluster_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Mesh" ADD CONSTRAINT "Mesh_clusterId_fkey" FOREIGN KEY ("clusterId") REFERENCES "Cluster"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProjectMember" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "picture" TEXT NOT NULL,

    CONSTRAINT "ProjectMember_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ProjectToProjectMember" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ProjectToProjectMember_AB_unique" ON "_ProjectToProjectMember"("A", "B");

-- CreateIndex
CREATE INDEX "_ProjectToProjectMember_B_index" ON "_ProjectToProjectMember"("B");

-- AddForeignKey
ALTER TABLE "_ProjectToProjectMember" ADD CONSTRAINT "_ProjectToProjectMember_A_fkey" FOREIGN KEY ("A") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjectToProjectMember" ADD CONSTRAINT "_ProjectToProjectMember_B_fkey" FOREIGN KEY ("B") REFERENCES "ProjectMember"("id") ON DELETE CASCADE ON UPDATE CASCADE;

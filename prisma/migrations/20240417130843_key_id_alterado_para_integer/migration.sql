/*
  Warnings:

  - The primary key for the `tasks` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `code` on the `tasks` table. All the data in the column will be lost.
  - The `task_id` column on the `tasks` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[task_id]` on the table `tasks` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "tasks" DROP CONSTRAINT "tasks_pkey",
DROP COLUMN "code",
DROP COLUMN "task_id",
ADD COLUMN     "task_id" SERIAL NOT NULL,
ADD CONSTRAINT "tasks_pkey" PRIMARY KEY ("task_id");

-- CreateIndex
CREATE UNIQUE INDEX "tasks_task_id_key" ON "tasks"("task_id");

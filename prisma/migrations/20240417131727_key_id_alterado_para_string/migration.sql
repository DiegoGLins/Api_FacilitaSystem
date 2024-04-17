/*
  Warnings:

  - The primary key for the `tasks` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Changed the type of `task_id` on the `tasks` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "tasks" DROP CONSTRAINT "tasks_pkey",
ADD COLUMN     "code" SERIAL NOT NULL,
DROP COLUMN "task_id",
ADD COLUMN     "task_id" UUID NOT NULL,
ADD CONSTRAINT "tasks_pkey" PRIMARY KEY ("task_id");

-- CreateIndex
CREATE UNIQUE INDEX "tasks_task_id_key" ON "tasks"("task_id");

/*
  Warnings:

  - You are about to drop the `User_table` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User_table";

-- CreateTable
CREATE TABLE "user_table" (
    "Id" SERIAL NOT NULL,
    "FirstName" TEXT NOT NULL,
    "LastName" TEXT NOT NULL,
    "UserName" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Password" TEXT NOT NULL,

    CONSTRAINT "user_table_pkey" PRIMARY KEY ("Id")
);

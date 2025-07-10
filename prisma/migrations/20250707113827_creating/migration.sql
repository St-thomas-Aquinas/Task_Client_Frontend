-- CreateTable
CREATE TABLE "User_table" (
    "Id" SERIAL NOT NULL,
    "FirstName" TEXT NOT NULL,
    "LastName" TEXT NOT NULL,
    "UserName" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Password" TEXT NOT NULL,

    CONSTRAINT "User_table_pkey" PRIMARY KEY ("Id")
);

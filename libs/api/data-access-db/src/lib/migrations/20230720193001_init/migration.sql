-- CreateEnum
CREATE TYPE "City" AS ENUM ('Paris', 'NewYork', 'Istanbul', 'London', 'Madrid', 'Tokyo', 'Dubai', 'Blida', 'Wakanda', 'Gotham');

-- CreateTable
CREATE TABLE "Event" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "city" "City" NOT NULL,
    "description" TEXT,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

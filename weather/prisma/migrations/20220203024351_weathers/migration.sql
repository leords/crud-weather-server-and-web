-- CreateTable
CREATE TABLE "weathers" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "user" TEXT NOT NULL,
    "temperature" INTEGER NOT NULL,
    "moisture" INTEGER NOT NULL,
    "luminosity" INTEGER NOT NULL,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_weathers" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "user" TEXT NOT NULL,
    "temperature" TEXT NOT NULL,
    "moisture" TEXT NOT NULL,
    "luminosity" TEXT NOT NULL,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_weathers" ("date", "id", "luminosity", "moisture", "temperature", "user") SELECT "date", "id", "luminosity", "moisture", "temperature", "user" FROM "weathers";
DROP TABLE "weathers";
ALTER TABLE "new_weathers" RENAME TO "weathers";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateTable
CREATE TABLE "Podcast" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "audio_url" TEXT NOT NULL,
    "publication_date" DATETIME,
    "duration" INTEGER,
    "hosts" TEXT,
    "guests" TEXT
);

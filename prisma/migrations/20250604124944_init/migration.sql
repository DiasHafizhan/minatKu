-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CategoryResult" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CategoryResult_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CategoryResultItems" (
    "id" SERIAL NOT NULL,
    "nama_category" TEXT NOT NULL,
    "deskripsi_category" TEXT NOT NULL,
    "skor" INTEGER NOT NULL,
    "alasan_kecocokan" TEXT NOT NULL,
    "rekomendasi_mata_pelajaran" TEXT[],
    "category_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CategoryResultItems_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "CategoryResult" ADD CONSTRAINT "CategoryResult_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoryResultItems" ADD CONSTRAINT "CategoryResultItems_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "CategoryResult"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

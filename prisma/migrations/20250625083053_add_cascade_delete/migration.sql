-- DropForeignKey
ALTER TABLE "CategoryResultItems" DROP CONSTRAINT "CategoryResultItems_category_id_fkey";

-- AddForeignKey
ALTER TABLE "CategoryResultItems" ADD CONSTRAINT "CategoryResultItems_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "CategoryResult"("id") ON DELETE CASCADE ON UPDATE CASCADE;

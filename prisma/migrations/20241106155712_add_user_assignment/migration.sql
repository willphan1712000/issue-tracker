-- AlterTable
ALTER TABLE `Issue` ADD COLUMN `assignmentId` VARCHAR(255) NULL;

-- AddForeignKey
ALTER TABLE `Issue` ADD CONSTRAINT `Issue_assignmentId_fkey` FOREIGN KEY (`assignmentId`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

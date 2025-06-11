/*
  Warnings:

  - Made the column `token_type` on table `accounts` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `accounts` MODIFY `refresh_token` TEXT NULL,
    MODIFY `access_token` TEXT NULL,
    MODIFY `token_type` VARCHAR(191) NOT NULL,
    MODIFY `id_token` TEXT NULL;

-- AlterTable
ALTER TABLE `users` MODIFY `name` VARCHAR(255) NOT NULL,
    MODIFY `bio` TEXT NULL,
    MODIFY `avatar_url` VARCHAR(255) NULL,
    MODIFY `created_at` TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

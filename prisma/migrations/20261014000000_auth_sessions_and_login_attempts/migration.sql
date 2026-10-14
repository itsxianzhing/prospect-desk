CREATE TABLE `AuthSession` (
  `id` VARCHAR(191) NOT NULL,
  `tokenHash` VARCHAR(191) NOT NULL,
  `expiresAt` DATETIME(3) NOT NULL,
  `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  UNIQUE INDEX `AuthSession_tokenHash_key`(`tokenHash`),
  INDEX `AuthSession_expiresAt_idx`(`expiresAt`),
  PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `LoginAttempt` (
  `id` VARCHAR(191) NOT NULL,
  `usernameKey` VARCHAR(191) NOT NULL,
  `sourceIp` VARCHAR(191) NOT NULL,
  `failedCount` INTEGER NOT NULL DEFAULT 0,
  `firstFailedAt` DATETIME(3) NULL,
  `lastFailedAt` DATETIME(3) NULL,
  `blockedUntil` DATETIME(3) NULL,
  `updatedAt` DATETIME(3) NOT NULL,
  UNIQUE INDEX `LoginAttempt_usernameKey_sourceIp_key`(`usernameKey`, `sourceIp`),
  INDEX `LoginAttempt_blockedUntil_idx`(`blockedUntil`),
  PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

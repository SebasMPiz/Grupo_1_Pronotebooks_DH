create database pronotebooks;
use pronotebooks;
CREATE TABLE `Users` (
   `Id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(255) NOT NULL,
   `last_name` VARCHAR(255) NOT NULL,
   `email` VARCHAR(255) NOT NULL,
   `password` VARCHAR(255) NOT NULL,
   `phone` INT NOT NULL,
   `country` VARCHAR(255) NOT NULL,
   `id_category` INT NOT NULL,
   `id_imageUsers` INT NOT NULL,
   PRIMARY KEY (`Id`)
);

CREATE TABLE `Products` (
   `Id` INT NOT NULL,
   `discount` DECIMAL NOT NULL,
   `soldQuantity` INT NOT NULL,
   `processor` VARCHAR(255) NOT NULL,
   `graphics` VARCHAR(255) NOT NULL,
   `memory` VARCHAR(255) NOT NULL,
   `expansionSlot` VARCHAR(255) NOT NULL,
   `storage` VARCHAR(255) NOT NULL,
   `operativeSystem` VARCHAR(255) NOT NULL,
   `screenSize` INT NOT NULL,
   `computerCategory` VARCHAR(255) NOT NULL,
   `color` VARCHAR(255) NOT NULL,
   `price` INT NOT NULL,
   `description` VARCHAR(255) NOT NULL,
   `id_imageProducts` INT NOT NULL,
   `id_brand` INT NOT NULL,
   PRIMARY KEY (`Id`)
);

CREATE TABLE `ImagesProducts` (
   `Id` INT NOT NULL AUTO_INCREMENT,
   `bannerImage` VARCHAR(255) NOT NULL,
   `mainImage` VARCHAR(255) NOT NULL,
   `image2` VARCHAR(255) NOT NULL,
   `image3` VARCHAR(255) NOT NULL,
   `image4` VARCHAR(255) NOT NULL,
   PRIMARY KEY (`Id`)
);

CREATE TABLE `Categories` (
   `Id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(255) NOT NULL,
   PRIMARY KEY (`Id`)
);

CREATE TABLE `Brand` (
   `Id` INT NOT NULL,
   `brand`  VARCHAR (45) NOT NULL,
   `serie` VARCHAR(255) NOT NULL,
   `model` VARCHAR(255) NOT NULL,
   PRIMARY KEY (`Id`)
);

CREATE TABLE `ImagesUsers` (
   `Id` INT NOT NULL AUTO_INCREMENT,
   `profileImage` VARCHAR(255) NOT NULL,
   PRIMARY KEY (`Id`)
);

CREATE TABLE `Cart` (
   `Id` INT NOT NULL,
   `id_Users` INT NOT NULL,
   `quantity` INT NOT NULL,
   PRIMARY KEY (`Id`)
);

CREATE TABLE `Cart_Products` (
   `Id` INT NOT NULL,
   `id_Cart` INT NOT NULL,
   `id_Product` INT NOT NULL,
   PRIMARY KEY (`Id`)
);

ALTER TABLE `Users` ADD CONSTRAINT `FK_9fe717f3-cd75-43fa-a3fa-6d5722eae85d` FOREIGN KEY (`id_category`) REFERENCES `Categories`(`Id`)  ;

ALTER TABLE `Users` ADD CONSTRAINT `FK_b7583178-617d-41ab-bd9f-a78b15610980` FOREIGN KEY (`id_imageUsers`) REFERENCES `ImagesUsers`(`Id`)  ;

ALTER TABLE `Products` ADD CONSTRAINT `FK_3e73a96a-e865-4210-aa4f-fa49398714a2` FOREIGN KEY (`id_imageProducts`) REFERENCES `ImagesProducts`(`Id`)  ;

ALTER TABLE `Products` ADD CONSTRAINT `FK_53aa308d-8a67-4a07-a921-12855e571404` FOREIGN KEY (`id_brand`) REFERENCES `Brand`(`Id`)  ;products

ALTER TABLE `Cart` ADD CONSTRAINT `FK_709a5c93-3b5c-4e94-a6df-48f1051aba95` FOREIGN KEY (`id_Users`) REFERENCES `Users`(`Id`)  ;

ALTER TABLE `Cart_Products` ADD CONSTRAINT `FK_92481ba4-aec7-40da-b30a-4a938508a46c` FOREIGN KEY (`id_Cart`) REFERENCES `Cart`(`Id`)  ;

ALTER TABLE `Cart_Products` ADD CONSTRAINT `FK_64d45d01-71ad-486c-910e-b7d9700acde9` FOREIGN KEY (`id_Product`) REFERENCES `Products`(`Id`)  ;

SHOW DATABASES

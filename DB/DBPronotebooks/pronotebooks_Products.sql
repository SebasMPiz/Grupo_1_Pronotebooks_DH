CREATE DATABASE  IF NOT EXISTS `pronotebooks` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `pronotebooks`;
-- MySQL dump 10.13  Distrib 8.0.29, for macos12 (x86_64)
--
-- Host: localhost    Database: pronotebooks
-- ------------------------------------------------------
-- Server version	5.7.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Products`
--

DROP TABLE IF EXISTS `Products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Products` (
  `Id` int(11) NOT NULL,
  `discount` decimal(10,2) NOT NULL,
  `soldQuantity` int(11) NOT NULL,
  `processor` varchar(255) NOT NULL,
  `graphics` varchar(255) NOT NULL,
  `memory` varchar(255) NOT NULL,
  `expansionSlot` varchar(255) NOT NULL,
  `storage` varchar(255) NOT NULL,
  `operativeSystem` varchar(255) NOT NULL,
  `screenSize` int(11) NOT NULL,
  `computerCategory` varchar(255) NOT NULL,
  `color` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `description` varchar(255) NOT NULL,
  `id_imageProducts` int(11) DEFAULT NULL,
  `id_brand` int(11) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Products`
--

LOCK TABLES `Products` WRITE;
/*!40000 ALTER TABLE `Products` DISABLE KEYS */;
INSERT INTO `Products` VALUES (1,0.28,19,'AMD A4 9120E 2 Nucleos / Freq. 2,2GHz','AMD Radeo','4Gb DDR4 SODIMM','0','64Gb SSD','Win11',17,'Gaming','Black',348571,'Una descripcion genial',1,1),(2,0.63,25,'M1 7 core','M1','8Gb','0','256Gb SSD','MacOS 10.14',13,'Home','Black',367416,'Una descripcion genial',2,2),(3,0.63,82,'AMD Ryzen™ 5 5500U','AMD Radeon','8Gb DDR4','0','512Gb SSD','Win10 Pro',15,'Business','Black',232683,'Una descripcion genial',3,3);
/*!40000 ALTER TABLE `Products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-08-06 12:43:58

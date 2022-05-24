-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: us-cdbr-east-05.cleardb.net    Database: heroku_7348ebcfe6615d8
-- ------------------------------------------------------
-- Server version	5.6.50-log

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
-- Table structure for table `acessos`
--

DROP TABLE IF EXISTS `acessos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `acessos` (
  `ID_USUARIO` int(11) NOT NULL AUTO_INCREMENT,
  `MATRICULA` varchar(255) NOT NULL,
  `STATUS` varchar(1) NOT NULL,
  `USERNAME` varchar(255) NOT NULL,
  `PASSWORD` varchar(35) NOT NULL,
  `RESET` varchar(1) DEFAULT NULL,
  PRIMARY KEY (`ID_USUARIO`)
) ENGINE=InnoDB AUTO_INCREMENT=56 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `acessos`
--

LOCK TABLES `acessos` WRITE;
/*!40000 ALTER TABLE `acessos` DISABLE KEYS */;
INSERT INTO `acessos` VALUES (4,'000001','A','joaovc@witsolutions.com','202cb962ac59075b964b07152d234b70','N'),(14,'000002','A','leonardo@witsolutions.com','ffe7470430a737c4ce6dc74bea0155d5','N'),(24,'000003','A','gabriel@witsolutions.com','ffe7470430a737c4ce6dc74bea0155d5','N'),(34,'000004','A','willyan@witsolutions.com','ffe7470430a737c4ce6dc74bea0155d5','N'),(44,'000005','A','tamara@witsolutions.com','ffe7470430a737c4ce6dc74bea0155d5','N'),(55,'000006','A','fra@f','ffe7470430a737c4ce6dc74bea0155d5','N');
/*!40000 ALTER TABLE `acessos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ativos`
--

DROP TABLE IF EXISTS `ativos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ativos` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ITEM` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=84 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ativos`
--

LOCK TABLES `ativos` WRITE;
/*!40000 ALTER TABLE `ativos` DISABLE KEYS */;
INSERT INTO `ativos` VALUES (4,'Notebook'),(14,'Celular'),(24,'Mouse'),(34,'Teclado'),(44,'Fone'),(54,'Monitor'),(64,'All in one');
/*!40000 ALTER TABLE `ativos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `funcionarios`
--

DROP TABLE IF EXISTS `funcionarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `funcionarios` (
  `CODIGO` int(11) NOT NULL AUTO_INCREMENT,
  `NOME` varchar(255) NOT NULL,
  `MATRICULA` varchar(6) NOT NULL,
  `DATANASC` date NOT NULL,
  `CPF` varchar(255) NOT NULL,
  `DATA_ADMISSAO` date NOT NULL,
  `SITUACAO` varchar(1) NOT NULL,
  `DATA_DEMISSAO` date NOT NULL,
  PRIMARY KEY (`CODIGO`)
) ENGINE=InnoDB AUTO_INCREMENT=54 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `funcionarios`
--

LOCK TABLES `funcionarios` WRITE;
/*!40000 ALTER TABLE `funcionarios` DISABLE KEYS */;
INSERT INTO `funcionarios` VALUES (4,'JOÃO VINÍCIUS DA COSTA','000001','2000-01-01','12412565874','2021-01-01','','0000-00-00'),(14,'LEONARDO AUGUSTO COELHO FERREIRA','000002','2000-02-25','02415465875','2022-05-06','','0000-00-00'),(24,'GABRIEL BARBOSA TEIXEIRA','000003','2000-03-25','01318415875','2021-10-01','','0000-00-00'),(34,'WILLYAN LOPES DE CARVALHO','000004','1985-03-25','01314584875','2021-10-01','','0000-00-00'),(44,'TAMARA SILVA DIAS','000005','1985-04-25','23253605875','2021-10-01','','0000-00-00');
/*!40000 ALTER TABLE `funcionarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inventario`
--

DROP TABLE IF EXISTS `inventario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `inventario` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `TIPO_ATIVO` int(11) DEFAULT NULL,
  `NOTA_FISCAL` int(11) DEFAULT NULL,
  `NUM_SERIAL` varchar(250) DEFAULT NULL,
  `LOCALIZACAO` int(11) DEFAULT NULL,
  `DATA` date DEFAULT NULL,
  `ID_USUARIO` int(11) DEFAULT NULL,
  `CODIGO_PRODUTO` varchar(200) DEFAULT NULL,
  `DESCRICAO` longtext,
  PRIMARY KEY (`ID`),
  KEY `ID_USUARIO` (`ID_USUARIO`),
  CONSTRAINT `inventario_ibfk_1` FOREIGN KEY (`ID_USUARIO`) REFERENCES `acessos` (`ID_USUARIO`)
) ENGINE=InnoDB AUTO_INCREMENT=2334 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inventario`
--

LOCK TABLES `inventario` WRITE;
/*!40000 ALTER TABLE `inventario` DISABLE KEYS */;
INSERT INTO `inventario` VALUES (14,14,34325325,'2147483647',14,'2022-03-15',4,'2000000','uM CELULAR'),(24,14,34325325,'234',14,'2022-04-02',4,'2000000','uM CELULAR'),(34,4,34325325,'235235765765',4,'2022-04-02',4,'fra','celular2'),(44,34,34325325,'235235765765',24,'2022-04-02',4,'A1-2000','celular'),(54,34,34325325,'235235765765',24,'2022-04-02',4,'A1-2000','celular'),(64,24,34325325,'235235765765',4,'2022-04-02',4,'frafarf','celular'),(74,44,34325325,'235235765765',4,'2022-04-02',4,'frafarf','celular'),(84,54,34325325,'235235765765',4,'2022-04-02',4,'frafarf','celular'),(94,64,34325325,'235235765765',24,'2022-04-02',4,'fraf','celular'),(104,44,10032003,'091839103910',24,'2022-04-27',34,'329190','Fone quebrado marca Sony'),(114,24,123123123,'134214141',4,'2022-04-27',34,'2141241','Outro mouse'),(124,24,21312313,'123123123',4,'2022-04-27',34,'4143123','Um Mouse'),(134,14,1231231,'123123123',24,'2022-04-27',34,'123133','Um Celular'),(144,14,111111111,'11111111',24,'2022-04-27',34,'1111111','Outro Celular'),(154,44,51424141,'123131231',34,'2022-04-27',34,'132145','Outro Celular'),(164,44,22222222,'2222222222',24,'2022-04-27',34,'222222','Um fone'),(174,54,3333333,'4444444444',44,'2022-04-27',34,'333333','Um monitor'),(194,24,35965249,'14974409',4,'2022-04-28',24,'51760355','Mais um mouse da Xiaomi quebrado.'),(204,54,86980837,'65689840',44,'2022-04-28',24,'53326286','Outro monitor velho.'),(214,24,20415067,'79935372',14,'2022-04-28',34,'10929656','Outro mouse da Xiaomi quebrado.'),(224,44,16819986,'58594127',24,'2022-04-28',24,'22851770','Outro fone quebrado.'),(234,14,92444660,'41418234',14,'2022-04-28',4,'7269630','Mais um celular quebrado.'),(244,64,16704648,'56199047',34,'2022-04-28',4,'50395730','Outro all in one novo.'),(254,54,66345347,'69224388',24,'2022-04-28',34,'90443723','Mais um monitor velho.'),(284,34,38897106,'61017403',14,'2022-04-28',4,'86354980','Outro teclado velho.'),(294,24,36310297,'61536284',4,'2022-04-28',14,'87409618','Outro mouse da Lenovo novo.'),(304,64,94944456,'77160801',24,'2022-04-28',4,'72995180','Outro all in one velho.'),(314,4,98864999,'25951221',24,'2022-04-28',14,'93979531','Outro notebook novo.'),(324,4,34857502,'87269496',24,'2022-04-28',34,'75115605','Mais um notebook velho.'),(334,34,94991112,'77488657',34,'2022-04-28',34,'975985','Outro teclado velho.'),(344,4,57067766,'89941150',34,'2022-04-28',14,'78447426','Mais um notebook novo.'),(354,4,19322565,'54529748',4,'2022-04-28',4,'72221051','Mais um notebook novo.'),(364,14,42511645,'54116612',14,'2022-04-28',14,'95912682','Outro celular velho.'),(374,64,5484316,'83347927',34,'2022-04-28',24,'53435940','Mais um all in one velho.'),(384,4,98605611,'51036573',44,'2022-04-28',4,'97640255','Mais um notebook velho.'),(394,44,20867801,'21198349',4,'2022-04-28',14,'5449343','Outro fone usado.'),(404,34,17272039,'94807709',44,'2022-04-28',34,'40662021','Mais um teclado velho.'),(414,34,90570879,'30058875',34,'2022-04-28',14,'83260427','Outro teclado quebrado.'),(424,64,75969598,'37622399',34,'2022-04-28',24,'74500921','Mais um all in one usado.'),(434,24,32967517,'90145635',44,'2022-04-28',34,'93158124','Mais um mouse da Apple usado.'),(444,34,52552842,'32235671',34,'2022-04-28',34,'70249273','Mais um teclado quebrado.'),(454,24,22845172,'82013508',24,'2022-04-28',24,'9603397','Outro mouse da Samsung quebrado.'),(464,4,13768896,'43508145',24,'2022-04-28',14,'21704664','Mais um notebook usado.'),(474,14,21266940,'4079129',24,'2022-04-28',4,'42796014','Mais um celular quebrado.'),(484,34,94886976,'52098206',34,'2022-04-28',34,'26793471','Mais um teclado novo.'),(494,14,53985152,'24100011',4,'2022-04-28',34,'37823824','Mais um celular usado.'),(504,54,99926132,'68452795',44,'2022-04-28',4,'26632869','Mais um monitor usado.'),(514,64,20434318,'6442002',4,'2022-04-28',24,'75905061','Outro all in one usado.'),(524,44,46722279,'44148607',4,'2022-04-28',34,'30033108','Mais um fone usado.'),(544,54,86396130,'76649824',34,'2022-04-28',14,'56212255','Outro monitor novo.'),(554,24,2826827,'4244858',14,'2022-04-28',34,'49361954','Mais um mouse da Xiaomi usado.'),(564,34,38834721,'39834174',4,'2022-04-28',4,'41815632','Outro teclado quebrado.'),(574,14,16425635,'8994577',34,'2022-04-28',4,'55310207','Outro celular usado.'),(584,44,29149788,'71763673',34,'2022-04-28',14,'23255459','Mais um fone quebrado.'),(594,44,21696621,'86408371',44,'2022-04-28',34,'8313131','Mais um fone velho.'),(604,54,72852060,'68698738',4,'2022-04-28',4,'70610897','Outro monitor novo.'),(624,64,22198749,'61229121',34,'2022-04-28',24,'35218975','Outro all in one velho.'),(634,44,21254142,'87469477',14,'2022-04-28',4,'66143834','Mais um fone velho.'),(644,34,3043869,'24854963',44,'2022-04-28',14,'61568938','Mais um teclado novo.'),(654,54,70447009,'54545636',4,'2022-04-28',24,'72737533','Mais um monitor quebrado.'),(674,14,70681434,'82799139',4,'2022-04-28',4,'44953984','Mais um celular quebrado.'),(694,54,76652359,'56624671',14,'2022-04-28',24,'91229851','Mais um monitor novo.'),(714,14,22023314,'32348975',24,'2022-04-28',4,'72911789','Outro celular usado.'),(724,34,91161554,'39111618',24,'2022-04-28',24,'51253395','Outro teclado novo.'),(734,24,1727077,'35616060',24,'2022-04-28',34,'49162505','Mais um mouse da Xiaomi velho.'),(744,54,53191154,'695084',4,'2022-04-28',34,'84968765','Outro monitor velho.'),(754,24,39785172,'57607027',44,'2022-04-28',24,'821922','Outro mouse usado.'),(764,44,12105725,'50963543',34,'2022-04-28',24,'99292501','Outro fone velho.'),(774,24,13179926,'21783262',24,'2022-04-28',44,'36740850','Outro mouse usado.'),(784,24,49470874,'3301980',24,'2022-04-28',44,'59023666','Outro mouse usado.'),(794,54,29725245,'87545702',34,'2022-04-28',14,'58212892','Mais um monitor novo.'),(804,64,90974433,'19127971',14,'2022-04-28',44,'41389972','Outro all in one usado.'),(814,64,99703274,'36897713',34,'2022-04-28',34,'1969192','Outro all in one quebrado.'),(824,24,81692779,'4587925',24,'2022-04-28',4,'26978998','Mais um mouse velho.'),(834,34,64836725,'8624215',24,'2022-04-28',34,'41454231','Mais um teclado usado.'),(844,54,28066010,'41995215',24,'2022-04-28',4,'10712321','Mais um monitor velho.'),(854,24,59514484,'7410233',24,'2022-04-28',24,'40913643','Mais um mouse velho.'),(864,24,80616486,'42033850',14,'2022-04-28',44,'20082981','Mais um mouse novo.'),(874,44,46639632,'38069367',14,'2022-04-28',34,'50155883','Outro fone usado.'),(884,14,38848787,'22463427',44,'2022-04-28',44,'54417940','Mais um celular da Lenovo velho.'),(894,14,6867986,'46755964',14,'2022-04-28',4,'69135304','Mais um celular da Lenovo velho.'),(904,14,84222710,'27927297',4,'2022-04-28',44,'59136245','Outro celular da Samsung usado.'),(914,44,30953828,'79206752',4,'2022-04-28',4,'44174038','Mais um fone velho.'),(924,44,98720757,'47428074',14,'2022-04-28',34,'97447391','Outro fone novo.'),(934,44,60753768,'67588761',34,'2022-04-28',34,'17393102','Mais um fone usado.'),(944,34,32884690,'89266053',44,'2022-04-30',24,'86077540','Outro teclado usado.'),(954,44,84899392,'72998075',34,'2022-04-30',44,'46758800','Mais um fone quebrado.'),(964,24,90148501,'55367985',44,'2022-04-30',14,'65419392','Mais um mouse velho.'),(974,24,8634071,'24525963',24,'2022-04-30',24,'54196906','Mais um mouse quebrado.'),(984,34,58197241,'31896880',14,'2022-04-30',34,'91161388','Outro teclado novo.'),(994,24,34649130,'25026049',24,'2022-04-30',14,'23169388','Mais um mouse quebrado.'),(1004,24,21135381,'44467189',14,'2022-04-30',44,'53584276','Outro mouse novo.'),(1014,54,93543813,'19403502',4,'2022-04-30',4,'64564398','Mais um monitor quebrado.'),(1024,64,58662019,'52985599',34,'2022-04-30',34,'18726019','Outro all in one usado.'),(1034,54,85727316,'50518992',34,'2022-04-30',34,'91361823','Mais um monitor novo.'),(1044,24,39086419,'64800108',34,'2022-04-30',44,'86373864','Outro mouse usado.'),(1054,14,64614914,'94355831',14,'2022-04-30',4,'35814171','Outro celular da Lenovo velho.'),(1064,14,62089278,'17361329',4,'2022-04-30',34,'50939364','Mais um celular da Xiaomi velho.'),(1074,24,87277307,'80215871',34,'2022-04-30',14,'83150914','Outro mouse usado.'),(1084,4,33580903,'87663834',44,'2022-04-30',14,'5049887','Outro notebook quebrado.'),(1094,24,81546048,'266184',24,'2022-04-30',34,'35022259','Outro mouse velho.'),(1104,14,80856755,'71615278',4,'2022-04-30',24,'16987770','Outro celular da Apple novo.'),(1114,34,53049344,'9027455',14,'2022-04-30',24,'71198409','Outro teclado quebrado.'),(1124,64,80062238,'13032853',34,'2022-04-30',44,'75381532','Outro all in one usado.'),(1134,34,5440860,'11318689',24,'2022-04-30',24,'92010193','Mais um teclado quebrado.'),(1144,54,84847249,'56950464',44,'2022-04-30',24,'94685239','Mais um monitor usado.'),(1154,4,31310943,'68774243',34,'2022-04-30',14,'78004235','Outro notebook velho.'),(1164,4,82744318,'58256000',4,'2022-04-30',44,'70155756','Outro notebook usado.'),(1174,44,63006718,'65431018',34,'2022-04-30',34,'78624671','Outro fone quebrado.'),(1184,34,16543880,'34023829',4,'2022-04-30',24,'14886366','Outro teclado usado.'),(1194,14,55502409,'40929846',24,'2022-04-30',24,'23513148','Mais um celular da Xiaomi quebrado.'),(1204,14,25871744,'33930080',14,'2022-04-30',24,'65775770','Mais um celular da Apple usado.'),(1214,34,59638233,'46222821',24,'2022-04-30',24,'48671868','Outro teclado usado.'),(1224,64,72059385,'5336735',24,'2022-04-30',44,'95103730','Mais um all in one velho.'),(1234,44,11192233,'29892247',24,'2022-04-30',34,'24715699','Mais um fone novo.'),(1244,24,71596183,'23774432',14,'2022-04-30',34,'29693364','Mais um mouse quebrado.'),(1254,14,19841112,'1604320',4,'2022-04-30',4,'82275443','Mais um celular da Lenovo velho.'),(1264,64,96916742,'90664124',44,'2022-04-30',24,'57542525','Outro all in one quebrado.'),(1274,34,77626471,'48200874',4,'2022-04-30',44,'61749969','Mais um teclado usado.'),(1284,24,33014000,'54334961',44,'2022-04-30',44,'36242534','Mais um mouse novo.'),(1294,24,25661700,'42407777',44,'2022-04-30',24,'35111342','Outro mouse usado.'),(1304,24,36604986,'99743981',44,'2022-04-30',44,'5480430','Outro mouse novo.'),(1314,34,23454938,'4419444',14,'2022-04-30',14,'90156107','Outro teclado novo.'),(1324,14,46807968,'2324644',14,'2022-04-30',4,'42241002','Outro celular da Xiaomi novo.'),(1334,54,96429767,'46908132',34,'2022-04-30',14,'81765699','Outro monitor novo.'),(1344,24,12852788,'8017897',44,'2022-04-30',4,'30781747','Mais um mouse quebrado.'),(1354,24,80376962,'53884807',24,'2022-04-30',4,'89565874','Outro mouse quebrado.'),(1364,64,14981856,'30502532',34,'2022-04-30',14,'17584612','Mais um all in one novo.'),(1374,64,80521934,'4334089',34,'2022-04-30',14,'43045093','Outro all in one usado.'),(1384,44,28438912,'85106139',34,'2022-04-30',24,'59006266','Mais um fone novo.'),(1394,14,35642813,'11025057',44,'2022-04-30',4,'54998439','Mais um celular da Apple novo.'),(1404,44,43338930,'3281125',44,'2022-04-30',34,'16836051','Mais um fone novo.'),(1414,54,58581013,'73942558',24,'2022-04-30',34,'13236131','Mais um monitor usado.'),(1424,4,99121640,'89074868',14,'2022-04-30',14,'89012090','Mais um notebook quebrado.'),(1434,34,8990486,'83741185',14,'2022-04-30',24,'318626','Mais um teclado novo.'),(1444,24,41699693,'53958436',4,'2022-04-30',34,'66616441','Outro mouse usado.'),(1454,64,31136944,'72799640',14,'2022-04-30',4,'82447648','Mais um all in one velho.'),(1464,54,180579,'28683177',34,'2022-04-30',4,'78375900','Mais um monitor usado.'),(1474,4,37562266,'96217651',14,'2022-04-30',14,'23589200','Outro notebook usado.'),(1484,14,86349258,'1357229',24,'2022-04-30',14,'5714082','Mais um celular da Samsung quebrado.'),(1494,24,68456594,'85224735',34,'2022-04-30',34,'78906637','Mais um mouse usado.'),(1504,4,57925236,'46350774',4,'2022-04-30',34,'50315628','Outro notebook quebrado.'),(1514,64,81200293,'14390170',14,'2022-04-30',24,'93682700','Outro all in one quebrado.'),(1524,14,17044824,'17800843',34,'2022-04-30',34,'31831073','Mais um celular da Xiaomi quebrado.'),(1534,34,58799342,'28239940',34,'2022-04-30',24,'34964005','Outro teclado quebrado.'),(1544,54,20328495,'57818770',4,'2022-04-30',34,'58589955','Outro monitor velho.'),(1554,24,87548402,'84962103',34,'2022-04-30',44,'70380108','Mais um mouse quebrado.'),(1564,24,84463520,'78640434',14,'2022-04-30',44,'7800471','Outro mouse quebrado.'),(1574,14,29595236,'70809359',34,'2022-04-30',44,'14219691','Outro celular da Samsung usado.'),(1584,14,92298012,'6972802',34,'2022-04-30',24,'64263200','Mais um celular da Apple usado.'),(1594,44,96003356,'48499480',14,'2022-04-30',34,'75708036','Mais um fone quebrado.'),(1604,34,25250240,'71037032',14,'2022-04-30',24,'7625437','Outro teclado quebrado.'),(1614,54,34936633,'32207429',34,'2022-04-30',4,'14780807','Mais um monitor novo.'),(1624,34,61123708,'63260682',24,'2022-04-30',34,'7492383','Mais um teclado novo.'),(1634,34,32907182,'17824154',34,'2022-04-30',4,'93082476','Mais um teclado velho.'),(1644,24,98436786,'47525253',4,'2022-04-30',14,'42593062','Mais um mouse novo.'),(1654,4,95129103,'98396606',24,'2022-04-30',44,'61469449','Outro notebook novo.'),(1664,14,83905513,'24226624',14,'2022-04-30',4,'46005533','Outro celular da Samsung quebrado.'),(1674,44,77481997,'80594829',4,'2022-04-30',14,'89334628','Mais um fone novo.'),(1684,44,85900960,'30873335',44,'2022-04-30',4,'99432395','Mais um fone usado.'),(1694,4,71545020,'65615286',4,'2022-04-30',34,'87617996','Mais um notebook quebrado.'),(1704,4,89799663,'53838868',14,'2022-04-30',24,'78416714','Mais um notebook velho.'),(1714,24,12481805,'28435042',44,'2022-04-30',24,'89745621','Mais um mouse usado.'),(1724,4,6135521,'79257696',24,'2022-04-30',44,'5038176','Outro notebook velho.'),(1734,34,74824105,'94755626',44,'2022-04-30',44,'2064066','Mais um teclado quebrado.'),(1744,34,4572768,'88476144',44,'2022-04-30',14,'52199165','Mais um teclado velho.'),(1754,44,6705111,'30014530',34,'2022-04-30',44,'85865563','Mais um fone usado.'),(1764,4,31959856,'84418792',4,'2022-04-30',14,'85408348','Outro notebook usado.'),(1774,4,40276226,'91684990',14,'2022-04-30',14,'15407287','Mais um notebook velho.'),(1784,44,71825587,'80108245',44,'2022-04-30',24,'46581448','Outro fone novo.'),(1794,54,31869156,'85339843',14,'2022-04-30',44,'86495939','Outro monitor usado.'),(1804,34,30915110,'60678530',24,'2022-04-30',14,'520804','Outro teclado novo.'),(1814,44,5010549,'75464706',14,'2022-04-30',4,'20341911','Outro fone quebrado.'),(1824,4,77338325,'15113435',44,'2022-04-30',34,'32792129','Outro notebook usado.'),(1834,44,22455668,'14662334',4,'2022-04-30',14,'43372337','Mais um fone novo.'),(1844,64,64529443,'90006931',44,'2022-04-30',44,'93664788','Outro all in one novo.'),(1854,34,5014421,'11988887',44,'2022-04-30',24,'53521970','Outro teclado usado.'),(1864,24,1934597,'85491769',24,'2022-04-30',24,'68152456','Outro mouse novo.'),(1874,54,67391020,'11329724',44,'2022-04-30',44,'5098012','Outro monitor quebrado.'),(1884,54,10478978,'86406306',44,'2022-04-30',24,'76688091','Mais um monitor usado.'),(1894,4,73923294,'21719017',4,'2022-04-30',44,'75748265','Mais um notebook velho.'),(1904,14,25956287,'20410150',44,'2022-04-30',14,'21522027','Mais um celular da Xiaomi velho.'),(1914,64,10511214,'94912132',24,'2022-04-30',24,'65866774','Mais um all in one velho.'),(1924,64,38438613,'76129389',14,'2022-04-30',14,'96735815','Mais um all in one velho.'),(1934,4,50077190,'25059817',34,'2022-04-30',24,'92079501','Mais um notebook velho.'),(1944,4,74187793,'17767782',14,'2022-04-30',24,'6980788','Mais um notebook usado.'),(1954,54,38567102,'69680108',44,'2022-04-30',44,'16162579','Outro monitor velho.'),(1964,64,1943236,'66183130',4,'2022-04-30',4,'67140287','Mais um all in one novo.'),(1974,24,88968380,'66111832',34,'2022-04-30',14,'79517253','Outro mouse usado.'),(1984,4,97570411,'87607960',24,'2022-04-30',4,'96483448','Outro notebook novo.'),(1994,24,48486243,'66936078',24,'2022-04-30',24,'61607565','Mais um mouse velho.'),(2004,64,39014146,'97976371',44,'2022-04-30',44,'76216174','Mais um all in one novo.'),(2014,64,89234334,'92252619',44,'2022-04-30',44,'29524229','Outro all in one novo.'),(2024,24,48910911,'80691780',24,'2022-04-30',34,'8955482','Mais um mouse novo.'),(2034,14,44565543,'68512684',14,'2022-04-30',4,'48412312','Outro celular da Xiaomi usado.'),(2044,44,70221089,'94908424',4,'2022-04-30',24,'14728363','Mais um fone velho.'),(2054,34,81849437,'34326875',34,'2022-04-30',44,'23756710','Mais um teclado usado.'),(2064,34,14309255,'66943667',44,'2022-04-30',24,'18404074','Mais um teclado quebrado.'),(2074,4,93253324,'47899708',34,'2022-04-30',4,'38411483','Outro notebook quebrado.'),(2084,14,48991682,'12029248',14,'2022-04-30',14,'5798119','Outro celular da Apple quebrado.'),(2094,34,4942006,'89720065',4,'2022-04-30',24,'32754732','Outro teclado velho.'),(2104,44,1412861,'8081256',34,'2022-04-30',24,'91734','Outro fone novo.'),(2114,4,16414059,'13910071',4,'2022-04-30',44,'5307524','Mais um notebook novo.'),(2124,14,2147483647,'22222222',24,'2022-05-01',55,'1111111111','Um celular'),(2134,4,31231,'31412414',4,'2022-05-01',55,'2312312312132','Um notebook'),(2144,4,36767,'5464564564',4,'2022-05-01',55,'31313213','Um notebook'),(2154,24,75685685,'765477',4,'2022-05-01',55,'888675358','Um mouse'),(2164,4,31231,'31412414',4,'2022-05-01',55,'2312312312132','Um notebook'),(2174,4,36767,'5464564564',4,'2022-05-01',55,'31313213','Um notebook'),(2184,14,2147483647,'22222222',24,'2022-05-01',55,'1111111111','Um celular'),(2194,24,75685685,'765477',4,'2022-05-01',55,'888675358','Um mouse'),(2204,24,75685685,'765477',4,'2022-05-01',55,'888675358','Um mouse'),(2214,4,31231,'31412414',4,'2022-05-01',55,'2312312312132','Um notebook'),(2224,4,36767,'5464564564',4,'2022-05-01',55,'31313213','Um notebook'),(2234,14,2147483647,'22222222',24,'2022-05-01',55,'1111111111','Um celular'),(2244,14,21312312,'321312566',14,'2022-05-01',55,'124124','Um celular qualquer'),(2254,4,31231,'31412414',4,'2022-05-01',55,'2312312312132','Um notebook'),(2264,14,2147483647,'22222222',24,'2022-05-01',55,'1111111111','Um celular'),(2274,4,36767,'5464564564',4,'2022-05-01',55,'31313213','Um notebook'),(2284,24,75685685,'765477',4,'2022-05-01',55,'888675358','Um mouse'),(2294,4,36767,'5464564564',4,'2022-05-01',55,'31313213','Um notebook'),(2304,4,31231,'31412414',4,'2022-05-01',55,'2312312312132','Um notebook'),(2314,14,2147483647,'22222222',24,'2022-05-01',55,'1111111111','Um celular'),(2324,24,75685685,'765477',4,'2022-05-01',55,'888675358','Um mouse');
/*!40000 ALTER TABLE `inventario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inventario2`
--

DROP TABLE IF EXISTS `inventario2`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `inventario2` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `CODIGO_PRODUTO` varchar(100) DEFAULT NULL,
  `TIPO_ATIVO` varchar(50) DEFAULT NULL,
  `DESCRICAO` varchar(200) DEFAULT NULL,
  `NOTA_FISCAL` int(9) DEFAULT NULL,
  `NUM_SERIAL` int(12) DEFAULT NULL,
  `LOCALIZACAO` varchar(20) DEFAULT NULL,
  `DATA` date DEFAULT NULL,
  `ID_USUARIO` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `ID_USUARIO` (`ID_USUARIO`),
  CONSTRAINT `inventario2_ibfk_1` FOREIGN KEY (`ID_USUARIO`) REFERENCES `acessos` (`ID_USUARIO`)
) ENGINE=InnoDB AUTO_INCREMENT=354 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inventario2`
--

LOCK TABLES `inventario2` WRITE;
/*!40000 ALTER TABLE `inventario2` DISABLE KEYS */;
INSERT INTO `inventario2` VALUES (24,'A1-2000','notebook','Apenas um notebook',34325325,2147483647,'sao_paulo','2022-03-28',34),(74,'fra','notebook','fragfeaf',142141241,12412424,'cuiaba','2022-03-28',4),(84,'A1-2000','mouse','fraf',34325325,2147483647,'sao_paulo','2022-03-28',4),(94,'fra','celular','fra',34325325,2147483647,'sao_paulo','2022-03-28',4),(104,'fraf','notebook','frafar',34325325,2147483647,'cuiaba','2022-03-28',4),(114,'fraf','celular','fraf',34325325,2147483647,'sao_paulo','2022-03-28',4),(124,'fraf','celular','frafre',34141,412412412,'cuiaba','2022-03-28',4),(134,'fraf','mouse','fraf',34325325,2147483647,'cuiaba','2022-03-28',4),(144,'fraf','mouse','frafr',34325325,2147483647,'cuiaba','2022-03-28',4),(154,'fraf','notebook','frafr',34325325,2147483647,'cuiaba','2022-03-28',4),(164,'A1-2000','celular','fraf',34325325,2147483647,'cuiaba','2022-03-28',4),(174,'fra','celular','fraf',34325325,2147483647,'cuiaba','2022-03-28',4),(184,'fraf','celular','fra',34325325,2147483647,'sao_paulo','2022-03-28',4),(194,'fraf','celular','frafra',34325325,2147483647,'sao_paulo','2022-03-28',4),(204,'fraf','celular','frafra',34325325,2147483647,'sao_paulo','2022-03-28',4),(214,'fraf','notebook','rf',34325325,2147483647,'sao_paulo','2022-03-28',4),(224,'A1-2000','mouse','fraf',34325325,2147483647,'cuiaba','2022-03-28',4),(234,'A1-2000','mouse','fraf',34325325,2147483647,'cuiaba','2022-03-28',4),(244,'A1-2000','mouse','fraf',34325325,2147483647,'cuiaba','2022-03-28',4),(254,'fra','notebook','hydh',34325325,2147483647,'cuiaba','2022-03-28',4),(264,'fra','notebook','hydh',34325325,2147483647,'cuiaba','2022-03-28',4),(274,'A1-2000','celular','fra',34325325,2147483647,'cuiaba','2022-03-28',4),(284,'A1-2000','mouse','frafr',34325325,2147483647,'cuiaba','2022-03-28',4),(294,'A1-2000','mouse','frafr',34325325,2147483647,'cuiaba','2022-03-28',4),(304,'fra','mouse','fra',34325325,2147483647,'sao_paulo','2022-03-28',4),(314,'fra','mouse','fra',34325325,2147483647,'sao_paulo','2022-03-28',4),(324,'fra','mouse','fra',34325325,2147483647,'sao_paulo','2022-03-28',4),(334,'fra','mouse','fra',34325325,2147483647,'sao_paulo','2022-03-28',4),(344,'fra','mouse','fra',34325325,2147483647,'sao_paulo','2022-03-28',4);
/*!40000 ALTER TABLE `inventario2` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `localizacao`
--

DROP TABLE IF EXISTS `localizacao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `localizacao` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ITEM` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=54 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `localizacao`
--

LOCK TABLES `localizacao` WRITE;
/*!40000 ALTER TABLE `localizacao` DISABLE KEYS */;
INSERT INTO `localizacao` VALUES (4,'São Paulo'),(14,'Cuiaba'),(24,'Fortaleza'),(34,'Rio De Janeiro'),(44,'Paraná');
/*!40000 ALTER TABLE `localizacao` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `menu`
--

DROP TABLE IF EXISTS `menu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `menu` (
  `ID_MENU` int(11) NOT NULL AUTO_INCREMENT,
  `DESCRICAO` varchar(50) NOT NULL,
  `ICON` varchar(100) NOT NULL,
  PRIMARY KEY (`ID_MENU`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menu`
--

LOCK TABLES `menu` WRITE;
/*!40000 ALTER TABLE `menu` DISABLE KEYS */;
INSERT INTO `menu` VALUES (1,'Principal','fas fa-chart-line'),(2,'Produtos','fas fa-database'),(3,'Visualização','fas fa-eye');
/*!40000 ALTER TABLE `menu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `selectbox`
--

DROP TABLE IF EXISTS `selectbox`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `selectbox` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `TABELA` varchar(6) NOT NULL,
  `ITEM` varchar(3) NOT NULL,
  `DESCR` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=84 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `selectbox`
--

LOCK TABLES `selectbox` WRITE;
/*!40000 ALTER TABLE `selectbox` DISABLE KEYS */;
INSERT INTO `selectbox` VALUES (4,'000001','001','Periférico'),(14,'000001','002','Notebook'),(24,'000001','003','Celular'),(34,'000001','004','Alexa'),(54,'000002','001','São Paulo'),(64,'000003','001','S22'),(74,'000003','002','M1 PRO');
/*!40000 ALTER TABLE `selectbox` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `submenu`
--

DROP TABLE IF EXISTS `submenu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `submenu` (
  `ID_SUBMENU` int(11) NOT NULL AUTO_INCREMENT,
  `ID_MENU` int(11) NOT NULL,
  `DESCRICAO` varchar(100) NOT NULL,
  `LINK` varchar(50) NOT NULL,
  PRIMARY KEY (`ID_SUBMENU`),
  KEY `ID_MENU` (`ID_MENU`),
  CONSTRAINT `submenu_ibfk_1` FOREIGN KEY (`ID_MENU`) REFERENCES `menu` (`ID_MENU`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `submenu`
--

LOCK TABLES `submenu` WRITE;
/*!40000 ALTER TABLE `submenu` DISABLE KEYS */;
INSERT INTO `submenu` VALUES (1,2,'Inserir produtos','/view/inserir_produtos.php'),(2,2,'Inventário de produtos','/view/inventario.php'),(3,1,'Home','/view/home.php'),(4,1,'Dashboard','/view/dashboard.php'),(5,3,'Produtos Por Data','/view/grafico_data.php');
/*!40000 ALTER TABLE `submenu` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-03  2:21:06

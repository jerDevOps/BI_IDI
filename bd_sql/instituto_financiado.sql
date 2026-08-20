-- --------------------------------------------------------
-- Host:                         web.vriunap.pe
-- Versión del servidor:         8.4.8 - MySQL Community Server - GPL
-- SO del servidor:              Linux
-- HeidiSQL Versión:             12.8.0.6908
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para default
CREATE DATABASE IF NOT EXISTS `default` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `default`;

-- Volcando estructura para tabla default.institutos_financiados
CREATE TABLE IF NOT EXISTS `institutos_financiados` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `document_id` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `instituto_siglas` varchar(255) DEFAULT NULL,
  `area` varchar(255) DEFAULT NULL,
  `puntaje` varchar(255) DEFAULT NULL,
  `resultado` varchar(255) DEFAULT NULL,
  `observaciones` longtext,
  `anio` varchar(255) DEFAULT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `published_at` datetime(6) DEFAULT NULL,
  `created_by_id` int unsigned DEFAULT NULL,
  `updated_by_id` int unsigned DEFAULT NULL,
  `locale` varchar(255) DEFAULT NULL,
  `objetivos` longtext,
  PRIMARY KEY (`id`),
  KEY `institutos_financiados_documents_idx` (`document_id`,`locale`,`published_at`),
  KEY `institutos_financiados_created_by_id_fk` (`created_by_id`),
  KEY `institutos_financiados_updated_by_id_fk` (`updated_by_id`),
  CONSTRAINT `institutos_financiados_created_by_id_fk` FOREIGN KEY (`created_by_id`) REFERENCES `admin_users` (`id`) ON DELETE SET NULL,
  CONSTRAINT `institutos_financiados_updated_by_id_fk` FOREIGN KEY (`updated_by_id`) REFERENCES `admin_users` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla default.institutos_financiados: ~6 rows (aproximadamente)
INSERT INTO `institutos_financiados` (`id`, `document_id`, `nombre`, `instituto_siglas`, `area`, `puntaje`, `resultado`, `observaciones`, `anio`, `created_at`, `updated_at`, `published_at`, `created_by_id`, `updated_by_id`, `locale`, `objetivos`) VALUES
	(7, 'b4r9tcgbh965zfrflnhy37t2', 'INSTITUTO DE INVESTIGACIÓN E INNOVACIÓN EN PRODUCCIÓN, SEGURIDAD ALIMENTARIA Y AGROINDUSTRIA (IPSAA)', 'IPSAA', 'CULTIVOS ANDINOS', '14,05', 'GANADOR ', 'Proyecto seleccionado como ganador\nAlto impacto en innovación agroindustrial', '2025', '2026-04-30 14:43:39.199000', '2026-05-04 03:25:29.443000', NULL, NULL, 1, NULL, NULL),
	(9, 'ter8cj0tuiypwwq88f7meraj', 'INSTITUTO DE INVESTIGACIÓN EN INTELIGENCIA COMPUTACIONAL Y CIENCIA DE DATOS - IICCD', 'IICCD', 'MEDIO AMBIENTE Y ENERGÍA', '13,75', 'GANADOR ', '\nUso de tecnologías emergentes\nEnfoque en sostenibilidad ambiental', '2025', '2026-04-30 14:44:38.648000', '2026-05-04 03:25:53.608000', NULL, NULL, 1, NULL, NULL),
	(11, 'c4q4pefsaurm8vdgt2je1olm', 'INSTITUTO DE INVESTIGACIÓN Y PROMOCIÓN DE CAMÉLIDOS SUDAMERICANOS', 'IIPCSA', 'CAMÉLIDOS', '10,95', 'GANADOR ', 'Enfoque sanitario y productivo\nAplicación del enfoque One Health', '2025', '2026-04-30 14:45:53.559000', '2026-05-04 03:26:25.396000', NULL, NULL, 1, NULL, NULL),
	(13, 'b4r9tcgbh965zfrflnhy37t2', 'INSTITUTO DE INVESTIGACIÓN E INNOVACIÓN EN PRODUCCIÓN, SEGURIDAD ALIMENTARIA Y AGROINDUSTRIA (IPSAA)', 'IPSAA', 'CULTIVOS ANDINOS', '14,05', 'GANADOR ', 'Proyecto seleccionado como ganador\nAlto impacto en innovación agroindustrial', '2025', '2026-04-30 14:43:39.199000', '2026-05-04 03:25:29.443000', '2026-05-04 03:25:29.467000', NULL, 1, NULL, NULL),
	(14, 'ter8cj0tuiypwwq88f7meraj', 'INSTITUTO DE INVESTIGACIÓN EN INTELIGENCIA COMPUTACIONAL Y CIENCIA DE DATOS - IICCD', 'IICCD', 'MEDIO AMBIENTE Y ENERGÍA', '13,75', 'GANADOR ', '\nUso de tecnologías emergentes\nEnfoque en sostenibilidad ambiental', '2025', '2026-04-30 14:44:38.648000', '2026-05-04 03:25:53.608000', '2026-05-04 03:25:53.632000', NULL, 1, NULL, NULL),
	(15, 'c4q4pefsaurm8vdgt2je1olm', 'INSTITUTO DE INVESTIGACIÓN Y PROMOCIÓN DE CAMÉLIDOS SUDAMERICANOS', 'IIPCSA', 'CAMÉLIDOS', '10,95', 'GANADOR ', 'Enfoque sanitario y productivo\nAplicación del enfoque One Health', '2025', '2026-04-30 14:45:53.559000', '2026-05-04 03:26:25.396000', '2026-05-04 03:26:25.411000', NULL, 1, NULL, NULL);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;

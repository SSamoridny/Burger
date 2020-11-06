DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE `burgers` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `burger_name` varchar(30),
  `devoured` boolean
);
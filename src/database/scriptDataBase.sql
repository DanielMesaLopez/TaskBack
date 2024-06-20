create database Task;
use Usuario; 

CREATE TABLE `Usuario` (
  `id_usuario` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_usuario`))
ENGINE = InnoDB;

INSERT INTO Usuario (id_usuario, username, email, password ) VALUES
    (1, 'DanielLopez', 'al0793lzms@gmail.com','2868'),
    (2, 'JorgeM', 'jorgeM@gmail.com', '1234'),
    (3, 'LuisG', 'luisgomez@gmail.com', '0624'),
    (4, 'AlfredoV', 'alfredovargas@gmail.com', '1193');
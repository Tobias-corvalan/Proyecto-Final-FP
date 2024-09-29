CREATE DATABASE webstore;
USE webstore;
-- CREATE TABLE comment(
--     id INT IDENTITY(1, 1) PRIMARY KEY,
--     id_usuario INT NOT NULL,
--     nombre VARCHAR(50) NOT NULL,
--     localidad VARCHAR(50) NOT NULL,
--     provincia VARCHAR(50) NOT NULL,
--     descripcion VARCHAR(250) NOT NULL,
-- )
CREATE TABLE usuario(
    id INT IDENTITY(1, 1) PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL, 
    contraseña VARCHAR(255) NOT NULL,
);

SELECT *FROM usuario;
DROP TABLE usuario;
DELETE FROM usuario;
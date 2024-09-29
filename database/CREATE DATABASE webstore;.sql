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

INSERT INTO comment (id_usuario,nombre,localidad,provincia,descripcion) VALUES(1, 'Tobias','Quilmes','Buenos aires','Muy buena pagina me sirvio para encontrar por fin un alquiler digno');
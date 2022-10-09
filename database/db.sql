CREATE DATABASE login;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    usuario VARCHAR(255),
    clave VARCHAR(255)
);

INSERT INTO users (id, usuario1, clave)
VALUES (1,'Romi', 12345);

INSERT INTO users (usuario1, clave)
VALUES ('Romi', 12345);
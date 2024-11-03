CREATE TABLE products (
    pid SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    price NUMERIC(10, 2) NOT NULL,
	image VARCHAR(250),
	deleted SMALLINT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO products (pid, name, price, deleted) VALUES
(1, 'Nevera No Frost 360 Lts', 2040800, 0),
(2, 'Televisor OLED 55in', 4499900, 0),
(3, 'Escritorio Ajustable Modulart', 899990, 0),
(4, 'Poltrona Gunnared', 1199990, 0),
(5, 'Audífonos Inalámbricos WH-1000XM5', 1249900, 0),
(6, 'Bicicleta de Montaña Marlin 7', 2499900, 0),
(7, 'Nintendo Switch V2 + Joy-Con', 1014035, 0),
(8, 'Apple Watch Series 8', 2149900, 0),
(9, 'El Juego del Ángel - Carlos Ruiz Zafón', 64900, 0),
(10, 'Linterna LED Multifunción 3X1', 179900, 0),
(11, 'Cafetera Espresso Manual DeLonghi', 799900, 0),
(12, 'Monitor UltraSharp 27in', 1499900, 0),
(13, 'Camiseta Selección Colombia', 349950, 0),
(14, 'Cámara EOS M50', 2399900, 0),
(15, 'Aspiradora Inalámbrica V11', 2899900, 0),
(16, 'El Libro de Bill - Alex Hirsch', 38400, 0),
(17, 'Reloj G-Shock', 599900, 0),
(18, 'Mochila SuperBreak', 149900, 0);

SELECT * FROM products;
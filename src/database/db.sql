CREATE TABLE products (
    pid SERIAL PRIMARY KEY,
    name VARCHAR(250) NOT NULL,
    price NUMERIC(10, 2) NOT NULL,
    quantity INT DEFAULT 0,
	image VARCHAR(100),
	deleted INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

SELECT * FROM products;
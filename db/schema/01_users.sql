-- Drop and recreate Users table (Example)

DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL DEFAULT 'guest',
  email VARCHAR(255) NOT NULL DEFAULT 'guest@fuber.com',
  password VARCHAR(255) NOT NULL DEFAULT 'password'
);

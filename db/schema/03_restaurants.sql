DROP TABLE IF EXISTS restaurants CASCADE;

-- did not include rating, number_of_order. reconsidering type and location
CREATE TABLE restaurants (
  id SERIAL PRIMARY KEY NOT NULL,
  account_id INTEGER REFERENCES accounts(id) NOT NULL,
  location VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  type VARCHAR(100) NOT NULL,
  diet VARCHAR(255),
  price_range INTEGER NOT NULL,
  image VARCHAR(1000) NOT NULL,
  date_joined DATE DEFAULT now(),
  date_ended DATE,
  rating INTEGER NOT NULL DEFAULT 0,
  delivery_fee VARCHAR(55) DEFAULT 'free',
  delivery_time INTEGER DEFAULT 30,
  active BOOLEAN DEFAULT TRUE
);

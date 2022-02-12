DROP TABLE IF EXISTS accounts CASCADE;

-- excluded number_of_orders, total_spent, and transactions because that can be calculated. favorites can be a separate one-to-one table for accounts.
CREATE TABLE accounts (
  id SERIAL PRIMARY KEY NOT NULL,
  owner_id INTEGER REFERENCES users(id) NOT NULL,
  owner_type VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  company VARCHAR(255) DEFAULT 'n/a',
  date_joined DATE DEFAULT now(),
  date_ended DATE,
  active BOOLEAN DEFAULT TRUE
);

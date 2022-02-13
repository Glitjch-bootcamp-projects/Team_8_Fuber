DROP TABLE IF EXISTS orders CASCADE;

-- using account_id instead of user_id because only accounts can place order.
CREATE TABLE orders (
  id SERIAL PRIMARY KEY NOT NULL,
  account_id INTEGER REFERENCES accounts(id) NOT NULL,
  order_date DATE NOT NULL,
  order_time TIME NOT NULL,
  order_status_id INTEGER REFERENCES statuses(id)
);

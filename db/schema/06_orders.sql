DROP TABLE IF EXISTS orders CASCADE;

CREATE TABLE orders (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) NOT NULL,
  order_date DATE NOT NULL,
  order_time TIME NOT NULL,
  order_status_id INTEGER REFERENCES statuses(id)
);

DROP TABLE IF EXISTS lines CASCADE;

-- excluded Qty because that can be calculated. excluded price because can be found it items
CREATE TABLE lines (
  id SERIAL PRIMARY KEY NOT NULL,
  order_id INTEGER REFERENCES orders(id) NOT NULL,
  item_id INTEGER REFERENCES items(id) NOT NULL
);

// load .env data into process.env
require("dotenv").config();

// Web server config
const PORT = process.env.PORT || 8080;
const sassMiddleware = require("./lib/sass-middleware");
const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require('body-parser');

// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(
  "/styles",
  sassMiddleware({
    source: __dirname + "/styles",
    destination: __dirname + "/public/styles",
    isSass: false, // false => scss, true => sass
  })
);

app.use(express.static("public"));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const usersRoutes = require("./routes/users");
const accountsRoutes = require("./routes/accounts");
const restaurantsRoutes = require("./routes/restaurants");
const ordersRoutes = require("./routes/orders");
const itemsRoutes = require("./routes/items");
const orderStatusesRoutes = require("./routes/statuses");
const orderLineItemsRoutes = require("./routes/lines");

// const placeOrderRoutes = require("./routes/place-order")
// const checkoutRoutes = require("./routes/checkout")

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
app.use("/api/users", usersRoutes(db));
app.use("/api/accounts", accountsRoutes(db));
app.use("/api/restaurants", restaurantsRoutes(db));
app.use("/api/orders", ordersRoutes(db));
app.use("/api/items", itemsRoutes(db));
app.use("/api/statuses", orderStatusesRoutes(db));
app.use("/api/lines", orderLineItemsRoutes(db));

// Note: mount other resources here, using the same pattern above

// app.get("/address", (req, res) => { // base path 'address' to match class name, for now.
//   const getRestaurantsByAddress = `SELECT * FROM restaurants WHERE location LIKE $1 LIMIT 3;`;
//   const values = [req.query.address];
//   console.log('values', values);
//   return db.query(getRestaurantsByAddress, values)
//     // .then(data => {
//     //   const templateVars = {
//     //     restaurants: data.rows,
//     //   }
//     //   db.query(`SELECT * FROM items LIMIT 3;`, (err, res) => {
//     //     if (err) { 
//     //       console.log(err);
//     //     }
//     //     console.log('query for items!!!!!!!!!', res.rows);
//     //     return templateVars.items = res.rows
//     //   })
//     //   console.log('first promise ======', templateVars);
//     //   return templateVars;
//     // })
//     .then(data => {
//       console.log('consolelog',data);
//       const templateVars = {
//         restaurants: data.rows,
//       }
//       console.log("console log",templateVars);
//       res.render("restaurants", templateVars);
//     })
//     .catch(error => console.log(error));
// })

// TESING TWO QUERIES -------------------------
// app.get("/test", (req, res) => {
//   console.log("HELLLLLOOOOOOO+++");
//   return db.query(`SELECT * FROM restaurants WHERE location = 'vancouver';  SELECT * FROM items LIMIT 3;`)
//     .then(data => {
//       console.log("data from test ", data[0].rows, data[1].rows);
//     })
//     .catch(error => console.log(error))
// });
// --------------------------------------------

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});


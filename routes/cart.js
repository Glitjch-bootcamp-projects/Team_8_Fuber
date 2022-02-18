/*
 * All routes for cart are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router = express.Router();
const { getCart, addToCart } = require("../lib/cart-db");


module.exports = (db) => {

  // load cart page
  router.get("/", (req, res) => {
    res.render("../views/partials/_cart");
  });

  // add items to cart from menu
  router.get("/add-items", (req, res) => {
    return db.query(`SELECT * FROM items WHERE rest_id = 3`)
      .then(data => {
          items = data.rows
        res.json({items});
      })
  });

  // pushes chicken kebab into database
  router.post("/", (req, res) => {
    addToCart(req.body);
  })

  // when user clicks checkout, responds with kebab db to send to cart
  router.get("/cart-kebab", (req, res) => {
  });

  return router;
};
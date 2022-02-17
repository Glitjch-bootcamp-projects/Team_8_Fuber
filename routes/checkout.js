/*
 * All routes for checkout are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router = express.Router();
const cartDB = require("../lib/cart-db");

module.exports = (db) => {

  // load checkout page
  router.get("/", (req, res) => {
    res.render("checkout")

  })


  return router;
};

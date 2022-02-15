/*
 * All routes for finalPages are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

module.exports = (db) => {

  // load page
  router.get("/", (req, res) => {
    res.render("finalPage")
  });

  return router;
};

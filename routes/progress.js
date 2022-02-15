/*
 * All routes for progress are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

module.exports = (db) => {

 // load progress page
 router.get("/", (req, res) => {
  res.render("progress");
});


  return router;
};

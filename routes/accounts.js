/*
 * All routes for accounts are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

module.exports = (db) => {


  router.get("/", (req, res) => {
    db.query(`SELECT * FROM accounts;`)
      .then(data => {
        const accounts = data.rows;
        res.json({ accounts });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });


  // do not delete
  return router;
};

/*
 * All routes for menus are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router = express.Router();

module.exports = (db) => {

  // generate menu items
  router.get("/", (req, res) =>{
    return db.query(`SELECT * FROM items WHERE rest_id = 3`)
    .then( data => {
      const templateVars = {
        items: data.rows
      }
      res.render("menus", templateVars);
    })
  });

  return router;
};

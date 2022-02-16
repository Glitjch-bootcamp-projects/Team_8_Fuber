/*
 * All routes for cart are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

module.exports = (db) => {

 // load cart page
 router.get("/", (req, res) => {
  res.render("../views/partials/_cart");
});


// add items to cart from menu
  router.get("/add-items", (req, res) =>{
    console.log("hello");
    return db.query(`SELECT * FROM items WHERE rest_id = 3`)
    .then( data => {
      const templateVars = {
        items: data.rows
      }
      res.json(templateVars);

    })
  });


  return router;
};
//
//1. If we are rendering the items on .ejs page
// .then( data => {
//   const templateVars = {
//     items: data.rows
//   }
//   res.render("test",templateVars);
// })

// //2. If we are calling this route with the help of AJAX call
// .then( data => {
//   const templateVars = {
//     items: data.rows
//   }
//   res.send({result: "rohit"});
//   or
//   res.json(items);
// })

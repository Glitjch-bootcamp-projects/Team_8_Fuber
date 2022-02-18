/*
 * All routes for restaurants are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router = express.Router();
module.exports = (db) => {

  // loads restaurants page from index/home page
  router.get("/address", (req, res) => {
    const getRestaurantsByAddress = `SELECT * FROM restaurants WHERE location LIKE $1 LIMIT 20;`;
    const values = [req.query.address];
    return db.query(getRestaurantsByAddress, values)
      .then(data => {
        const templateVars = {
          restaurants: data.rows,
        }
        res.render("restaurants", templateVars);
        res.json(data.rows)
        return templateVars
      })
      .then((data) => {
        console.log("TJ json", data);
        res.json(data)
      })
      .catch(error => console.log(error));
  });


  // loads restaurants page from header
  router.get("/update-address", (req, res) => {
    const getRestaurantsByAddress = `SELECT * FROM restaurants WHERE location LIKE $1 LIMIT 20;`;
    const values = [req.query.address];
    return db.query(getRestaurantsByAddress, values)
      .then((data) => {
        res.json(data.rows)
      })
      .catch(error => console.log(error));
  });


  // when user clicks on restaurant renders menu page
  router.get("/menus/:id", (req, res) => {
    const id = req.params.id;
    console.log("id", id);
    const templateVars = {
      menus: id
    }
    res.render("menus", templateVars);
  });


  // restaurant template
  const oneDollarRest = (data) => {
    const template = `
  <% for (let restaurant of ${data}) { %>
    <div class="listings-grid-element <%= restaurant.price_range %>">
      <div class="image">
        <img src=<%=restaurant.image %> alt="Listing pic">
      </div>
      <div class="listings-text">
        <div class="listings-text-title">
          <h3>
            <%= restaurant.name %>
          </h3>
          <div class="listings-info">
            <span> $<%= restaurant.delivery_fee %> delivery fee • <%= restaurant.delivery_time %> min</span>
          </div>
        </div>
        <div class="listings-rating">
          <span>
            <%= restaurant.rating %>
          </span>
        </div>
      </div>
    </div>
    <% } %>
    `
    return template
  };


  // when user clicks on $ then filter restaurants based on $
  router.get("/one-dollar", (req, res) => {
    const query = `SELECT * FROM restaurants WHERE price_range = 1 LIMIT 6`;
    return db.query(query)
      .then(data => {
        let templateVars = {
          restaurants: data.rows
        }
        // return templateVars;
        console.log("hello");
        // console.log("routes one dollar",oneDollarRest(data.rows));
        return oneDollarRest(data.rows);
      })
      .catch(error => {
        console.log('error', error);
      })
  })


  // do not delete
  return router;
};

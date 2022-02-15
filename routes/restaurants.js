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
    console.log("api restaurant test migrating from server.js");
    const getRestaurantsByAddress = `SELECT * FROM restaurants WHERE location LIKE $1 LIMIT 6;`;
    const values = [req.query.address];
    // console.log('values', values);
    return db.query(getRestaurantsByAddress, values)
      .then(data => {
        // console.log('consolelog',data);
        const templateVars = {
          restaurants: data.rows,
        }
        // console.log("console log",templateVars);
        res.render("restaurants", templateVars);
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


  // const getRestaurantsByAddress = (req, res) => {
  //   let query = `SELECT * FROM restaurants WHERE location LIKE $1;`;
  //   const values = [req.query.address];
  //   return db.query(query, values)
  //     .then(data => {
  //       console.log('++++++data.rows', data.rows);
  //       return res.json({ data: data.rows })
  //     })
  //     .catch(error => console.log(error));
  // };


    // // get all restaurants
  // router.get("/all-restaurants", (req, res) => {
  //   db.query(`SELECT * FROM restaurants;`)
  //     .then(data => {
  //       const restaurants = data.rows;
  //       res.json({ restaurants });
  //     })
  //     .catch(err => {
  //       res
  //         .status(500)
  //         .json({ error: err.message });
  //     });
  // });


    // get restaurants from home based on address. Using simple filter e.g. include Vancouver, for now
  // router.get("/location-based", (req, res) => {
  //   console.log("+++++++++location-based in routes");
  //   console.log('++++++++req', req.query);
  //   const getRestaurantsByAddress = `SELECT * FROM restaurants WHERE location LIKE $1;`;
  //   const values = [req.query.address];
  //   return db.query(getRestaurantsByAddress, values)
  //     .then(data => {
  //       console.log('++++++data.rows', data.rows);
  //       res.json({ data: data.rows })
  //     })
  //     .catch(error => console.log(error));
  // });
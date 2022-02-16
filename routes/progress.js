/*
 * All routes for progress are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const sendTwilio = require('../lib/twilio');
const router = express.Router();

module.exports = (db) => {

  // load progress page
  router.get("/", (req, res) => {
    sendTwilio();
    res.render("progress");
  });

  // setting up for second message
  router.get("/order-ready", (req, res) => {
    sendTwilio("FüBer notice: your food is ready for delivery!");
    res.end()
  });
  router.get("/order-delivered", (req, res) => {
    sendTwilio("FüBer notice: your FüBer feast has arrived. Dig in!");
    res.end()
  });

  // testing twilio
  router.get("/twilio", (req, res) => {
    const twilioMessage = sendTwilio();
    console.log("twilio message", twilioMessage);

    return;
  });


  return router;
};

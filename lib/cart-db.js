const { json } = require("express");

const getCart = function () {
 let data =  window.sessionStorage.getItem('cart')
 return JSON.parse(data);
};

const addToCart = function (item) {
  let cart = getCart();
  cart.push(item)
  window.sessionStorage.setItem('cart', JSON.stringify(cart))
};

module.exports = { addToCart, getCart };
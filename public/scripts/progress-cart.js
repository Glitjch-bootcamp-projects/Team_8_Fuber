// modifyng checkout page
$(() => {
  const getCart = function () {
    let data = window.sessionStorage.getItem('cart')
    return JSON.parse(data) || [];
  };

  const getTotal = function () {
    let data = window.sessionStorage.getItem('total')
    console.log("TJ getTotal() add-to-cart.js data", JSON.parse(data));
    return JSON.parse(data) || [];
  }

  // connects to route cart, when user checksout from cart, log
  $("progress.ejs").ready(() => {
    console.log("TJ client-checkout doc.ready");

    // create each item for ejs
    const createItem = function (item) {
      const $itemTemplate = `
      <p>${item.name}<span class="price">$${item.price / 100}</span></p>
      `
      return $itemTemplate;
    };

    const updateCartTotal = function (prices) {
      let calculateEach = 0;
      prices.forEach((price) =>{
        calculateEach += price
      })
      $('.cart-checkout-total').text((calculateEach / 100).toFixed(2));
      console.log(calculateEach);
    }

    const addToTotal = function (price) {
      let total = getTotal();
      total.push(price);
      window.sessionStorage.setItem('total', JSON.stringify(total))
    };

    // modifies the checkout cost button
    const addTotalCart = function (price) {
      const originalTotal = Number($(".cart-checkout-total").text());
      const newTotal = Number(price);
      $(".cart-checkout-total").text((originalTotal + newTotal / 100).toFixed(2))
    };

    const appendItem = function (items) {
      $(".checkout-items").empty();
      for (const item of items) {
        if (item.name === "Chicken Kebab") {
          $(".checkout-items").append(
            createItem(item)
          )
        }
      }
    };

    appendItem(getCart());
    updateCartTotal(getTotal());

    $.ajax({
      url: "/api/cart/cart-kebab",
      method: "get",
      success: function (result) {
        addTotalCart(result.items[0].price);
        addToCart(result.items[0])
        addToTotal(result.items[0].price)
        appendItem(getCart());
        console.log("TJ client-checkout result", result);
        // appendItems(result.items);
        // addTotalCart(result.items[0].price);
      }
    }
    )
  })

});

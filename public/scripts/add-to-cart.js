//add items from menu to cart

// const { ModelBuildPage } = require("twilio/lib/rest/autopilot/v1/assistant/modelBuild");

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

  const displayCartCount = function () {
    const $count = $('#cart-counter')
    let count = getCart().length
    $count.text(`Cart • ${count}`);
  };
  displayCartCount();

  // create each item for ejs
  const createItem = function (item) {
    const $itemTemplate = `
      <div class="item">
        <div class="item-quantity">
          1 <i data-feather="chevron-down"></i>
        </div>
        <div class="item-info">
          <div class="item-name">
            ${item.name}
          </div>
          <div class="item-price">
            $${item.price / 100}
          </div>
        </div>
      </div>
      <script>
        feather.replace()
      </script>
    `
    return $itemTemplate;
  };

  const addToCart = function (item) {
    let cart = getCart();
    cart.push(item);
    window.sessionStorage.setItem('cart', JSON.stringify(cart))
  };

  const addToTotal = function (price) {
    let total = getTotal();
    total.push(price);
    window.sessionStorage.setItem('total', JSON.stringify(total))
  };

  const appendItems = function (items) {
    $(".cart-items").empty();
    for (const item of items) {
      if (item.name === "Chicken Kebab") {
        $(".cart-items").append(
          createItem(item)
        )
      }
    }
  };

  const updateCartTotal = function (prices) {
    let calculateEach = 0;
    prices.forEach((price) =>{
      calculateEach += price
    })
    $('.cart-checkout-total').text((calculateEach / 100).toFixed(2));
  }

  appendItems(getCart());
  updateCartTotal(getTotal());
  $('.feather-plus-circle').click(function () {
    // add items to the container

    // modifies the checkout cost button
    const addTotalCart = function (price) {
      const originalTotal = Number($(".cart-checkout-total").text());
      const newTotal = Number(price);
      $(".cart-checkout-total").text((originalTotal + newTotal / 100).toFixed(2))
    };

    $.ajax({
      url: "/api/cart/add-items",
      method: "GET",
      success: function (result) {
        addTotalCart(result.items[0].price);
        addToCart(result.items[0])
        addToTotal(result.items[0].price)
        appendItems(getCart());
      },
      error: function (err) {
        console.log("error", err);
      }
    });
  })

  $('.feather-plus-circle').click(function () {
    displayCartCount()
  })



});
//add items from menu to cart

// const { ModelBuildPage } = require("twilio/lib/rest/autopilot/v1/assistant/modelBuild");

$(() => {

  // create each item for ejs
  const createItems = function (item) {
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

  $('.feather-plus-circle').click(function () {
    // add items to the container
    const appendItems = function (items) {
      for (const item of items) {
        if (item.name === "Chicken Kebab") {
          $(".cart-items").append(
            createItems(item)
          )
        }
      }
    };

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
        appendItems(result.items);
        addTotalCart(result.items[0].price);
        // send cart info to database
        $.ajax({
          url: "/api/cart",
          method: "POST",
          data: result.items[0],
        })
          .then((result) => {
            console.log("TJ add-to-cart ajax post result", result)
          })
          .catch(error => { console.log(error) })
      },
      error: function (err) {
        console.log("error", err);
      }
    });

  })

});
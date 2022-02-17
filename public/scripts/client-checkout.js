// modifyng checkout page

$(() => {

  // connects to route cart, when user checksout from cart, log
  $("checkout.ejs").ready(() => {
    console.log("TJ client-checkout doc.ready");

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
      url: "/api/cart/cart-kebab",
      method: "get",
      success: function (result) {
        console.log("TJ client-checkout result", result);
        // appendItems(result.items);
        // addTotalCart(result.items[0].price);
      }
    }
    )
  })

});
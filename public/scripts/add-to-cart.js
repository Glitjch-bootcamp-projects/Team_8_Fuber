//add items from menu to cart

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
    console.log("add-to-cart");
    // add items to the container
    const appendItems = function (items) {
      console.log("add-to-cart append items");
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
      console.log("addTotalCart",      $(".cart-checkout-total").text());
      const originalTotal =  Number($(".cart-checkout-total").text());
      const newTotal = Number(price);
      $(".cart-checkout-total").text(`${originalTotal + newTotal / 100}`)
    };
    // calculates total based on item added


    $.ajax({
      url: "/api/cart/add-items",
      method: "GET",
      success: function (result) {
        appendItems(result.items);
        addTotalCart(result.items[0].price);
      },
      error: function (err) {
        console.log("error", err);
      }
    });

  })

});
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
    // stretch: sort them out based on type



    $.ajax({
      url: "/api/cart/add-items",
      method: "GET",
      success: function (result) {
        console.log("awax");
        appendItems(result.items)
      },
      error: function (err) {
        console.log("error", err);
      }
    });

  })

});
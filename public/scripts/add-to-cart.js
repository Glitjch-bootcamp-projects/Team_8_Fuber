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
    `
    return $itemTemplate;
  };

  $('.feather-plus-circle').click(function () {

    // add items to the container
    const appendItems = function (items) {
      console.log("append items");
      for (const item of items) {
        if (item.name === "Chicken Kebab") {
          $(".cart-items").append(
            createItems(item)
          )
        }
      }
    };
    // stretch: sort them out based on type

    const cartCounter = function () {
      let i = 1;
      $('.feather-plus-circle').click(function () {
        const $count = $('#cart-counter')
        $count.text(`Cart • ${i++}`)
      })
    };


    $.ajax({
      url: "/api/cart/add-items",
      method: "GET",
      success: function (result) {
        console.log("awax");
        appendItems(result.items)
        cartCounter();
      },
      error: function (err) {
        console.log("error", err);
      }
    });

  })

});
//generate menu with database items
$(() => {

  // create each item for ejs
  const createItems = function (item) {
    console.log("create item");
    const $itemTemplate = `
      <div class="item-grid ">
        <div class="item">${item.name}
          <span class="item-description">$${item.price / 100} | ${item.description}</span>
        </div>
        <div class="menu-add">
          <i data-feather="plus-circle"></i>
        </div>
      </div>
      <script src="https://unpkg.com/feather-icons"></script>
      <script>
      feather.replace()
      </script>
     `
    return $itemTemplate;
  }
  // add items to the container
  const appendItems = function (items) {
    console.log("append items");
    $(".menu-items.kebabs").append(
    '<script type="text/javascript" src="/scripts/add-to-cart.js"></script>'
    )
    for (const item of items) {
      if (item.type === "kebabs") {
        $(".menu-items.kebabs").append(
          createItems(item)
        )
      }
    }
  }
  // stretch: sort them out based on type

  const cartCounter = function () {
    let i = 1;
    $('.feather-plus-circle').click(function () {
      const $count = $('#cart-counter')
      $count.text(`Cart • ${i++}`)
    })
  }


  $.ajax({
    url: "/api/cart/add-items",
    method: "GET",
    success: function (result) {
      console.log("adax");
      appendItems(result.items)
      cartCounter();
    },
    error: function (err) {
      console.log("error", err);
    }
  });


});
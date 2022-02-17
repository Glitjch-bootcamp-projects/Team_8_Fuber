$(() => {
  // when user clicks on change button updates button text
  $(".addressBtn").click((event) => {
    event.preventDefault();
    $(".header-address-text").text($(".addressBar").val())
    $("#modal").css("transform", "scale(0)");
    $("#overlay").css("opacity", "0");

    const generateRest = function (restaurant) {
      const restTemplate = `
        <div class="listings-grid-element ${restaurant.price_range}">
          <div class="image">
            <img src=${restaurant.image} alt="Listing pic">
          </div>
          <div class="listings-text">
            <div class="listings-text-title">
              <h3>
                ${restaurant.name}
              </h3>
              <div class="listings-info">
                <span> $${restaurant.delivery_fee / 100} delivery fee • ${restaurant.delivery_time - 15}-${
                        restaurant.delivery_time} min</span>
              </div>
            </div>
            <div class="listings-rating">
              <span>
                ${restaurant.rating}
              </span>
            </div>
          </div>
        </div>
      `;
      return restTemplate;

    };

    // generate restaurants intoc container
    const addRest = function (restaurants) {
      for (const restaurant of restaurants) {
        $(".rest-container").append(generateRest(restaurant));
      }
    };

    $.ajax({
      url: `/api/restaurants/update-address?address=${$('#address').val()}`,
      method: "get",
      success: function(result) {
        // console.log("ajax change-address", result);
        $(".rest-container").empty()
        addRest(result);
      }
    })
  })


});

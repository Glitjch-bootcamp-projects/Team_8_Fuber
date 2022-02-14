// Client facing scripts here
const local = "http://localhost:8080";
$(() => {
  console.log("app.js accessed");

  // Jacky
  //toggles schedule on main page
  $('.Schedule').click(function () {
    $('#date').slideToggle();
    $('#time').slideToggle();
  });

  $("#kebab-kingdom").on('click', (data) => {
    console.log("kebab-kingdom id accessed");
    window.location.href = `${local}/api/restaurants/menus/kebab-kingdom`;
  });

  // testing submit form
  $(".addressBtn").on('click', (data) => {
    console.log('click testing submit form');
    const serializeData = $(".addressBar").serialize();
    const address = $("#address").val().serialize();
    $.ajax({
      url: "/api/restaurants/address",
      type: 'get',
      data: { address },
      success: function (data) {
        console.log("ajax data from backend", data);
      },
      error: function (error) {
        console.log(error);
      }
    })
  })

});




  // selects the restaurants
  // const generateRestaurants = function () {
  //   console.log('generating restaurants');
  //   $.get("/api/restaurants/test", (req, res) => {
  //     console.log('app.js generateRestaurants req', req);
  //   })
  //     .catch(error => console.log(error));
  // }
  // generateRestaurants();

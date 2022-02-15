// Client facing scripts here

$(() => {

  // Jacky
  //toggles schedule on main page
  $('.Schedule').click(function () {
    $('#date').slideToggle();
    $('#time').slideToggle();
  });

  $('#p1').click(function () {
    $('.1').show();
    $(".2").hide();
    $(".3").css("display", "none");
    $(".4").css("display", "none");
  })

  $('#p2').click(function () {
    $('.1').css("display", "none");
    $('.2').show();
    $('.3').css("display", "none");
    $('.4').css("display", "none");
  })

  $('#p3').click(function () {
    $('.1').css("display", "none");
    $('.2').css("display", "none");
    $('.3').show();
    $('.4').css("display", "none");
  })

  $('#p4').click(function () {
    $('.1').css("display", "none");
    $('.2').css("display", "none");
    $('.3').css("display", "none");
    $('.4').show();
  })

  console.log("client.js touched");
  const local = "http://localhost:8080";
  $(() => {
    console.log("app.js accessed");

    // Jacky
    //toggles schedule on main page
    $('.Schedule').click(function () {
      $('#date').slideToggle();
      $('#time').slideToggle();
    });

    // when user clicks on restaurant menu appears
    $("#kebab-kingdom").on('click', (data) => {
      console.log("kebab-kingdom id accessed");
      window.location.href = `${local}/api/restaurants/menus/kebab-kingdom`;
    });

    // when user filters restaurant by clicking on $ button on side bar, restaurants filter
    $(".one-dollar").on('click', () => {
      console.log("ajax");
      // $("#kebab-kingdom").empty();
      $.ajax({
        url: "/api/restaurants/one-dollar",
        type: 'get',
        data: $(".one-dollar"),
        success: () => console.log('data from app.js'),
        error: error => console.log(error)
      })
        .then((data) => {
          $("#kebab-kingdom").append(data);
          console.log("log", data);
        })
    })


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


    // store this data somewhere
    const serializeData = $(".addressBar").serialize();
    console.log('serializedata:    ', serializeData);
    const address = $("#address").val();
    $.ajax({
      url: "/api/restaurants/location-based",
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
  // .then(() => generateRestaurants)

});

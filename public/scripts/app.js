// Client facing scripts here


$(() => {
  console.log("client.js touched");
  const local = "http://localhost:8080";
  
  $('.changeAddressBtn').click(function() {
    $("#modal").css("transform", "scale(1)");
    $("#overlay").css("opacity", "1");
  })

  $('.closeBtn').click(function() {
    $("#modal").css("transform", "scale(0)");
    $("#overlay").css("opacity", "0");
  })

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


   //scroll views to where menu-subheaders are
   $('#m1').click(function () {
    var elm = document.getElementById('kb')
    elm.scrollIntoView(true);
  })

  $('#m2').click(function () {
    var elm = document.getElementById('sa')
    elm.scrollIntoView(true);
  })

  $('#m3').click(function () {
    var elm = document.getElementById('de')
    elm.scrollIntoView(true);
  })

  $('#m4').click(function () {
    var elm = document.getElementById('dk')
    elm.scrollIntoView(true);
  })


    // when user clicks on restaurant menu appears
    $("#kebab-kingdom").on('click', (data) => {
      window.location.href = `${local}/api/restaurants/menus/kebab-kingdom`;
    });

    // sends message as order is being prepared
    $("#finalizing-order").click(()=>{
      $.get("/api/progress/order-ready")
    });
    $("#order-delivered").click(()=>{
      $.get("/api/progress/order-delivered")
    });

});

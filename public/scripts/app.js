// Client facing scripts here

$(() => {
  console.log("client.js touched");
  const local = "http://localhost:8080";

  //on click add addressBar value to session storage. Also remove address saved in session on click.
  $(`.addressBtn`).click(function(){
    sessionStorage.removeItem(`address`);
    window.sessionStorage.setItem(`address`, $(`.addressBar`).val())
  });

  //retrieve value in session storage and add to .ejs for button when page is loaded
  $(`restaurants.ejs`).ready(() =>{
    $(".header-address-text").text(window.sessionStorage.getItem(`address`))
  });
  
  //creates a small window to change address
  $('.changeAddressBtn').click(function() {
    $("#modal").css("transform", "scale(1)");
    $("#overlay").css("opacity", "1");
  })

  //close button for the small window
  $('.closeBtn').click(function() {
    $("#modal").css("transform", "scale(0)");
    $("#overlay").css("opacity", "0");
  })

  //toggles schedule on main page
  $('.Schedule').click(function () {
    $('#date').slideToggle();
    $('#time').slideToggle();
  });

  //filters based on price
  $('#p1').click(function () {
    $('.1').show();
    $(".2").hide();
    $(".3").hide();
    $(".4").hide();
  })

  $('#p2').click(function () {
    $('.1').hide();
    $('.2').show();
    $('.3').hide();
    $('.4').hide();
  })

  $('#p3').click(function () {
    $('.1').hide();
    $('.2').hide();
    $('.3').show();
    $('.4').hide();
  })

  $('#p4').click(function () {
    $('.1').hide();
    $('.2').hide();
    $('.3').hide();
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

// Client facing scripts here

$(()=> {

  // Jacky
    //toggles schedule on main page
    $('.Schedule').click(function() {
      $('#date').slideToggle();
      $('#time').slideToggle();
    });

    $('#p1').click(function(){
      $('.1').show();
      $(".2").hide();
      $(".3").css("display", "none");
      $(".4").css("display", "none");
    })

    $('#p2').click(function(){
      $('.1').css("display", "none");
      $('.2').show();
      $('.3').css("display", "none");
      $('.4').css("display", "none");
    })

    $('#p3').click(function(){
      $('.1').css("display", "none");
      $('.2').css("display", "none");
      $('.3').show();
      $('.4').css("display", "none");
    })

    $('#p4').click(function(){
      $('.1').css("display", "none");
      $('.2').css("display", "none");
      $('.3').css("display", "none");
      $('.4').show();
    })

  console.log("client.js touched");

  // if user clicks on the submit button should bring user to ordering page
  // the user clicks with data in the field, the address. how can you use it?

  // renders the restaurant page NOTE: THERE IS A COMMENTED-OUT NON JQUERY ROUTE FOR THIS. IT MAY NOT WORK HERE IF SERVER DOES NOT LOOK INTO VIEWS FOLDER FROM HERE.
  // const loadRestaurantsPage = function () {
  //   console.log("browsing restaurants");
  //   $.get("/address", (req, res)=> {
  //     res.render("/restaurants")
  //   })
  //   };

    // selects the restaurants
  const generateRestaurants = function () {
    console.log('generating restaurants');
    $.get("/api/restaurants/location-based", (req, res) =>{
    })
      .catch(error => console.log(error));
  }

  // testing submit form
    $(".addressBtn").on('click', (data) => {

      console.log('click testing submit form');
  
      // store this data somewhere
      const serializeData = $(".addressBar").serialize();
      console.log('serializedata:    ', serializeData);
      const address = $("#address").val();
      $.ajax({
        url: "/api/restaurants/location-based",
        type: 'get',
        data: {address},
        success: function(data){
          console.log("ajax data from backend",data);
        },
        error: function(error) {
          console.log(error);
        }
      })

    })
    // .then(() => generateRestaurants)

});

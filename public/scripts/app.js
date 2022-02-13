// Client facing scripts here
$(()=> {
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

    })
    // .then(() => generateRestaurants)
});
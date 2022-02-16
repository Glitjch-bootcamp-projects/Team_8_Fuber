//add items from menu to cart

$(()=>{

  $('.feather-plus-circle').click(function () {
    //find the container where the items will appear within the cart page
    const $cartItemsContainer = $();

    $.ajax({
      url: "/api/cart/add-items",
      method: "GET",
      success: function(result){
        // for(let t of result.items){
        //   console.log(t);
        // }
      },
      error: function (err){
        console.log("error", err);
      }
    });

  })

});
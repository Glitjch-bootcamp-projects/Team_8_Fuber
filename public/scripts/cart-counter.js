const { ModelBuildPage } = require("twilio/lib/rest/autopilot/v1/assistant/modelBuild");

// modifying cart count
$(() => {

  const cartCounter = function () {
    let i = 1;
    $('.feather-plus-circle').click(function () {
      const $count = $('#cart-counter')
      $count.text(`Cart • ${i++}`)
    })
  }
  cartCounter();

});

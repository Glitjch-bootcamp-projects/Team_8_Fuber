$(() => {
// when user clicks on change button updates button text
$(".addressBtn").click(()=>{
  $(".header-address-text").text($(".addressBar").val())
})


});
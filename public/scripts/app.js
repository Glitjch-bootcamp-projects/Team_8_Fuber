// Client facing scripts here
$(document).ready(function() {
  //toggles schedule on main page
  $('.Schedule').click(function() {
    $('#date').slideToggle();
    $('#time').slideToggle();
  });
});
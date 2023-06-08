$(document).ready(function() {
    $("h1").fadeIn(2000);
    $(".img-fluid").hover(function() {
      $(this).css("opacity", "0.5");
    }, function() {
      $(this).css("opacity", "1");
    });
  });
  
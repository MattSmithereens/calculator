$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").slideToggle(500);
    $("#walrus-hidden").slideToggle(500);
  });

  $(".clickable-elephant").click(function() {
    $("#elephant-showing").slideToggle(500);
    $("#elephant-hidden").slideToggle(500);
    });
  });

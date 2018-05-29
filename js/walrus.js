$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").slideToggle(4000);
    $("#walrus-hidden").slideToggle(4000);
  });
});

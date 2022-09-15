// Scroll To Top
$(document).on('click', '.arrow', function(event) {
  event.preventDefault();
  var body = $("html, body");
  body.stop().animate({scrollTop:0}, 500, 'swing');
});
$(document).on('scroll', function(){
  if ($(window).scrollTop() > 100){
    $(".arrow").fadeIn();
  } else {
    $(".arrow").fadeOut();
  }
});
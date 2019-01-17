$(document).ready(function(){
   $("#design").click(function(){
       $(".create").fadeOut(400);
       $(".manage").fadeOut(400);
       $(".design").fadeIn(400);
   });
    $("#create").click(function(){
       $(".design").fadeOut(400);
       $(".manage").fadeOut(400);
       $(".create").fadeIn(400);
   });
    $("#manage").click(function(){
       $(".design").fadeOut(400);
       $(".create").fadeOut(400);
       $(".manage").fadeIn(400);
   });
    
});

(function ($) {

  	"use strict";

    /*==== Counter ====*/
    $('.counter-item').appear(function() {
    	$('.counter-number').countTo();
    });
	
})(jQuery);

$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });
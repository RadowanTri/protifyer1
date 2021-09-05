$(document).ready(function($){
    "use strict";

  //==============================
  // smooth scroll
  //==============================
  $(window).on('scroll', function() {
      if ($(window).scrollTop() > 100) {
          $("#f-header").addClass("fixed-nav");
      } else {
          $("#f-header").removeClass("fixed-nav");
      }
  });


}(jQuery));

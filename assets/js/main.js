$(document).ready(function($){
    "use strict";
  //==============================
  // smooth scroll
  //==============================

  // $(window).on('scroll', function() {
  //   var wscroll = $(this).scrollTop();
  //   //fixed-nav
  //   wscroll >1 ? $("#header").addClass("fixed");  : $("#header").removeClass("fixed");
  // });

  $(window).on('scroll', function() {
      if ($(window).scrollTop() > $('.banner-area').height()) {
          $("#navArea").addClass("fixed-nav");
          $(".navbar").addClass("container");
      } else {
          $("#navArea").removeClass("fixed-nav");
          $(".navbar").addClass("container");
      }
  });

  if(window.innerWidth<=768) {

    $(".navbar").on("click", function () {
      $('.navbar').toggle();
      $('.navbar').addClass('fixed');
    });

  }

  if(window.innerWidth<=767){
    $(".owl-carousel-testimonial").owlCarousel({
      loop:true,
      margin:20,
      nav:true,
      navText:["<i class='fas fa-arrow-left'></i>",
      "<i class='fas fa-arrow-right'></i>"],
      dots:false,
      items:1,
      responsive:{
        0:{
          items:1
        },
        600:{
          items:1
        },
        1000:{
          items:1
        }
      }
    });

  }


  // ---- testimonial carousel
  $(".owl-carousel-testimonial").owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    navText:["<i class='fas fa-arrow-left'></i>",
    "<i class='fas fa-arrow-right'></i>"],
    dots:true,
    items:1,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:1
      },
      1000:{
        items:1
      }
    }
  });
  // ---- awards carousel
  $(".awards").owlCarousel({
    loop:true,
    margin:15,
    nav:false,
    dots:true,
    items:3,
    responsive:{
      0:{
        items:1
      },
      410:{
        items:2
      },
      600:{
        items:2
      },
      1000:{
        items:3
      }
    }
  });
  // document carousel
  $(".document-grid").owlCarousel({
    loop:true,
    margin:15,
    nav:false,
    dots:false,
    items:3,
    responsive:{
      0:{
        items:2
      },
      600:{
        items:2
      },
      1000:{
        items:3
      },
      1200:{
        items:4
      }
    }
  });

  
  // Magnific popup
  // $('#youtube-video').magnificPopup({
  //   type:'iframe',
  //   iframe: {
  //     patterns: {
  //       youtube: {
  //         index: 'youtube.com/', 

  //         id: 'v=', 
  //         src: 'http://www.youtube.com/embed/%id%?autoplay=1' 
  //       }

  //     },
  //     srcAction: 'iframe_src',
  //   }
  // });


// Magnific popup
   $('#youtube-video').magnificPopup({
      type:'iframe',
      iframe: {
        patterns: {
          youtube: {
            index: 'youtube.com/', 

            id: 'v=', 
            src: 'http://www.youtube.com/embed/%id%?autoplay=1' 
          }

        },
        srcAction: 'iframe_src',
      }
    });
   
  $('#youtube-videos').magnificPopup({
    type:'iframe',
    iframe: {
      patterns: {
        youtube: {
          index: 'youtube.com/', 

          id: 'v=', 
          src: 'http://www.youtube.com/embed/%id%?autoplay=1' 
        }

      },
      srcAction: 'iframe_src',
    }
  });

$( document ).ready(function() {
     $('.read-more-content').addClass('hide')
$('.read-more-show, .read-more-hide').removeClass('hide')

// Set up the toggle effect:
$('.read-more-show').on('click', function(e) {
  $(this).next('.read-more-content').removeClass('hide');
  $(this).addClass('hide');
  e.preventDefault();
});

$('.read-more-hide').on('click', function(e) {
  var p = $(this).parent('.read-more-content');
  p.addClass('hide');
  p.prev('.read-more-show').removeClass('hide'); 
  e.preventDefault();
});
});
  // portfolio popup image
  $('.image-link').magnificPopup({type:'image'});
}(jQuery));

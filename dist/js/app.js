$(".mobile-menu-trigger").click(function () {
     $(".mobile-menu,.mobile-menu-overlay").addClass('active');
});

$(".close-btn").click(function () {
     $(".mobile-menu,.mobile-menu-overlay").removeClass('active');
});


$('#owl-blog').owlCarousel({
     items: 2,
     nav: true,
     loop: true,
     margin: 5,
     responsive: {
          0: {
               items: 1,
               margin: 0,
               center: true
          },
          600: {
               items: 2,
               center: true
          },
          1000: {
               items: 2
          }
     }
});



$(document).ready(function(){

     $("#services").waypoint(function(direction){
         if(direction == "down"){
           $(".nav-row").addClass("sticky");
           $(".nav-row").removeClass("row");
         }  else {
           $(".nav-row").removeClass("sticky");
           $(".nav-row").addClass("row");
         }
     });
     
});
     
jQuery(window).load(function() {
     $("#preloader").fadeOut(1000);


 });

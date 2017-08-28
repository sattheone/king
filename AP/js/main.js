$(window).load(function(){
    // will fade out the whole DIV that covers the website.
    jQuery(".preloader").fadeOut("slow");
});



jQuery(document).ready(function($) {

     $(document).ready(function(){
         //hides them logo when the page loads
         $("#myImage").hide();
    });
  
    // Fixa navbar ao ultrapassa-lo
    var navbar = $('#navbar-main'),
    		distance = navbar.offset().top,
            image = $("#myImage"),
        $window = $(window);

    $window.scroll(function() {
        if ($window.scrollTop() >= distance) {
            image.show();
            navbar.removeClass('navbar-fixed-top').addClass('navbar-fixed-top');
          	$("body").css("padding-top", "170px");
            $(".header").css("display", "none");


        } else {
            image.hide();
            navbar.removeClass('navbar-fixed-top');
            $("body").css("padding-top", "0px");
            $(".header").css("display", "block");
        }
    });
}); 

$(document).ready(function(){
    
    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });
    
    //Click event to scroll to top
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
    
});

// $(document).ready(function() {
  
//   $(window).scroll(function () {
//       //if you hard code, then use console
//       //.log to determine when you want the 
//       //nav bar to stick.  
//       console.log($(window).scrollTop())
//     if ($(window).scrollTop() > 280) {
//       $('#nav_bar').addClass('navbar-fixed');
//     }
//     if ($(window).scrollTop() < 281) {
//       $('#nav_bar').removeClass('navbar-fixed');
//     }
//   });
// });
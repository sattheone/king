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
              jQuery(".logosmall").fadeIn("slow");
              jQuery(".header_left").fadeOut("slow");
              jQuery(".header_right").fadeOut("slow");


        } else {
            image.hide();
            jQuery("#navbar-two").removeClass('navbar-fixed-top');
            navbar.removeClass('navbar-fixed-top');
            jQuery(".logosmall").fadeOut("slow");
            jQuery(".header_left").fadeIn("slow");
              jQuery(".header_right").fadeIn("slow");


            
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
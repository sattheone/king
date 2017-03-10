
// SHOW HIDE SIDEBAR

  $('#sidebar-button').click(function(){
  $('#main-menu').toggleClass('sidebar-hide sidebar-show');
});


// SIDEBAR MENU


$(function() {
  $('#main-menu').smartmenus({
    subMenusSubOffsetX: 6,
    subMenusSubOffsetY: -8
  });
});

// SCROLL TO TOP //Scroll Bottom Menu Fade-In

$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut();
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600);
        $('#scroll-btm').fadeIn(); 
        return false; 
    }); 
});


/*************************
      Fixed header on scroll 
*************************/

$(document).ready(function() {
  
  $(window).scroll(function () {
      //if you hard code, then use console
      //.log to determine when you want the 
      //nav bar to stick.  
      console.log($(window).scrollTop())
    if ($(window).scrollTop() > 50) {
      $('header#page-header nav .logo img').css({
    'opacity': '1',  
    'height' : 24  
    });
    }
    if ($(window).scrollTop() < 50) {
       $('header#page-header nav .logo img').css({
    'opacity': '0',  
    'height' : 0  
    });
    }
  });
});


/*************************
      SCROLL TO SUBNAV 
*************************/

$("#scroll-btm").click(function() {
    $('html, body').animate({
        scrollTop: $("#subnav").offset().top-70
    }, 500);
     $('#scroll-btm').fadeOut();
});


/*************************
      Owl carousel 
*************************/


var owl = $('.owl-carousel');
owl.owlCarousel({
    items:1,
    nav:true,
    loop:true,
    margin:10,
    autoplay:true
});

    $("#owl-pause").click(function () {
        if ($(this).attr("id") === "owl-pause") {
          owl.trigger('stop.owl.autoplay')
          $(this).attr("id", "owl-play");
          $("i",this).toggleClass("fa-play fa-pause");
        } else {
          owl.trigger('play.owl.autoplay',[5000])
          $(this).attr("id", "owl-pause");
          $("i",this).toggleClass("fa-pause fa-play");
        }
    });



// NEWS POP TOGGLE


  $('#news-close').click(function(){
  $('.toggle').toggleClass('news-wrapper-open news-wrapper-close');
});



// NEWS PAUSE

$(function () {
    $('#quote-carousel').carousel({
        interval:5000,
        pause: "false"
    });
 });
    
    $("#pauseButton").click(function () {
        if ($(this).attr("id") === "pauseButton") {
          $('#quote-carousel').carousel('pause');
          $(this).attr("id", "playButton");
          $("i",this).toggleClass("fa-play fa-pause");

        } else {
          $('#quote-carousel').carousel('cycle');
          $(this).attr("id", "pauseButton");
          $("i",this).toggleClass("fa-pause fa-play");
        }
    });
   


// FOOTER TOGGLE

$( ".widget h3" ).click(
    function() {
      $(this).parent().toggleClass('active');
    }
  );    



// FONT SIZE CHANGE


var $affectedElements = $("p"); // Can be extended, ex. $("div, p, span.someClass")

// Storing the original size in a data attribute so size can be reset
$affectedElements.each( function(){
  var $this = $(this);
  $this.data("orig-size", $this.css("font-size") );
});

$("#btn-increase").click(function(){
  changeFontSize(1);
})

$("#btn-decrease").click(function(){
  changeFontSize(-1);
})

$("#btn-orig").click(function(){
  $affectedElements.each( function(){
        var $this = $(this);
        $this.css( "font-size" , $this.data("orig-size") );
   });
})

function changeFontSize(direction){
    $affectedElements.each( function(){
        var $this = $(this);
        $this.css( "font-size" , parseInt($this.css("font-size"))+direction );
    });
}



// DROPDOWN FIX

$('a.dropdown-toggle, .dropdown-menu a').on('touchstart', function(e) {
  e.stopPropagation();
});






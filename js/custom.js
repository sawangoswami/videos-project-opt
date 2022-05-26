(function ($) {
    'use strict';
	
	 $(window).scroll(function() {
            if ($(document).scrollTop() > 50) {
                $('.nav1').addClass('affix');
                console.log("OK");
            } else {
                $('.nav1').removeClass('affix');
            }
        });


      $('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();
});


    /*owl carousel*/

$(document).ready(function() {
  
  $('.owl-carousel').owlCarousel({
   navigation:true,
    items : 3,
    itemsDesktop : [1199,3],
    itemsDesktopSmall : [992,2],
    itemsTablet: [768,2],
    itemsMobile : [542,1],
    autoPlay : true,
    pagination: false,
    navigationText : ["<div class='nav-btn prev-slide'><i class='fa fa-chevron-left'></i></div>","<div class='nav-btn next-slide'><i class='fa fa-chevron-right'></</div>"],
    loop: true,
    
  })
});

/*accorion starts here*/

  $('.head').click(function(){
  $(this).toggleClass('head-active');
  $(this).parent().find('.arrow').toggleClass('arrow-animate'  );
  $(this).parent().find('.content').slideToggle(380);
});
 
/*slick starts here*/

$(document).ready(function(){
 $('.demo').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [{
  breakpoint: 600,
   settings: {
      slidesToShow: 1,
      dots: true
    }
}
,{ 
    breakpoint: 992,
   settings: {
      slidesToShow: 2,
      dots: true
    }
},



],

 dots: true

});

});

/*count-up*/
$(document).ready(function(){
$('.counter').countUp({
  'time': 2000,
  'delay': 10
});
});

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});


})

 



(window.jQuery);
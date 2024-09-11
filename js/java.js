$(document).ready(function() {

	$(".second-car .owl-carousel ").owlCarousel({

loop: true, //это что бы карусель бесконечно прокручивалась
items: 1,
navText: ['',''],
  		// navElement: 'div',
  		nav: true,



  	});

	$(".first-car .owl-carousel ").owlCarousel({

loop: true, //это что бы карусель бесконечно прокручивалась
items: 1,
navText: ['',''],
  		// navElement: 'div',
  		nav: true,



  	});




$('.mobile-menu').on('click', function (e){
	e.preventDefault(); // с помощью этой функции наша страница не перезагружается


$('.mobile-menu').toggleClass('menu-active') // теперь при нажатии на .menu-btm у нас будет создаваться 
$('.burger').toggleClass('menu-active')
$('.ots .nav').toggleClass('menu-active')
$('.center').toggleClass('menu-active')
$('.ots').toggleClass('menu-active')
});



});	


$(window).load(function() {

	$(".zag h1 ").animated("bounceInUp", "bounceInUp");
	$(".zag h2 ").animated("rubberBand", "rubberBand");
  $(".animate ").animated("fadeInRight", "fadeOutRight");
  $(".knopochka ").animated("bounceInDown", "bounceInDown");
   $(".text ").animated("shake", "fadeOutDown");
    $(".zagol h2 ").animated("rotateIn", "fadeOutDown");
     $(".zagol h3 ").animated("lightSpeedIn", "rotateIn");
     $(".our").animated("wobble", "rotateIn");
      $(".flash").animated("flash", "rotateIn");
});






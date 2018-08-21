// Main
$(document).ready(function(){
	$('.home-banner .owl-carousel').owlCarousel({
		items: 1,
		loop: true,
		autoplay: true,
		dots: true,
		nav: false
	});

	$('.home-logo .owl-carousel').owlCarousel({
		items: 5,
		nav: true,
		loop: true,
		autoplay: true,
		dots: false,
		navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
	});
});

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
		items: 2,
		nav: true,
		loop: true,
		autoplay: true,
		dots: false,
		navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
		responsive: {
			// breakpoint from 480 up
			480: {
				items: 2,
			},
			// breakpoint from 768 up
			768: {
				items: 3,
			},
			// breakpoint from 992 up
			992: {
				items: 5,
			}
		},
	});

});

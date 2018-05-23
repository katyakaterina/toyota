$(document).ready(function() {
    $("#owl-example").owlCarousel();
  });
  $(document).ready(function() {
	$('.owl-carousel').owlCarousel({
		loop:true, 
		margin:10, 
		nav:false, 
		autoplay:true, 
		smartSpeed:1000, 
		autoplayTimeout:2000, 
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
});
 
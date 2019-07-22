$(document).ready(function () {

	var mySwiper = new Swiper('.swiper-container', {
		// Optional parameters
		direction: 'horizontal'
	})


	$('.box').click(function() {
		var whichBox = $(this).index()
		
		mySwiper.slideTo(whichBox)
	})
});
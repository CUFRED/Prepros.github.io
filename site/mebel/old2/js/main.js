jQuery(document).ready(function() {
	$('#countdown_dashboard').countDown({
		targetDate: {
			'day': 		21,
			'month': 	12,
			'year': 	2017,
			'hour': 	17,
			'min': 		34,
			'sec': 		15
		}
	});

	$('.bxslider').bxSlider({
		minSlides: 3,
		maxSlides: 3,
		slideWidth: 360,
		slideMargin: 30,
		pager: false,
		adaptiveHeight: true
	});

// How
	$('.works__item').click(function(){
	
		if ($(this).hasClass('active')) return false;
		
		var index = $('.works__item').index($(this));
		
		$('.works__item').removeClass('active');
		$(this).addClass('active');
		
		$('.works__items').removeClass('active');
		$('.works__items').eq(index).addClass('active');
		/*
		$('.how-text-item').addClass('non-visible');
		$('.how-text-item').eq(index).removeClass('non-visible');*/
		
		return false;
		
	})
});
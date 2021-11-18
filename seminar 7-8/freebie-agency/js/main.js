$(function () {
	$(".header__slider").slick({
		
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
		speed: 500,
		fade: true,
		cssEase: "linear",
	});
	$("#rating-1").barrating({
        theme: 'fontawesome-stars',
        initialRating: 4,
        readonly: true,

	});
	$("#rating-2").barrating({
        theme: 'fontawesome-stars',
        initialRating: 3,
        readonly: true,
	});
	$("#rating-3").barrating({
        theme: 'fontawesome-stars',
        initialRating: 5,
        readonly: true,
	});


	$(".rating__items").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<button class="rating__slider-btn rating-btnprev"><img src="images/svg/rating__slider-prev.svg" alt=""></button>',
		nextArrow: '<button class="rating__slider-btn rating-btnnext"><img src="images/svg/rating__slider-next.svg" alt=""></button>',
	
	});
	
	$('.burger').on('click', function(){
		$('.nav__list').toggleClass('nav__list--mobile')
	});
	$('.burger').on('click', function(){
		$('.burger').toggleClass('burger--mobile')
	});

	var mixer = mixitup('.works__work-items');
});

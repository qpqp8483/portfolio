$(function(){
    $('.slick-container .slick-wrapper.type1').slick({
        autoplay:true,
		dots:false,
		infinite:true,
		slidesToShow:1,
		slidesToScroll:1,
		slickPlay:true,
		slickPause:true,
        prevArrow: $('.col1 .slick-button-prev'),
		nextArrow: $('.col1 .slick-button-next')
    });
	$('.col1 .slick-button-start').click(function(){
		$('.slick-container .slick-wrapper.type1').slick('slickPlay');
	});
	
	$('.col1 .slick-button-stop').click(function(){
		$('.slick-container .slick-wrapper.type1').slick('slickPause');
	});
	
    $('.slick-container .slick-wrapper.type2').slick({
        autoplay:true,
		dots:false,
		infinite:true,
		slidesToShow:1,
		slidesToScroll:1,
		slickPlay:true,
		slickPause:true,
        prevArrow: $('.col2 .slick-button-prev'),
		nextArrow: $('.col2 .slick-button-next')
    });
	$('.col2 .slick-button-start').click(function(){
		$('.slick-container .slick-wrapper.type2').slick('slickPlay');
	});
	
	$('.col2 .slick-button-stop').click(function(){
		$('.slick-container .slick-wrapper.type2').slick('slickPause');
	});

	$('.bannerSlider .slick-container .slick-wrapper').slick({
        autoplay:true,
		dots:false,
		infinite:true,
		slidesToShow:4,
		slidesToScroll:1,
		slickPlay:true,
		slickPause:true,
        prevArrow: $('.bannerSlider .slick-button-prev'),
		nextArrow: $('.bannerSlider .slick-button-next'),
		responsive: [
			{  
				breakpoint: 961,
				settings: {
					slidesToShow:3 
				} 
			},
			{  
				breakpoint: 400,
				settings: {
					slidesToShow:2
				} 
			}
		]
    });

	$('.bannerSlider .slick-button-start').click(function(){
		$('.bannerSlider .slick-container .slick-wrapper').slick('slickPlay');
	});
	
	$('.bannerSlider .slick-button-stop').click(function(){
		$('.bannerSlider .slick-container .slick-wrapper').slick('slickPause');
	});

	$('.slick-auto').children('button').click(function(){
		$(this).hide();
		$(this).siblings('button').show();
	})
});

$(function(){
	//비주얼
    $('.mainSlogan ul').slick({
        autoplay:true,
        speed : 1000,
        autoplaySpeed : 3000,
        arrows : false,
		dots:true,
		infinite:true,
		slidesToShow:1,
		slidesToScroll:1,
		slickPlay:true,
		slickPause:true
    });
	$('.mainSlogan .slick-button-start').click(function(){
		$('.mainSlogan ul').slick('slickPlay');
	});
	$('.mainSlogan .slick-button-stop').click(function(){
		$('.mainSlogan ul').slick('slickPause');
	});
    $('.mainPopup ul').slick({
        autoplay:true,
        speed : 1000,
        autoplaySpeed : 3000,
        arrows : false,
		dots:true,
		infinite:true,
		slidesToShow:1,
		slidesToScroll:1,
		slickPlay:true,
		slickPause:true
    });
	$('.mainPopup .slick-button-start').click(function(){
		$('.mainPopup ul').slick('slickPlay');
	});
	$('.mainPopup .slick-button-stop').click(function(){
		$('.mainPopup ul').slick('slickPause');
	});

	//어린이집 지원사업
	$('.type1 .slideList').slick({
        autoplay:false,
        speed : 500,
        arrows : true,
		dots:false,
		infinite:true,
		slidesToShow:2,
		slidesToScroll:1,
		slickPlay:false,
		slickPause:false,
		prevArrow: $('.slideSection .type1 .slick-button-prev'),
		nextArrow: $('.slideSection .type1 .slick-button-next')
    });
	$('.type2 .slideList').slick({
        autoplay:false,
        speed : 500,
        arrows : true,
		dots:false,
		infinite:true,
		slidesToShow:2,
		slidesToScroll:1,
		slickPlay:false,
		slickPause:false,
		prevArrow: $('.slideSection .type2 .slick-button-prev'),
		nextArrow: $('.slideSection .type2 .slick-button-next')
    });

	//배너
	$('#mainBanner ul').slick({
        autoplay:true,
        speed : 1000,
        autoplaySpeed : 3000,
        arrows : false,
		dots:false,
		infinite:true,
		slidesToShow:5,
		slidesToScroll:1,
		slickPlay:true,
		slickPause:true
    });
	$('#mainBanner .slick-button-start').click(function(){
		$('#mainBanner ul').slick('slickPlay');
	});
	$('#mainBanner .slick-button-stop').click(function(){
		$('#mainBanner ul').slick('slickPause');
	});
})
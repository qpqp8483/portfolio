$(function () {

	// $(document).on("mousemove", function(e) {
	// 	let mouseX = e.pageX / 100;
	// 	let mouseY = e.pageY / 100;
	// 	console.log("e.pageX: " + mouseX + ", e.pageY: " + mouseY);
	// 	$('#container.main').css("background-position-x", (mouseX + "px") ).css("background-position-Y", (mouseY + "px") )

	// });
	
	//header
	$('#gnb > ul > li').on('mouseover focusin',function(){
		$(this).children('.depthBox').stop().addClass('active');
	});

	$('#gnb > ul > li').on('mouseleave focusout',function(){
		$(this).children('.depthBox').stop().removeClass('active');
	});

	$('.headerBottom').on('mouseleave',function(){
		$('.depthBox').removeClass('active');
	});

	$('.allMenuOpen').on('click', function(e){
		e.preventDefault();
		$('#allMenuBox').show(0).attr('tabindex', 0).focus();
		$('#allMenuBox').addClass('active');
		$('#overlay').addClass('active');
		
	});

	$('.allMenuClose, #overlay').on('click', function(e){
		e.preventDefault();
		$('#allMenuBox').removeClass('active').attr('tabindex', -1);
		$('#allMenuBox').delay(600).hide(0);
		$('#overlay').removeClass('active');
		$('.allMenuOpen').focus();
	});



	//통합검색
	$('.searchLink').on('click',function(e){
		e.preventDefault();
		$('.searchOpenBox').addClass('active');
		$('.searchOpenBox .topSearch').focus();
	})
	$('.searchboxClose').on('click',function(e){
		e.preventDefault();
		$('.searchOpenBox').removeClass('active');
		$('.searchLink').focus();
	})

	$('.realTimeData .tabBar > li').on('click', function(){
		let slideActive = $(this).parents('.realTimeData').find('.tabPage').eq(1);
		if(slideActive.hasClass('active')){
			$('.dataSlide > ul').slick('setPosition');
		}
	});

	$('.overBg .type1 .box2, .overBg .type1 .box3').animate({ opacity: 1 }, 2000);
	$('.overBg .type1 .box1').animate({ opacity: 0.7 }, 1000);
	
	$('.warningSlide > ul').slick({
		autoplay: true,
		dots: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		slickPlay: true,
		slickPause: true,
		vertical: true,
		verticalSwiping: true,
		prevArrow: $('.warningSlide .slick-button-prev'),
		nextArrow: $('.warningSlide .slick-button-next')
	});
	$('.warningSlide .slick-auto .slick-button-start').click(function () {
		$('.warningSlide > ul').slick('slickPlay');
		$(this).hide();
		$(this).siblings().show();
	});

	$('.warningSlide .slick-auto .slick-button-stop').click(function () {
		$('.warningSlide > ul').slick('slickPause');
		$(this).hide();
		$(this).siblings().show();
	});

	$('.dataSlide > ul').slick({
		autoplay: false,
		dots: false,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		slickPlay: false,
		slickPause: false,
		prevArrow: $('.realTimeData .slick-button-prev'),
		nextArrow: $('.realTimeData .slick-button-next')
	});

});
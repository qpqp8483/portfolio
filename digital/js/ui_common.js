
$(document).ready(function(){
	allmenuResponsive();
	//gnb
	$("#gnb > li > a").on("mouseenter focusin", function(){
		$("#gnb > li").removeClass("active");
		$(this).parent("li").addClass("active");
	});
	$("#gnb > li").mouseleave(function(){
		$("#gnb > li").removeClass("active");
	});
	$("#gnb > li > ul > li").on("mouseover focusin", function(){
		$("#gnb > li > ul > li > ul").removeClass("active");
		$(this).children("ul").addClass("active");
	});
	$("#gnb > li > ul > li").mouseleave(function(){
		$(this).children("ul").removeClass("active");
	});

	if($("#gnb > li:last-child > ul > li:last-child").children('ul').length > 0){
		$("#gnb > li:last-child > ul > li:last-child > ul > li:last-child > a").focusout(function(){
			$("#gnb > li").removeClass("active");
		});
	}else{
		$("#gnb > li:last-child > ul > li:last-child > a").focusout(function(){
			$("#gnb > li").removeClass("active");
		});
	}

	//allmenu
	$("#header #btnMenuOpen").click(function(e){
		e.preventDefault();
		$("html,body").css("overflow","hidden");
		$("#overlay").addClass("active");
		$("#allMenu").addClass("active");
	});
	$("#allMenu #btnMenuClose, #overlay").click(function(e){
		e.preventDefault();
		$("html,body").css("overflow","inherit");
		$("#overlay").removeClass("active");
		$("#allMenu").removeClass("active");
	});
	
	// main
	$("#popSlide ul").bxSlider({
		auto:true, 
		autoControls:true,
		controls:false,
		autoHover:true,
		touchEnabled:false
	});

	$('.shotBox li > a').mouseover(function(){
		$(this).addClass('active');
	});
	$('.shotBox li > a').mouseleave(function(){
		$(this).removeClass('active');
	});

	$(window).scroll(function() {
		if ($(this).scrollTop() > 800) {
			$('#topBtn').stop().fadeIn();
		} else {
			$('#topBtn').stop().fadeOut();
		}
	});
    
    $("#topBtn").click(function() {
        $('html, body').animate({
            scrollTop : 0
        }, 400);
        return false;
    });

	//datepicker
	// 20201027 수정
	$(".useDatepicker").datepicker("option", "changeMonth", "true").datepicker("option", "changeYear", "true").datepicker("option", "dateFormat", "yy-mm-dd");
	// 20201027 수정 끝

	//modal
	$(".modalWrap").each(function(){
		$(this).css({
			"marginLeft" : -($(this).outerWidth()/2)+"px",
			"marginTop" : -($(this).outerHeight()/2)+"px",
		});
	});

});

$(window).resize(function(){
	allmenuResponsive();
});

$(window).scroll(function(){
	var scrollTop = $(window).scrollTop();
	if(scrollTop > 10){
		$("#header").addClass("scroll");
	} else {
		$("#header").removeClass("scroll");
	}
});

function allmenuResponsive(){
	var winW = $(window).width();
	if(winW <= 767){
		$("#allMenu .inner > ul > li").each(function(){
			$(this).children("a").unbind().click(function(e){
				e.preventDefault();
				$("#allMenu .inner > ul > li").removeClass("active");
				$(this).parent("li").addClass("active");
			});
		});
		$("#allMenu .inner > ul > li > ul > li").each(function(){
			if($(this).children("ul").length > 0){
				$(this).addClass("hasChild");
				$(this).children("a").unbind().click(function(e){
					e.preventDefault();
					if($(this).parent("li").hasClass("active")){
						$(this).parent("li").removeClass("active");
					} else {
						$("#allMenu .inner > ul > li > ul > li").removeClass("active");
						$(this).parent("li").addClass("active");
					}
				});
			}
		});
		$(window).scroll(function() {
			var scroll_position = $(document).scrollTop();
			$('#container.main').css("background-position-y",((-scroll_position / 5) + 60) + "px");
		});
	}else{
		$(window).scroll(function() {
			var scroll_position = $(document).scrollTop();
			$('#container.main').css("background-position-y",((-scroll_position / 5) + 100) + "px");
		});
	}
}

//loading start
function loadingStart(){
	$("html,body").css("overflow","hidden");
	$("#loading").addClass("active");
}
//loading stop
function loadingStop(){
	$("html,body").css("overflow","auto");
	$("#loading").removeClass("active");
}
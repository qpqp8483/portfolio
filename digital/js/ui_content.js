
$(document).ready(function(){
	responsiveSize();
	/* list */
	$(".tableBox .notice td").mouseover(function(){
		$(this).parent().children("td").addClass('active');
	});
	$(".tableBox .notice td").mouseleave(function(){
		$(this).parent().children("td").removeClass('active');
	});
	$("table.list.mobile_b.type1").each(function(){
		if($(this).children().children().children().children().hasClass("notice")){
			$("table.list td span.notice").each(function(){
				$(this).parent().addClass("m_notice");
			});
		}
	});

	/* fnq */
	$(".faqBox .fBox").click(function(){
		
		if($(this).hasClass("active")){
			$(this).removeClass("active");
			$(this).siblings(".aBox").removeClass("active");
		}else{
			$(this).addClass("active");
			$(this).siblings(".aBox").addClass("active");
		}
	});
	$(".faqBox .fBox a").click(function(e){
		e.preventDefault();
	});
	
	$(".listPlus").each(function(){
		$(this).click(function(e){
			var clone = $(this).parent().children().children("tbody").children("tr").eq(0).clone();
			injeinc.datepicker();
			clone.find("input.useDatepicker").attr("id","");
			clone.find("input.useDatepicker").removeClass('hasDatepicker').datepicker({
				// 20201027 수정
				dateFormat: "yy-mm-dd",
				// 20201027 수정 끝
				numberOfMonths: 1,
				changeMonth: true,
				showMonthAfterYear: true ,
				changeYear: true,
				prevText: '이전 달',
				nextText: '다음 달',
				monthNames: ['01','02','03','04','05','06','07','08','09','10','11','12'],
				monthNamesShort: ['01','02','03','04','05','06','07','08','09','10','11','12'],
				dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'],
				dayNamesShort: ['일','월','화','수','목','금','토'],
				dayNamesMin: ['일','월','화','수','목','금','토']
			});
			e.preventDefault();			
			$(this).parent().children().children("tbody").append(clone);

			$(".listMinus").each(function(){
				$(this).click(function(e){
					e.preventDefault();		
					$(this).parent().parent().remove();
				});
			});
		});
	});
	
	// 디지털배움터 찾아보기
	$('.digitalDetail div.imgBox').each(function(){
		$(this).find('a').click(function(e){
			e.preventDefault();
			var src = $(this).children('img').attr('src');
			$('.digitalDetail div.imgBox').children('span').find('img').attr("src",src);
		});
	});

});
$(window).resize(function(){
	responsiveSize();
});

$(window).scroll(function(){
	
});


/*Responsive*/
function responsiveSize(){	
	windowWidth = $(window).width();
	$(".modalWrap").each(function(){
		if(windowWidth < 1200){
			$(this).css({
				"marginLeft" : "0px",
				"marginTop" : -($(this).outerHeight()/2)+"px",
			});
		}else{
			$(this).css({
				"marginLeft" : -($(this).outerWidth()/2)+"px",
				"marginTop" : -($(this).outerHeight()/2)+"px",
			});
		}
		
	});
	
}



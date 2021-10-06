$(function(){
    responsiveSize();

    windowWidth = $(document).width();

    //gnb hover
    $("#gnb .depth1 > li > a").on("mouseenter focusin", function(){
		$(this).parent("li").children("ul").stop().slideDown(0);
        $(this).addClass('active');
	});
	$("#gnb .depth1 > li").mouseleave(function(){
		$(this).children("ul").stop().slideUp(0);
        $(this).children('a').removeClass('active');
	});
	$("#gnb .depth1 > li > ul > li:last-child").keydown(function(e){
        if(e.keyCode == 9 && !e.shiftKey){
            $(this).parent("ul").stop().slideUp(0);
            $(this).parent().siblings('a').removeClass('active');
        }
	});
    $("#gnb .depth1 > li > a").keydown(function(e){
		if(e.keyCode == 9 && e.shiftKey){
            $(this).removeClass('active');
            $(this).siblings('ul').stop().slideUp(0);
        }
	});
    $('.allgnbOpen').keydown(function(e){
		if(e.keyCode == 13){
            $('.allGnb, #overlay').addClass('active');
            $('.allGnb > ul > li:first-child > a').focus();
        }
	});
    $('.allGnb > ul > li:first-child > a').keydown(function(e){
		if(e.keyCode == 9 && e.shiftKey){
            e.preventDefault();
            $('.closeAllGnb').focus();
        }
	});
    $('.closeAllGnb').keydown(function(e){
		if(e.keyCode == 13 || e.keyCode == 9 && !e.shiftKey){
            e.preventDefault();
            $('.allGnb, #overlay').removeClass('active');
            $('.allgnbOpen').focus();
        }
	});

    //top search on/off
    $('.allSearch').click(function(e){
        e.preventDefault();
        if(windowWidth >= 1151){
            $(this).hide();
        }
        $('.mainSearch').addClass('active').focus();
    });
    $('body').click(function(e){
        if(!$(e.target).is(".mainSearch") && !$(e.target).is(".allSearch") && windowWidth >= 1151){
            $('.mainSearch').removeClass('active');
            $('.allSearch').show();
        }
    });
    $('.mainSearch, .btn_topSearch').focus(function(){
        if($('.mainSearch').hasClass() !== 'active' && windowWidth >= 1151){
            $('.allSearch').focus();
        }
    })
    $('.mainSearch').keydown(function(e){
        if(e.keyCode == 9 && e.shiftKey){
            $('.mainSearch').removeClass('active');
            $('.allSearch').show();
        }
    });
    $('.allSearch').keydown(function(e){
        if(e.keyCode == 9 && e.shiftKey){
            e.preventDefault();
            $('.allgnbOpen').focus();
        }
    });

    //all gnb on/off
    $('.allgnbOpen').click(function(e){
        e.preventDefault();
        $('.allGnb, #overlay').addClass('active');
    });
    $('.closeAllGnb, #overlay').click(function(e){
        e.preventDefault();
        $('.allGnb, #overlay').removeClass('active');
    })

});

$(window).resize(function(){
	responsiveSize();
});

/*Responsive*/
function responsiveSize(){	
	windowWidth = $(window).width();
	if(windowWidth < 1151){
        $('.allSearch ').show();
        $('.allSearch').click(function(){
            $('.form_bubble').show();
        });
        $('.allGnb .depth1 > li > a').each(function(){
            if($(this).siblings('ul').length == 0){
                $(this).css({ backgroundImage : 'none' })
            }
            $(this).unbind().click(function(e){
                if($(this).siblings('ul').length > 0){
                    e.preventDefault();
                    if($(this).parent().hasClass('active')){
                        $(this).siblings().removeClass('active');
                        $(this).parent().removeClass('active');
                        console.log('한번');
                    }else{
                        $(this).parent().siblings().children('ul').removeClass('active');
                        $(this).parent().siblings().removeClass('active');
                        $(this).siblings().addClass('active');
                        $(this).parent().addClass('active');
                        console.log('두번');
                    }
                }
            });
        });
    }
}
$(function(){
    // location
    $('.location > .depth1 > li').not('.home').each(function(){
        $(this).children('a').on('click', function(e){
            e.preventDefault();
            if($(this).parent().hasClass('active')){
                $(this).parent().removeClass('active');
                $(this).siblings('.depth2').slideUp(300);
            }else{
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
                $(this).parent().siblings().find('.depth2').slideUp(300);
                $(this).siblings('.depth2').slideDown(300);
            }
        });
    });
    $('.share_print > ul > li .share').on('click', function(){
        $(this).siblings('.shareBox').addClass('active');
        $(this).siblings('.shareBox').children('.facebook').focus();
    });
    $('.shareBox .ex').on('click focusout', function(){
        $(this).parent('.shareBox').removeClass('active');
        $(this).parents('.share_print').find('.print_btn').focus();
    });

    // 포커스이동
    $('.allMenuOpen').on('keydown', function(e){
        if(e.keyCode == 9 && !e.shiftKey){
            e.preventDefault();
            $('.location').find('.home').children('a').focus();
        }
    });
    $('.searchboxClose').on('keydown', function(e){
        if(e.keyCode == 9 && !e.shiftKey){
            e.preventDefault();
            $('.searchOpenBox').removeClass('active');
            $('.allMenuOpen').focus();
        }
    });
    $('.location .home a').on('keydown', function(e){
        if(e.keyCode == 9 && e.shiftKey){
            e.preventDefault();
            $('.allMenuOpen').focus();
        }
    });
    $('.location .depth2 > li:last-child a').on('keydown', function(e){
        if(e.keyCode == 9 && !e.shiftKey){
            $(this).parents('.active').removeClass('active');
            $(this).parents('.depth2').slideUp(300);
        }
    });
    $('.share_print > ul > li .share').on('keydown', function(e){
        if(e.keyCode == 9 && !e.shiftKey){
            e.preventDefault();
            $(this).siblings('.shareBox').addClass('active');
            $(this).siblings('.shareBox').children('.facebook').focus();
        }
    });
    $('.share_print > ul > li .print_btn').on('keydown', function(e){
        if(e.keyCode == 9 && e.shiftKey){
            e.preventDefault();
            $('.share_print > ul > li .share').focus();
        }
    });

});
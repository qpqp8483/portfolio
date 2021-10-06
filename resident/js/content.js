$(function(){
    $('.location .depth1 > li > a').click(function(e){
        e.preventDefault();
        $(this).parent().siblings().children('ul').slideUp(250);
        if($(this).siblings('ul').css('display') == 'none'){
            $(this).siblings('ul').slideDown(250);
        }else{
            $(this).siblings('ul').slideUp(250);
        }
    });
    $('.faqBox ul li a').click(function(e){
        e.preventDefault();
        if(!$(this).hasClass('active')){
            $(this).addClass('active');
            $(this).siblings('div').show();
        }else{
            $(this).removeClass('active');
            $(this).siblings('div').hide();
        }
    });
});

$(window).resize(function(){
	responsiveSize();
});

/*Responsive*/
function responsiveSize(){	
	windowWidth = $(window).width();
    let th_txt = $('table.list thead tr th');
    $('table.list tbody tr').each(function(){
        if(windowWidth < 641){
            if($(this).find('.m_thTxt').length === 0){
                for(let i=0; i < th_txt.length; i++){
                    $(this).find('td').eq(i).prepend('<span class="m_thTxt">'+ th_txt.eq(i).text() +' : </span>');
                }
            }
        }else{
            $(this).find('.m_thTxt').remove();
        }
    });
}
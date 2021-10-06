$(function () {
    $("#gnb .depth1 > li > a").on("mouseenter focusin", function () {
        $('#gnb').addClass('active');
        $('#gnb .gnbBackground, #gnb.active .depth1 > li .depth2').stop().slideDown(300);
    });
    $("#gnb").mouseleave(function(){
		$(this).removeClass('active');
        $('#gnb .gnbBackground, #gnb .depth1 > li .depth2').stop().slideUp(300);
	});
    $('#sideQuick .btnTop').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop:0
        }, 400);
    });
})
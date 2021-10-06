$(function(){
    let lnbHeight= $('.lnbWrap').outerHeight();
    console.log(lnbHeight);
    // $('#wrap').each(function(){
    //     $(this).css('height',lnbHeight);
    // });

    $('#lnb>li>a').each(function(){
        if($(this).parent().hasClass('active')){
            $(this).siblings('ul').css('display','block');
        }
        $(this).on('click',function(e){
            e.preventDefault();
            if(!$(this).parent().hasClass('active')){
                $(this).parent().addClass('active');
                $(this).siblings().slideDown(300);
                $(this).parent().siblings().removeClass('active');
                $(this).parent().siblings().find('ul').slideUp(300);
            }else{
                $(this).parent().removeClass('active');
                $(this).siblings().slideUp(300);
            }
        });
    });

    //miniColor
    $('.color_changeBox .checkIcon').each( function() {
        $(this).click(function(){
            $(this).parent().siblings('.colorBox').addClass('active');
            $(this).parent().siblings('.colorBox').find('input').minicolors({
                control: $(this).attr('data-control') || 'hue',
                defaultValue: $(this).attr('data-defaultValue') || '',
                format: $(this).attr('data-format') || 'hex',
                keywords: $(this).attr('data-keywords') || '',
                inline: $(this).attr('data-inline') === 'true',
                letterCase: $(this).attr('data-letterCase') || 'lowercase',
                opacity: $(this).attr('data-opacity'),
                position: $(this).attr('data-position') || 'bottom',
                swatches: $(this).attr('data-swatches') ? $(this).attr('data-swatches').split('|') : [],
                change: function(value, opacity) {
                    if( !value ) return;
                    if( opacity ) value += ', ' + opacity;
                    if( typeof console === 'object' ) {
                        $(this).css('color',value);
                    }
                }
            });
            $(this).parent().parent().siblings().find('.colorBox').removeClass('active');
        });
    });
    $('.colorBox .ex').click(function(e){
        e.preventDefault();
        let inputColor = $(this).siblings('div').find('.minicolors-input').css('color');
        $(this).parent().siblings('label').find('.color_change').css('color',inputColor);
        $(this).parent().removeClass('active');
    });

    //팝업
    $('.more').click(function(e){
        e.preventDefault();
        $('.morePop').addClass('active');
        $('#over').addClass('active');
    });

    $('.btnClose, #over').click(function(e){
        e.preventDefault();
        $('.morePop').removeClass('active');
        $('#over').removeClass('active');
    });

    $('.option_pop_open').click(function(e){
        e.preventDefault();
        $(this).next('.option_pop').addClass('active');
    });
    $('.option_pop_close').click(function(e){
        e.preventDefault();
        $(this).parent('.option_pop').removeClass('active');
    });

    //이미지 불러오기 파일명 노출 start
    $('.topItem').each(function(){
        var fileTarget = $(this).children('input[type="file"]'); 
        fileTarget.on('change', function(){
            if(window.FileReader){ 
                var filename = $(this)[0].files[0].name;
            }else { 
                var filename = $(this).val().split('/').pop().split('\\').pop(); 
            } 
            let file = $(this).prop("files")[0];
            let blobURL = window.URL.createObjectURL(file);
            $(this).siblings('.upload-name').val(filename); 
            $(this).parent().siblings('.image_preview').append('<img src=' + blobURL + ' alt="사진영역">');
        });
    });
    //이미지 불러오기 파일명 노출 end


})

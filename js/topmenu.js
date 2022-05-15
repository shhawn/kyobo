$(function(){
    // Top menuBar
    $(window).scroll(function(){
        if ($(window).scrollTop() > $('.slider').offset().top){
            $('.category').css({'position': 'fixed', 'top': '-50px', 'z-index': '999'});
            $('.category').animate({
                top: '0px'
            })
            $('.menu_name').addClass('off');
            $('.top_wrap').css({'display': 'flex'});
        }
    })

    $(window).scroll(function(){
        if ($(window).scrollTop() <= $('.slider').offset().top){
            $('.category').css({'position': 'static'});
            $('.category').stop(true).animate({
                top: '-50px'
            }, 100)
            $('.menu_name').removeClass('off');
            $('.top_wrap').css({'display': 'none'});
        }
    })
})
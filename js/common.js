$(function(){

    $('.familySite').click(function(e){
        e.preventDefault();
        $('.family_list').toggleClass('on');
    })

    // popup
    $('.popup').animate({
        bottom: -4
    }, 1200)

    $('.popup_close').click(function(){
        $('.popup').stop().animate({
            bottom: -173
        }, 600)
    })

})
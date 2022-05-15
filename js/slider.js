$(function(){

    for (i = 1; i < 4; i++){
        $('.re_book'+i+'').append('<strong class="re_name"></strong>').append('<p class="re_comment"></p>')
    }

    // 요즘 이 책.01
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "습관의 알고리즘"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){

            $('.re_book1').prepend('<img src="'+msg.documents[0].thumbnail+'">');
            $('.re_book1').find('.re_name').text(msg.documents[0].title);
            $('.re_book1').find('.re_comment').text(msg.documents[0].contents);
        })

    // 요즘 이 책.02
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "나의 상상은 현실이 된다"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){

            $('.re_book2').prepend('<img src="'+msg.documents[0].thumbnail+'">');
            $('.re_book2').find('.re_name').text(msg.documents[0].title);
            $('.re_book2').find('.re_comment').text(msg.documents[0].contents);
        })

    // 요즘 이 책.03
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "생각은 어떻게 행동이 되는가"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){

            $('.re_book3').prepend('<img src="'+msg.documents[0].thumbnail+'">');
            $('.re_book3').find('.re_name').text(msg.documents[0].title);
            $('.re_book3').find('.re_comment').text(msg.documents[0].contents);
        })


    // Paging Effects
    let sliderPage = 0;

    function slideContent(contents){
        $('.mainSlide').hide();
        $('.'+contents+'').show();
        $('.'+contents+'Btn').siblings().removeClass('slider_on');
        $('.'+contents+'Btn').addClass('slider_on');
    }

    function slidePageEvent(){
        if (sliderPage == 0){
            slideContent('recent');
            $('.slider').css({'background': '#e6e9f6'});
        } else if (sliderPage == 1){
            slideContent('hotIssue')
            $('.slider').css({'background': '#f4cf9a'});
        } else if (sliderPage == 2){
            slideContent('newBook')
            $('.slider').css({'background': '#e4f1d3'});
        } else if (sliderPage == 3){
            slideContent('theme')
            $('.slider').css({'background': '#daecf0'});
        } else if (sliderPage == 4){
            slideContent('eBook')
            $('.slider').css({'background': '#f8f4d7'});
        } else if (sliderPage == 5){
            slideContent('sam')
            $('.slider').css({'background': '#def3e4'});
        } else if (sliderPage == 6){
            slideContent('limit')
            $('.slider').css({'background': '#fbeaf0'});
        }
    }

    $('.recentBtn').mouseover(function(){
        sliderPage = 0;
        slidePageEvent();
    })

    $('.hotIssueBtn').mouseover(function(){
        sliderPage = 1;
        slidePageEvent();
    })

    $('.newBookBtn').mouseover(function(){
        sliderPage = 2;
        slidePageEvent();
    })

    $('.themeBtn').mouseover(function(){
        sliderPage = 3;
        slidePageEvent();
    })

    $('.eBookBtn').mouseover(function(){
        sliderPage = 4;
        slidePageEvent();
    })

    $('.samBtn').mouseover(function(){
        sliderPage = 5;
        slidePageEvent();
    })

    $('.limitBtn').mouseover(function(){
        sliderPage = 6;
        slidePageEvent();
    })
    
    // sliderPaging Button Effects
    $('.sliderEvent button').hide();
    $('.sliderWrap').mouseover(function(){
        $('.sliderEvent button').show();
    }).mouseleave(function(){
        $('.sliderEvent button').hide();
    })

    $('.prevBtn').click(function(){
        if (sliderPage < 1){
            sliderPage = 7;
        }
        sliderPage--;
        slidePageEvent();  
    })

    $('.nextBtn').click(function(){
        if (sliderPage >= 6){
            sliderPage = -1;
        }
        sliderPage++;
        slidePageEvent();  
    })

    // silder auto play
    function autoPlay(){
        if (sliderPage >= 6){
            sliderPage = -1;
        }
        sliderPage++;
        slidePageEvent();  
    }

    let slideAuto = setInterval(autoPlay, 4000);

    function autoPause(){
        if ($('.btn_pause').hasClass('btn_play')){
            slideAuto = setInterval(autoPlay, 4000);
        } else {
            clearInterval(slideAuto);
        }
    }

    $('.btn_pause').click(function(){
        autoPause();
        $(this).toggleClass('btn_play');
    })

})
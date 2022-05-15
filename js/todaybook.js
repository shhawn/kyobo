$(function(){

    for (i = 1; i < 4; i++){
        $('.tbLeft').append('<li class="tb_book'+i+'"><a href="./sub.html" target="_self"></a></li>');
        $('.tbTitlebar'+i+'').append('<a href="./sub.html" target="_self" class="tbTitle"></a>').append('<span class="tbAuthor"></span>').append('<span class="tbline">|</span>').append('<span class="tbPublish"></span>');
    }

    // 오늘의 책.국내도서.01
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "낭만 강아지 봉봉"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){

            $('#tbDomestic .tbLeft li').eq(0).find('a').append('<img src="'+msg.documents[0].thumbnail+'">');
            $('#tbDomestic .tbTitlebar1 .tbTitle').text(msg.documents[0].title);
            $('#tbDomestic .tbTitlebar1 .tbAuthor').text(msg.documents[0].authors[0]);
            $('#tbDomestic .tbTitlebar1 .tbPublish').text(msg.documents[0].publisher);
  
        })

    // 오늘의 책.국내도서.02
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "호르몬 찬가"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            $('#tbDomestic .tbLeft li').eq(1).find('a').append('<img src="'+msg.documents[0].thumbnail+'">');
            $('#tbDomestic .tbTitlebar2 .tbTitle').text(msg.documents[0].title);
            $('#tbDomestic .tbTitlebar2 .tbAuthor').text(msg.documents[0].authors[0]);
            $('#tbDomestic .tbTitlebar2 .tbPublish').text(msg.documents[0].publisher);
        })

    // 오늘의 책.국내도서.03
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "꽃잎 한 장처럼"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            $('#tbDomestic .tbLeft li').eq(2).find('a').append('<img src="'+msg.documents[0].thumbnail+'">');
            $('#tbDomestic .tbTitlebar3 .tbTitle').text(msg.documents[0].title);
            $('#tbDomestic .tbTitlebar3 .tbAuthor').text(msg.documents[0].authors[0]);
            $('#tbDomestic .tbTitlebar3 .tbPublish').text(msg.documents[0].publisher);
        })

    // 오늘의 책.ebook.01
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "잘난 놈 심리학"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            $('#tbEbook .tbLeft li').eq(0).find('a').append('<img src="'+msg.documents[0].thumbnail+'">');
            $('#tbEbook .tbTitlebar1 .tbTitle').text(msg.documents[0].title);
            $('#tbEbook .tbTitlebar1 .tbAuthor').text(msg.documents[0].authors[0]);
            $('#tbEbook .tbTitlebar1 .tbPublish').text(msg.documents[0].publisher);
            
        })

    // 오늘의 책.ebook.02
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "같은 월급 다른 투자"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            $('#tbEbook .tbLeft li').eq(1).find('a').append('<img src="'+msg.documents[0].thumbnail+'">');
            $('#tbEbook .tbTitlebar2 .tbTitle').text(msg.documents[0].title);
            $('#tbEbook .tbTitlebar2 .tbAuthor').text(msg.documents[0].authors[0]);
            $('#tbEbook .tbTitlebar2 .tbPublish').text(msg.documents[0].publisher);
            
        })

    // 오늘의 책.ebook.03
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "여덟 번째 불빛이 붉게 타오르면"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            $('#tbEbook .tbLeft li').eq(2).find('a').append('<img src="'+msg.documents[0].thumbnail+'">');
            $('#tbEbook .tbTitlebar3 .tbTitle').text(msg.documents[0].title);
            $('#tbEbook .tbTitlebar3 .tbAuthor').text(msg.documents[0].authors[0]);
            $('#tbEbook .tbTitlebar3 .tbPublish').text(msg.documents[0].publisher);
            
        })

    // 오늘의 책.sam.01
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "반종차별주의"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            $('#tbSam .tbLeft li').eq(0).find('a').append('<img src="'+msg.documents[0].thumbnail+'">');
            $('#tbSam .tbTitlebar1 .tbTitle').text(msg.documents[0].title);
            $('#tbSam .tbTitlebar1 .tbAuthor').text(msg.documents[0].authors[0]);
            $('#tbSam .tbTitlebar1 .tbPublish').text(msg.documents[0].publisher);
            
        })

    // 오늘의 책.sam.02
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "사람은 어떻게 생각하고 배우고 기억하는가"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            $('#tbSam .tbLeft li').eq(1).find('a').append('<img src="'+msg.documents[0].thumbnail+'">');
            $('#tbSam .tbTitlebar2 .tbTitle').text(msg.documents[0].title);
            $('#tbSam .tbTitlebar2 .tbAuthor').text(msg.documents[0].authors[0]);
            $('#tbSam .tbTitlebar2 .tbPublish').text(msg.documents[0].publisher);
            
        })

    // 오늘의 책.sam.03
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "엄마는 엄마대로 행복했으면 좋겠어"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            $('#tbSam .tbLeft li').eq(2).find('a').append('<img src="'+msg.documents[0].thumbnail+'">');
            $('#tbSam .tbTitlebar3 .tbTitle').text(msg.documents[0].title);
            $('#tbSam .tbTitlebar3 .tbAuthor').text(msg.documents[0].authors[0]);
            $('#tbSam .tbTitlebar3 .tbPublish').text(msg.documents[0].publisher);
            
        })

    // 인디케이터
    let tbDomeIndex = 1;
    let tbEbookIndex = 1;
    let tbSamIndex = 1;

    function todayBookShow(id, i, index){
        $(id).find('.tb_book'+i+'').insertBefore($(id).find('.tbLeft li:first'));
        $(id).find('.tbTitlebar').addClass('off');
        $(id).find('.tbTitlebar'+i+'').removeClass('off');
        $(id).find('.tbBookCon li').addClass('off');
        $(id).find('.tbBookCon li').eq(index-1).removeClass('off');
    }

    function indexShow(index, id){
        if (index == 1){
            todayBookShow(id, 1, index);
        } else if (index == 2){
            todayBookShow(id, 2, index);
        } else if (index == 3){
            todayBookShow(id, 3, index);
        }
    }
    
    $('#tbDomestic .tb_indi').click(function(){
        $('#tbDomestic .tb_indiBox li').removeClass('indi_on');
        $(this).addClass('indi_on');
        tbDomeIndex = $(this).index()+1;
        indexShow(tbDomeIndex, '#tbDomestic');
    })

    $('#tbEbook .tb_indi').click(function(){
        $('#tbEbook .tb_indiBox li').removeClass('indi_on');
        $(this).addClass('indi_on');
        tbEbookIndex = $(this).index()+1;
        indexShow(tbEbookIndex, '#tbEbook');
    })

    $('#tbSam .tb_indi').click(function(){
        $('#tbSam .tb_indiBox li').removeClass('indi_on');
        $(this).addClass('indi_on');
        tbSamIndex = $(this).index()+1;
        indexShow(tbSamIndex, '#tbSam');
    })

    $('.tbLeft li').click(function(e){
        e.preventDefault();
    })
    
    // 카테고리
    $('.tbContBox').addClass('off');
    $('#tbDomestic').removeClass('off').addClass('bs_on');

    function tbCateShow(category, id){
        $('.tbCategory ul li a').removeClass('category_on');
        $(category).addClass('category_on');
        $('.tbContBox').removeClass('bs_on').addClass('off');
        $(id).removeClass('off').addClass('bs_on');
    }

    $('.tb_btn_dome').mouseover(function(){
        tbCateShow('.tb_btn_dome', '#tbDomestic');
    })

    $('.tb_btn_ebook').mouseover(function(){
        tbCateShow('.tb_btn_ebook', '#tbEbook');
    })

    $('.tb_btn_sam').mouseover(function(){
        tbCateShow('.tb_btn_sam', '#tbSam');
    })

    // Quick Menu - 쇼핑가이드
    $(window).scroll(function(){
        let guideHeight = $('.guide_wrap').offset().top + $('.guide_wrap').height();
        let guideScrollTop = $(window).scrollTop();
        let windowHeight = $(window).innerHeight();
        if ((guideHeight - guideScrollTop) <= windowHeight){
            $('.guide_wrap').removeClass('shopping_guide_ab');
            $('.guide_wrap').addClass('shopping_guide_fix');
        }
    })

    $(window).scroll(function(){
        let guideHeight2 = $('.guide_wrap').offset().top;
        if (guideHeight2 <= $('.bookAd2').offset().top){
            $('.guide_wrap').removeClass('shopping_guide_fix');
            $('.guide_wrap').addClass('shopping_guide_ab');
        }
    })

    $('.guide_top').click(function(){
        $('html').animate({
            scrollTop: '0'
        })
    })

    $('.guide_bot').click(function(){
        let documentHeight = $(document).innerHeight();
        $('html').animate({
            scrollTop: documentHeight
        }, 800)
    })
})
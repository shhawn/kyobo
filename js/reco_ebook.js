$(function(){

    // 추천 eBook.01
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "백의 그림자"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            $('.recomBook_01').append('<a href="./sub.html" target="_self" class="recomBookCover"><img src="'+msg.documents[0].thumbnail+'"></a>').append('<a href="./sub.html" target="_self" class="recomTitle">'+msg.documents[0].title+'</a>');
        })

    // 추천 eBook.02
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "밀리터리 리뷰 이지 2203"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            $('.recomBook_02').append('<a href="./sub.html" target="_self" class="recomBookCover"><img src="'+msg.documents[0].thumbnail+'"></a>').append('<a href="./sub.html" target="_self" class="recomTitle">'+msg.documents[0].title+'</a>');
        })

    // 추천 eBook.03
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "엔드 오브 타임"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            $('.recomBook_03').append('<a href="./sub.html" target="_self" class="recomBookCover"><img src="'+msg.documents[0].thumbnail+'"></a>').append('<a href="./sub.html" target="_self" class="recomTitle">'+msg.documents[0].title+'</a>');
        })

    // 추천 eBook.04
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "히사이시 조의 음악일기"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            $('.recomBook_04').append('<a href="./sub.html" target="_self" class="recomBookCover"><img src="'+msg.documents[0].thumbnail+'"></a>').append('<a href="./sub.html" target="_self" class="recomTitle">'+msg.documents[0].title+'</a>');
        })

    // 추천 eBook.05
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "미스터리를 읽은 남자"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            $('.recomBook_05').append('<a href="./sub.html" target="_self" class="recomBookCover"><img src="'+msg.documents[0].thumbnail+'"></a>').append('<a href="./sub.html" target="_self" class="recomTitle">'+msg.documents[0].title+'</a>');
        })

    // 추천 eBook.06
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "공정 드래곤즈 1"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            $('.recomBook_06').append('<a href="./sub.html" target="_self" class="recomBookCover"><img src="'+msg.documents[0].thumbnail+'"></a>').append('<a href="./sub.html" target="_self" class="recomTitle">'+msg.documents[0].title+'</a>');
        })

    // 추천 eBook.07
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "이세계 주점 노부 1"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            $('.recomBook_07').append('<a href="./sub.html" target="_self" class="recomBookCover"><img src="'+msg.documents[0].thumbnail+'"></a>').append('<a href="./sub.html" target="_self" class="recomTitle">'+msg.documents[0].title+'</a>');
        })

    // 추천 eBook.08
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "플라잉 위치 1"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            $('.recomBook_08').append('<a href="./sub.html" target="_self" class="recomBookCover"><img src="'+msg.documents[0].thumbnail+'"></a>').append('<a href="./sub.html" target="_self" class="recomTitle">'+msg.documents[0].title+'</a>');
        })

    // 추천 eBook.09
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "5등분의 신부 1"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            $('.recomBook_09').append('<a href="./sub.html" target="_self" class="recomBookCover"><img src="'+msg.documents[0].thumbnail+'"></a>').append('<a href="./sub.html" target="_self" class="recomTitle">'+msg.documents[0].title+'</a>');
        })

    // 추천 eBook.10
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "러브히나 1"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            $('.recomBook_10').append('<a href="./sub.html" target="_self" class="recomBookCover"><img src="'+msg.documents[0].thumbnail+'"></a>').append('<a href="./sub.html" target="_self" class="recomTitle">'+msg.documents[0].title+'</a>');
        })


    /// btn click 효과
    // btn_side_top
    $('.recomBook_01').addClass('on');
    let j = 1;

    $('.bs_side_top .recoNextBtn').click(function(){
        if (j >= 5){
            j = 0;
        }
        $('.bs_side_top li').eq(j).addClass('on');
        $('.bs_side_top li').eq(j-1).removeClass('on');
        j++;
    })

    $('.bs_side_top .recoPrevBtn').click(function(){
        if (j < 0){
            j = 4;
        }
        $('.bs_side_top li').eq(j-1).removeClass('on');
        $('.bs_side_top li').eq(j-2).addClass('on');
        j--;
    })

    // btn_side_bot
    $('.recomBook_06').addClass('on');
    let k = 1;

    $('.bs_side_bot .recoNextBtn').click(function(){
        if (k >= 5){
            k = 0;
        }
        $('.bs_side_bot li').eq(k).addClass('on');
        $('.bs_side_bot li').eq(k-1).removeClass('on');
        k++;
    })

    $('.bs_side_bot .recoPrevBtn').click(function(){
        if (k < 0){
            k = 4;
        }
        $('.bs_side_bot li').eq(k-1).removeClass('on');
        $('.bs_side_bot li').eq(k-2).addClass('on');
        k--;
    })

    

 
    
    
})
$(function(){

    for (i = 1; i <= 4; i++){
        $('.kl_sideBoxes').append('<li class="kl_book'+i+'"></li>');
        $('.kl_book'+i+'').append('<a href="./sub.html" target="_self" class="kl_imgBox"></a>').append('<p class="kl_genre"></p>').append('<a href="./sub.html" target="_self" class="kl_title"></a>').append('<span class="kl_author"></span>').append('<div class="kl_bookScore"></div>');
        $('.kl_book'+i+' .kl_bookScore').append('<p class="scoreImg"></p>').append('<span class="scoreNum"></span>');
    }

    // Klover 평점 좋은 책.오늘의 발견
    $('.kl_mainBox').append('<a href="./sub.html" target="_self" class="kl_imgBox"></a>').append('<p class="kl_genre"></p>').append('<a href="./sub.html" target="_self" class="kl_title"></a>').append('<span class="kl_author"></span>').append('<div class="kl_bookScore"></div>');
    $('.kl_mainBox .kl_bookScore').append('<p class="scoreImg"></p>').append('<span class="scoreNum"></span>');
    
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "소마"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            $('.kl_mainBox .kl_imgBox').append('<img src="' + msg.documents[0].thumbnail + '">');
            $('.kl_mainBox .kl_genre').text('[소설]');
            $('.kl_mainBox .kl_title').append('<strong>' + msg.documents[0].title + '</strong>');
            $('.kl_mainBox .kl_author').text(msg.documents[0].authors[0]);
            $('.kl_mainBox .scoreNum').text('9.3');
        })

    // Klover 평점 좋은 책.01
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "눈으로 만든 사람"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            $('.kl_book1 .kl_imgBox').append('<img src="' + msg.documents[0].thumbnail + '">');
            $('.kl_book1 .kl_genre').text('[소설]');
            $('.kl_book1 .kl_title').append('<strong>' + msg.documents[0].title + '</strong>');
            $('.kl_book1 .kl_author').text(msg.documents[0].authors[0]);
            $('.kl_book1 .scoreNum').text('9.3');
        })

    // Klover 평점 좋은 책.02
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "브레이킹 루틴"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            $('.kl_book2 .kl_imgBox').append('<img src="' + msg.documents[0].thumbnail + '">');
            $('.kl_book2 .kl_genre').text('[자기계발]');
            $('.kl_book2 .kl_title').append('<strong>' + msg.documents[0].title + '</strong>');
            $('.kl_book2 .kl_author').text(msg.documents[0].authors[0]);
            $('.kl_book2 .scoreNum').text('9.6');
        })

    // Klover 평점 좋은 책.03
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "운동 말고 움직임 리셋"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            $('.kl_book3 .kl_imgBox').append('<img src="' + msg.documents[0].thumbnail + '">');
            $('.kl_book3 .kl_genre').text('[건강]');
            $('.kl_book3 .kl_title').append('<strong>' + msg.documents[0].title + '</strong>');
            $('.kl_book3 .kl_author').text(msg.documents[0].authors[0]);
            $('.kl_book3 .scoreNum').text('9.7');
        })

    // Klover 평점 좋은 책.04
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "미워하는 미워하는 미워하는 마음 없이"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            $('.kl_book4 .kl_imgBox').append('<img src="' + msg.documents[0].thumbnail + '">');
            $('.kl_book4 .kl_genre').text('[시/에세이]');
            $('.kl_book4 .kl_title').append('<strong>' + msg.documents[0].title + '</strong>');
            $('.kl_book4 .kl_author').text(msg.documents[0].authors[0]);
            $('.kl_book4 .scoreNum').text('9.9');
        })



    
    
    
})
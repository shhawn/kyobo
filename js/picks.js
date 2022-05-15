$(function(){

    for (i = 1; i <= 3; i++){
        $('.recBookList').append('<li class="rec_book'+i+'"></li>')
    }

    // Picks 추천 샘플.01
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "자바스크립트"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){

            $('.rec_book1').append('<a href="./sub.html" target="_self"><img src='+msg.documents[0].thumbnail+'></a href=>').append('<p class="genre">[작가픽]</p>').append('<a href="./sub.html" target="_self"><span class="bookName">'+msg.documents[0].title+'</span></a href=>');
        })

    // Picks 추천 샘플.02
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "자바스크립트"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){

            $('.rec_book2').append('<a href="./sub.html" target="_self"><img src='+msg.documents[8].thumbnail+'></a href=>').append('<p class="genre">[소울메이트픽]</p>').append('<a href="./sub.html" target="_self"><span class="bookName">'+msg.documents[8].title+'</span></a href=>');
        })

    // Picks 추천 샘플.03
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "자바스크립트"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){

            $('.rec_book3').append('<a href="./sub.html" target="_self"><img src='+msg.documents[4].thumbnail+'></a href=>').append('<p class="genre">[종합추천]</p>').append('<a href="./sub.html" target="_self"><span class="bookName">'+msg.documents[4].title+'</span></a href=>');
        })

    

})
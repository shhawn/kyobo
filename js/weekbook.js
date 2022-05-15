$(function(){

    for (i = 1; i <= 6; i++){
        $('#weekBookBox').append('<li class="wb_bookBox'+i+'"></li>');
        $('.wb_bookBox'+i+'').append('<div><a class="wb_bookCover" href="./sub.html" target="_self"></a></div>').append('<p class="wb_title"></p>').append('<span class="wb_comment"></span>');
    }

    function weekBook(index, title, comment){
        $('#weekBookBox li').addClass('wb_bookBox');
        $('.wb_bookBox'+index+' .wb_title').text(title);
        $('.wb_bookBox'+index+' .wb_comment').text(comment);
    }

    // 이주의 책.01
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "하루라도 공부만 할 수 있다면"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            
            $('.wb_bookBox1 .wb_bookCover').append('<img src="'+msg.documents[0].thumbnail+'">');
        })
    
    weekBook(1, '도서관 청소년 분야 대여 1위', '고1, 6개월 만에 꼴찌에서 1등이 되다!')

    // 이주의 책.02
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "미드나잇 라이브러리"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            
            $('.wb_bookBox2 .wb_bookCover').append('<img src="'+msg.documents[0].thumbnail+'">');
        })
    
    weekBook(2, '미드나잇 라이브러리', '30만 독자 사로잡은 마법같은 이야기')

    // 이주의 책.03
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "나에게 고맙다"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            
            $('.wb_bookBox3 .wb_bookCover').append('<img src="'+msg.documents[0].thumbnail+'">');
        })
    
    weekBook(3, '출간 직후 종합 1위 베스트셀러!', '오늘의 나를 위한 마음 처방전')

    // 이주의 책.04
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "돈의 심리학"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            
            $('.wb_bookBox4 .wb_bookCover').append('<img src="'+msg.documents[0].thumbnail+'">');
        })
    
    weekBook(4, '돈의 심리학', '10만 부 기념 골드 에디션 출간')

    // 이주의 책.05
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "돈을 웃게 하라"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            
            $('.wb_bookBox5 .wb_bookCover').append('<img src="'+msg.documents[0].thumbnail+'">');
        })
    
    weekBook(5, '돈에 얽메이지 않는 돈 사용설명서', '일본 아마존 베스트셀러!')

    // 이주의 책.06
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "하루라도 공부만 할 수 있다면"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            
            $('.wb_bookBox6 .wb_bookCover').append('<img src="'+msg.documents[0].thumbnail+'">');
        })
    
    weekBook(6, '도서관 청소년 분야 대여 1위', '고1, 6개월 만에 꼴찌에서 1등이 되다!')

    
    
    
})
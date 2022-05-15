$(function(){

    for (i = 1; i <= 10; i++){
        $('#bs_all').append('<li class="bs_bookBox'+i+'"></li>');
        $('#bs_daily').append('<li class="bs_bookBox'+i+'"></li>');
        $('#bs_foreign').append('<li class="bs_bookBox'+i+'"></li>');
        $('#bs_ebook').append('<li class="bs_bookBox'+i+'"></li>');
        $('#bs_audio').append('<li class="bs_bookBox'+i+'"></li>');
        $('#bs_sam').append('<li class="bs_bookBox'+i+'"></li>');
        $('.bs_bookBox'+i+'').append('<h4></h4>').append('<a href="./sub.html" target="_self" class="bs_thumb'+i+'"></a>').append('<span class="bs_author"></span>');        
        $('.bs_thumb'+i+'').append('<div></div>');
        $('.bs_bookBox'+i+' h4').text(function(){
            return i < 10 ? '0'+i : i;
        });
    }

    $('.bs_bookBox6 h4').text('02');
    for (i = 2; i <= 5; i++){
        $('.bs_bookBox'+i+' h4').text('0'+(i+1));
    }

    $('.bs_bookWrap li').addClass('bs_bookBox');
    $('.bs_bookWrap li > a').addClass('bs_thumb');

    $('.bs_bookBox1 h4').addClass('rankNum');
    $('.bs_bookWrap ul li:nth-child(6) h4').addClass('rankNum');

    $('.bs_bookBox div').addClass('bs_bookCover');
    $('.bs_bookBox1 div').removeClass().addClass('bs_rank')
    $('.bs_bookBox6 div').removeClass().addClass('bs_rank')

    // 베스트셀러.교보문고종합.01
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "불편한 편의점"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){

            $('#bs_all .bs_thumb1').append('<p class="bs_title">'+msg.documents[0].title+'</p>');
            $('#bs_all .bs_thumb1 div').append('<img src="'+msg.documents[0].thumbnail+'">');
            $('#bs_all .bs_bookBox1 .bs_author').text(msg.documents[0].authors[0]);
        })

    // 베스트셀러.교보문고종합.02
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "세븐 테크"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){

            $('#bs_all .bs_thumb2').append('<p class="bs_title">'+msg.documents[0].title+'</p>');
            $('#bs_all .bs_thumb2 div').append('<img src="'+msg.documents[0].thumbnail+'">');
            $('#bs_all .bs_bookBox2 .bs_author').text(msg.documents[0].authors[0]);
        })

    // 베스트셀러.교보문고종합.03
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "물고기는 존재하지 않는다"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){

            $('#bs_all .bs_thumb3').append('<p class="bs_title">'+msg.documents[0].title+'</p>');
            $('#bs_all .bs_thumb3 div').append('<img src="'+msg.documents[0].thumbnail+'">');
            $('#bs_all .bs_bookBox3 .bs_author').text(msg.documents[0].authors[0]);
        })

    // 베스트셀러.교보문고종합.04
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "윤석열 X파일"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){

            $('#bs_all .bs_thumb4').append('<p class="bs_title">'+msg.documents[0].title+'</p>');
            $('#bs_all .bs_thumb4 div').append('<img src="'+msg.documents[0].thumbnail+'">');
            $('#bs_all .bs_bookBox4 .bs_author').text(msg.documents[0].authors[0]);
        })

    // 베스트셀러.교보문고종합.05
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "달러구트 꿈 백화점"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){

            $('#bs_all .bs_thumb5').append('<p class="bs_title">'+msg.documents[0].title+'</p>');
            $('#bs_all .bs_thumb5 div').append('<img src="'+msg.documents[0].thumbnail+'">');
            $('#bs_all .bs_bookBox5 .bs_author').text(msg.documents[0].authors[0]);
        })

    // 베스트셀러.교보문고종합.06
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "그 해 우리는 1"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){

            $('#bs_all .bs_thumb6').append('<p class="bs_title">'+msg.documents[0].title+'</p>');
            $('#bs_all .bs_thumb6 div').append('<img src="'+msg.documents[0].thumbnail+'">');
            $('#bs_all .bs_bookBox6 .bs_author').text(msg.documents[0].authors[0]);
        })

    // 베스트셀러.교보문고종합.07
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "진짜 쓰는 실무 엑셀"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){

            $('#bs_all .bs_thumb7').append('<p class="bs_title">'+msg.documents[0].title+'</p>');
            $('#bs_all .bs_thumb7 div').append('<img src="'+msg.documents[0].thumbnail+'">');
            $('#bs_all .bs_bookBox7 .bs_author').text(msg.documents[0].authors[0]);
        })

    // 베스트셀러.교보문고종합.08
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "그리움은 아무에게나 생기지 않습니다"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){

            $('#bs_all .bs_thumb8').append('<p class="bs_title">'+msg.documents[0].title+'</p>');
            $('#bs_all .bs_thumb8 div').append('<img src="'+msg.documents[0].thumbnail+'">');
            $('#bs_all .bs_bookBox8 .bs_author').text(msg.documents[0].authors[0]);
        })

    // 베스트셀러.교보문고종합.09
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "부자 아빠 가난한 아빠 1"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){

            $('#bs_all .bs_thumb9').append('<p class="bs_title">'+msg.documents[0].title+'</p>');
            $('#bs_all .bs_thumb9 div').append('<img src="'+msg.documents[0].thumbnail+'">');
            $('#bs_all .bs_bookBox9 .bs_author').text(msg.documents[0].authors[0]);
        })

    // 베스트셀러.교보문고종합.10
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "웰씽킹"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){

            $('#bs_all .bs_thumb10').append('<p class="bs_title">'+msg.documents[0].title+'</p>');
            $('#bs_all .bs_thumb10 div').append('<img src="'+msg.documents[0].thumbnail+'">');
            $('#bs_all .bs_bookBox10 .bs_author').text(msg.documents[0].authors[0]);
        })

    // 베스트셀러.인터넷일간.01
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "이어령의 마지막 수업"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){

            $('#bs_daily .bs_thumb1').append('<p class="bs_title">'+msg.documents[0].title+'</p>');
            $('#bs_daily .bs_thumb1 div').append('<img src="'+msg.documents[0].thumbnail+'">');
            $('#bs_daily .bs_bookBox1 .bs_author').text(msg.documents[0].authors[0]);
        })

    // 베스트셀러.인터넷일간.02
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "방구석 미술관"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            
            $('#bs_daily .bs_thumb6').append('<p class="bs_title">'+msg.documents[0].title+'</p>');
            $('#bs_daily .bs_thumb6 div').append('<img src="'+msg.documents[0].thumbnail+'">');
            $('#bs_daily .bs_bookBox6 .bs_author').text(msg.documents[0].authors[0]);
        })

    // 베스트셀러.인터넷일간.03
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "나에게 고맙다"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){

            $('#bs_daily .bs_thumb2').append('<p class="bs_title">'+msg.documents[0].title+'</p>');
            $('#bs_daily .bs_thumb2 div').append('<img src="'+msg.documents[0].thumbnail+'">');
            $('#bs_daily .bs_bookBox2 .bs_author').text(msg.documents[0].authors[0]);
        })

    // 베스트셀러.인터넷일간.04
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "불편한 편의점"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){

            $('#bs_daily .bs_thumb3').append('<p class="bs_title">'+msg.documents[0].title+'</p>');
            $('#bs_daily .bs_thumb3 div').append('<img src="'+msg.documents[0].thumbnail+'">');
            $('#bs_daily .bs_bookBox3 .bs_author').text(msg.documents[0].authors[0]);
        })

    // 베스트셀러.인터넷일간.05
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "물고기는 존재하지 않는다"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){

            $('#bs_daily .bs_thumb4').append('<p class="bs_title">'+msg.documents[0].title+'</p>');
            $('#bs_daily .bs_thumb4 div').append('<img src="'+msg.documents[0].thumbnail+'">');
            $('#bs_daily .bs_bookBox4 .bs_author').text(msg.documents[0].authors[0]);
        })

    // 베스트셀러.인터넷일간.06
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "설민석의 한국사 대모험 20"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){

            $('#bs_daily .bs_thumb5').append('<p class="bs_title">'+msg.documents[0].title+'</p>');
            $('#bs_daily .bs_thumb5 div').append('<img src="'+msg.documents[0].thumbnail+'">');
            $('#bs_daily .bs_bookBox5 .bs_author').text(msg.documents[0].authors[0]);
        })

    // 베스트셀러.인터넷일간.07
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "어서 오세요 휴남동 서점입니다"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){

            $('#bs_daily .bs_thumb7').append('<p class="bs_title">'+msg.documents[0].title+'</p>');
            $('#bs_daily .bs_thumb7 div').append('<img src="'+msg.documents[0].thumbnail+'">');
            $('#bs_daily .bs_bookBox7 .bs_author').text(msg.documents[0].authors[0]);
        })

    // 베스트셀러.인터넷일간.08
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "세븐 테크"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){

            $('#bs_daily .bs_thumb8').append('<p class="bs_title">'+msg.documents[0].title+'</p>');
            $('#bs_daily .bs_thumb8 div').append('<img src="'+msg.documents[0].thumbnail+'">');
            $('#bs_daily .bs_bookBox8 .bs_author').text(msg.documents[0].authors[0]);
        })

    // 베스트셀러.인터넷일간.09
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "나는 당신이 행복했으면 좋겠습니다"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){

            $('#bs_daily .bs_thumb9').append('<p class="bs_title">'+msg.documents[0].title+'</p>');
            $('#bs_daily .bs_thumb9 div').append('<img src="'+msg.documents[0].thumbnail+'">');
            $('#bs_daily .bs_bookBox9 .bs_author').text(msg.documents[0].authors[0]);
        })
        
    // 베스트셀러.인터넷일간.10
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "Go Go 카카오 프렌즈 23"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){

            $('#bs_daily .bs_thumb10').append('<p class="bs_title">'+msg.documents[0].title+'</p>');
            $('#bs_daily .bs_thumb10 div').append('<img src="'+msg.documents[0].thumbnail+'">');
            $('#bs_daily .bs_bookBox10 .bs_author').text(msg.documents[0].authors[0]);
        })
        
    // 베스트셀러.외국도서.01
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "스마트 SMART 2022.03"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            
            $('#bs_foreign .bs_thumb1').append('<p class="bs_title">'+msg.documents[0].title+'</p>');
            $('#bs_foreign .bs_thumb1 div').append('<img src="'+msg.documents[0].thumbnail+'">');
            $('#bs_foreign .bs_bookBox1 .bs_author').text(msg.documents[0].authors[0]);
        })
        
    // 베스트셀러.외국도서.02
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "World Link Intro SB"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            
            $('#bs_foreign .bs_thumb6').append('<p class="bs_title">'+msg.documents[0].title+'</p>');
            $('#bs_foreign .bs_thumb6 div').append('<img src="'+msg.documents[0].thumbnail+'">');
            $('#bs_foreign .bs_bookBox6 .bs_author').text(msg.documents[0].authors[0]);
        })
        
    // 베스트셀러.외국도서.03
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "Smart Choice. 2 Student Book"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            
            $('#bs_foreign .bs_thumb2').append('<p class="bs_title">'+msg.documents[0].title+'</p>');
            $('#bs_foreign .bs_thumb2 div').append('<img src="'+msg.documents[0].thumbnail+'">');
            $('#bs_foreign .bs_bookBox2 .bs_author').text(msg.documents[0].authors[0]);
        })
        
    // 베스트셀러.외국도서.04
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "안도프리미엄&PREMIUM"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            
            $('#bs_foreign .bs_thumb3').append('<p class="bs_title">'+msg.documents[0].title+'</p>');
            $('#bs_foreign .bs_thumb3 div').append('<img src="'+msg.documents[0].thumbnail+'">');
            $('#bs_foreign .bs_bookBox3 .bs_author').text(msg.documents[0].authors[0]);
        })
        
    // 베스트셀러.외국도서.05
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "BreakthroughPlus"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            
            $('#bs_foreign .bs_thumb4').append('<p class="bs_title">'+msg.documents[0].title+'</p>');
            $('#bs_foreign .bs_thumb4 div').append('<img src="'+msg.documents[0].thumbnail+'">');
            $('#bs_foreign .bs_bookBox4 .bs_author').text(msg.documents[0].authors[0]);
        })
        
    // 베스트셀러.외국도서.06
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "글로우 GLOW 2022.04"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            
            $('#bs_foreign .bs_thumb5').append('<p class="bs_title">'+msg.documents[0].title+'</p>');
            $('#bs_foreign .bs_thumb5 div').append('<img src="'+msg.documents[0].thumbnail+'">');
            $('#bs_foreign .bs_bookBox5 .bs_author').text(msg.documents[0].authors[0]);
        })
        
    // 베스트셀러.외국도서.07
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "Bricks Reading 150. 1"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            
            $('#bs_foreign .bs_thumb7').append('<p class="bs_title">'+msg.documents[0].title+'</p>');
            $('#bs_foreign .bs_thumb7 div').append('<img src="'+msg.documents[0].thumbnail+'">');
            $('#bs_foreign .bs_bookBox7 .bs_author').text(msg.documents[0].authors[0]);
        })
        
    // 베스트셀러.외국도서.08
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "뽀빠이 POPEYE 2022.03"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            
            $('#bs_foreign .bs_thumb8').append('<p class="bs_title">'+msg.documents[0].title+'</p>');
            $('#bs_foreign .bs_thumb8 div').append('<img src="'+msg.documents[0].thumbnail+'">');
            $('#bs_foreign .bs_bookBox8 .bs_author').text(msg.documents[0].authors[0]);
        })
        
    // 베스트셀러.외국도서.09
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "Four Corners Level 2"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            
            $('#bs_foreign .bs_thumb9').append('<p class="bs_title">'+msg.documents[0].title+'</p>');
            $('#bs_foreign .bs_thumb9 div').append('<img src="'+msg.documents[0].thumbnail+'">');
            $('#bs_foreign .bs_bookBox9 .bs_author').text(msg.documents[0].authors[0]);
        })

    // 베스트셀러.외국도서.10
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "쿠루에루 CLUEL 2022.03"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            
            $('#bs_foreign .bs_thumb10').append('<p class="bs_title">'+msg.documents[0].title+'</p>');
            $('#bs_foreign .bs_thumb10 div').append('<img src="'+msg.documents[0].thumbnail+'">');
            $('#bs_foreign .bs_bookBox10 .bs_author').text(msg.documents[0].authors[0]);
        })

    // 베스트셀러.eBook.01
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "이어령의 마지막 수업"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            
            $('#bs_ebook .bs_thumb1').append('<p class="bs_title">'+msg.documents[0].title+'</p>');
            $('#bs_ebook .bs_thumb1 div').append('<img src="'+msg.documents[0].thumbnail+'">');
            $('#bs_ebook .bs_bookBox1 .bs_author').text(msg.documents[0].authors[0]);
        })

    // 베스트셀러.eBook.02
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "불편한 편의점"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            
            $('#bs_ebook .bs_thumb6').append('<p class="bs_title">'+msg.documents[0].title+'</p>');
            $('#bs_ebook .bs_thumb6 div').append('<img src="'+msg.documents[0].thumbnail+'">');
            $('#bs_ebook .bs_bookBox6 .bs_author').text(msg.documents[0].authors[0]);
        })

    // 베스트셀러.eBook.03
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "학교 가기 싫은 선생님"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            
            $('#bs_ebook .bs_thumb2').append('<p class="bs_title">'+msg.documents[0].title+'</p>');
            $('#bs_ebook .bs_thumb2 div').append('<img src="'+msg.documents[0].thumbnail+'">');
            $('#bs_ebook .bs_bookBox2 .bs_author').text(msg.documents[0].authors[0]);
        })

    // 베스트셀러.eBook.04
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "12 1/2 부와 성공을 부르는 12가지"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            
            $('#bs_ebook .bs_thumb3').append('<p class="bs_title">'+msg.documents[0].title+'</p>');
            $('#bs_ebook .bs_thumb3 div').append('<img src="'+msg.documents[0].thumbnail+'">');
            $('#bs_ebook .bs_bookBox3 .bs_author').text(msg.documents[0].authors[0]);
        })

    // 베스트셀러.eBook.05
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "세븐 테크"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            
            $('#bs_ebook .bs_thumb4').append('<p class="bs_title">'+msg.documents[0].title+'</p>');
            $('#bs_ebook .bs_thumb4 div').append('<img src="'+msg.documents[0].thumbnail+'">');
            $('#bs_ebook .bs_bookBox4 .bs_author').text(msg.documents[0].authors[0]);
        })

    // 베스트셀러.eBook.06
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "돈의 심리학"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            
            $('#bs_ebook .bs_thumb5').append('<p class="bs_title">'+msg.documents[0].title+'</p>');
            $('#bs_ebook .bs_thumb5 div').append('<img src="'+msg.documents[0].thumbnail+'">');
            $('#bs_ebook .bs_bookBox5 .bs_author').text(msg.documents[0].authors[0]);
        })

    // 베스트셀러.eBook.07
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "물고기는 존재하지 않는다"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            
            $('#bs_ebook .bs_thumb7').append('<p class="bs_title">'+msg.documents[0].title+'</p>');
            $('#bs_ebook .bs_thumb7 div').append('<img src="'+msg.documents[0].thumbnail+'">');
            $('#bs_ebook .bs_bookBox7 .bs_author').text(msg.documents[0].authors[0]);
        })

    // 베스트셀러.eBook.08
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "묵상과 설교 2022년 3-4월호"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            
            $('#bs_ebook .bs_thumb8').append('<p class="bs_title">'+msg.documents[0].title+'</p>');
            $('#bs_ebook .bs_thumb8 div').append('<img src="'+msg.documents[0].thumbnail+'">');
            $('#bs_ebook .bs_bookBox8 .bs_author').text(msg.documents[0].authors[0]);
        })

    // 베스트셀러.eBook.09
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "매일성경 순 2022년 3-4월호"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            
            $('#bs_ebook .bs_thumb9').append('<p class="bs_title">'+msg.documents[0].title+'</p>');
            $('#bs_ebook .bs_thumb9 div').append('<img src="'+msg.documents[0].thumbnail+'">');
            $('#bs_ebook .bs_bookBox9 .bs_author').text(msg.documents[0].authors[0]);
        })

    // 베스트셀러.eBook.10
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "부자 아빠 가난한 아빠 1"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            
            $('#bs_ebook .bs_thumb10').append('<p class="bs_title">'+msg.documents[0].title+'</p>');
            $('#bs_ebook .bs_thumb10 div').append('<img src="'+msg.documents[0].thumbnail+'">');
            $('#bs_ebook .bs_bookBox10 .bs_author').text(msg.documents[0].authors[0]);
        })

    // 베스트셀러.audio.01
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "모순"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            
            $('#bs_audio .bs_thumb1').append('<p class="bs_title">'+msg.documents[0].title+'</p>');
            $('#bs_audio .bs_thumb1 div').append('<img src="'+msg.documents[0].thumbnail+'">');
            $('#bs_audio .bs_bookBox1 .bs_author').text(msg.documents[0].authors[0]);
        })

    // 베스트셀러.audio.02
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "하루 한 편 세상에서 가장 짧은 명작 읽기"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            
            $('#bs_audio .bs_thumb6').append('<p class="bs_title">'+msg.documents[0].title+'</p>');
            $('#bs_audio .bs_thumb6 div').append('<img src="'+msg.documents[0].thumbnail+'">');
            $('#bs_audio .bs_bookBox6 .bs_author').text(msg.documents[0].authors[0]);
        })

    // 베스트셀러.audio.03
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "어떻게 인생을 살 것인가"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            
            $('#bs_audio .bs_thumb2').append('<p class="bs_title">'+msg.documents[0].title+'</p>');
            $('#bs_audio .bs_thumb2 div').append('<img src="'+msg.documents[0].thumbnail+'">');
            $('#bs_audio .bs_bookBox2 .bs_author').text(msg.documents[0].authors[0]);
        })

    // 베스트셀러.audio.04
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "화학의 발자취를 찾아서"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            
            $('#bs_audio .bs_thumb3').append('<p class="bs_title">'+msg.documents[0].title+'</p>');
            $('#bs_audio .bs_thumb3 div').append('<img src="'+msg.documents[0].thumbnail+'">');
            $('#bs_audio .bs_bookBox3 .bs_author').text(msg.documents[0].authors[0]);
        })

    // 베스트셀러.audio.05
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "초예측"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            
            $('#bs_audio .bs_thumb4').append('<p class="bs_title">'+msg.documents[0].title+'</p>');
            $('#bs_audio .bs_thumb4 div').append('<img src="'+msg.documents[0].thumbnail+'">');
            $('#bs_audio .bs_bookBox4 .bs_author').text(msg.documents[0].authors[0]);
        })

    // 베스트셀러.audio.06
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "향수"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            
            $('#bs_audio .bs_thumb5').append('<p class="bs_title">'+msg.documents[0].title+'</p>');
            $('#bs_audio .bs_thumb5 div').append('<img src="'+msg.documents[0].thumbnail+'">');
            $('#bs_audio .bs_bookBox5 .bs_author').text(msg.documents[0].authors[0]);
        })

    // 베스트셀러.audio.07
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "사람은 무엇으로 사는가"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            
            $('#bs_audio .bs_thumb7').append('<p class="bs_title">'+msg.documents[0].title+'</p>');
            $('#bs_audio .bs_thumb7 div').append('<img src="'+msg.documents[0].thumbnail+'">');
            $('#bs_audio .bs_bookBox7 .bs_author').text(msg.documents[0].authors[0]);
        })

    // 베스트셀러.audio.08
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "명상록"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            
            $('#bs_audio .bs_thumb8').append('<p class="bs_title">'+msg.documents[0].title+'</p>');
            $('#bs_audio .bs_thumb8 div').append('<img src="'+msg.documents[0].thumbnail+'">');
            $('#bs_audio .bs_bookBox8 .bs_author').text(msg.documents[0].authors[0]);
        })

    // 베스트셀러.audio.09
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "1984"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            
            $('#bs_audio .bs_thumb9').append('<p class="bs_title">'+msg.documents[0].title+'</p>');
            $('#bs_audio .bs_thumb9 div').append('<img src="'+msg.documents[0].thumbnail+'">');
            $('#bs_audio .bs_bookBox9 .bs_author').text(msg.documents[0].authors[0]);
        })

    // 베스트셀러.audio.10
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "맥베스"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            
            $('#bs_audio .bs_thumb10').append('<p class="bs_title">'+msg.documents[0].title+'</p>');
            $('#bs_audio .bs_thumb10 div').append('<img src="'+msg.documents[0].thumbnail+'">');
            $('#bs_audio .bs_bookBox10 .bs_author').text(msg.documents[0].authors[0]);
        })

    // 베스트셀러.sam.01
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "내가 사랑한 화가들"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            
            $('#bs_sam .bs_thumb1').append('<p class="bs_title">'+msg.documents[0].title+'</p>');
            $('#bs_sam .bs_thumb1 div').append('<img src="'+msg.documents[0].thumbnail+'">');
            $('#bs_sam .bs_bookBox1 .bs_author').text(msg.documents[0].authors[0]);
        })

    // 베스트셀러.sam.02
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "12 1/2 부와 성공을 부르는 12가지 원칙"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            
            $('#bs_sam .bs_thumb6').append('<p class="bs_title">'+msg.documents[0].title+'</p>');
            $('#bs_sam .bs_thumb6 div').append('<img src="'+msg.documents[0].thumbnail+'">');
            $('#bs_sam .bs_bookBox6 .bs_author').text(msg.documents[0].authors[0]);
        })

    // 베스트셀러.sam.03
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "물고기는 존재하지 않는다"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            
            $('#bs_sam .bs_thumb2').append('<p class="bs_title">'+msg.documents[0].title+'</p>');
            $('#bs_sam .bs_thumb2 div').append('<img src="'+msg.documents[0].thumbnail+'">');
            $('#bs_sam .bs_bookBox2 .bs_author').text(msg.documents[0].authors[0]);
        })

    // 베스트셀러.sam.04
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "불편한 편의점"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            
            $('#bs_sam .bs_thumb3').append('<p class="bs_title">'+msg.documents[0].title+'</p>');
            $('#bs_sam .bs_thumb3 div').append('<img src="'+msg.documents[0].thumbnail+'">');
            $('#bs_sam .bs_bookBox3 .bs_author').text(msg.documents[0].authors[0]);
        })

    // 베스트셀러.sam.05
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "돈의 심리학"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            
            $('#bs_sam .bs_thumb4').append('<p class="bs_title">'+msg.documents[0].title+'</p>');
            $('#bs_sam .bs_thumb4 div').append('<img src="'+msg.documents[0].thumbnail+'">');
            $('#bs_sam .bs_bookBox4 .bs_author').text(msg.documents[0].authors[0]);
        })

    // 베스트셀러.sam.06
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "권력의 심리학"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            
            $('#bs_sam .bs_thumb5').append('<p class="bs_title">'+msg.documents[0].title+'</p>');
            $('#bs_sam .bs_thumb5 div').append('<img src="'+msg.documents[0].thumbnail+'">');
            $('#bs_sam .bs_bookBox5 .bs_author').text(msg.documents[0].authors[0]);
        })

    // 베스트셀러.sam.07
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "마음의 법칙"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            
            $('#bs_sam .bs_thumb7').append('<p class="bs_title">'+msg.documents[0].title+'</p>');
            $('#bs_sam .bs_thumb7 div').append('<img src="'+msg.documents[0].thumbnail+'">');
            $('#bs_sam .bs_bookBox7 .bs_author').text(msg.documents[0].authors[0]);
        })

    // 베스트셀러.sam.08
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "당신이 내 이름을 불러준 순간"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            
            $('#bs_sam .bs_thumb8').append('<p class="bs_title">'+msg.documents[0].title+'</p>');
            $('#bs_sam .bs_thumb8 div').append('<img src="'+msg.documents[0].thumbnail+'">');
            $('#bs_sam .bs_bookBox8 .bs_author').text(msg.documents[0].authors[0]);
        })

    // 베스트셀러.sam.09
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "메타 리치의 시대"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            
            $('#bs_sam .bs_thumb9').append('<p class="bs_title">'+msg.documents[0].title+'</p>');
            $('#bs_sam .bs_thumb9 div').append('<img src="'+msg.documents[0].thumbnail+'">');
            $('#bs_sam .bs_bookBox9 .bs_author').text(msg.documents[0].authors[0]);
        })

    // 베스트셀러.sam.10
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "하루 10분 미국 주식, 월급보다 더 번다"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            
            $('#bs_sam .bs_thumb10').append('<p class="bs_title">'+msg.documents[0].title+'</p>');
            $('#bs_sam .bs_thumb10 div').append('<img src="'+msg.documents[0].thumbnail+'">');
            $('#bs_sam .bs_bookBox10 .bs_author').text(msg.documents[0].authors[0]);
        })

    //  베스트셀러 Btn show/hide Effects
    $('.bs_bookWrap ul').addClass('off');
    $('#bs_all').removeClass('off').addClass('bs_on');

    function bestsellerShow(btn, books){
        $(btn).addClass('category_on');
        $(btn).parent().siblings().find('a').removeClass('category_on');
        $('.bs_bookWrap ul').removeClass('bs_on').addClass('off');
        $(books).removeClass('off').addClass('bs_on');
    }

    $('#bs_btn_all').mouseover(function(){
        bestsellerShow('#bs_btn_all', '#bs_all');
    })

    $('#bs_btn_daily').mouseover(function(){
        bestsellerShow('#bs_btn_daily', '#bs_daily');
    })
    
    $('#bs_btn_foreign').mouseover(function(){
        bestsellerShow('#bs_btn_foreign', '#bs_foreign');
    })

    $('#bs_btn_ebook').mouseover(function(){
        bestsellerShow('#bs_btn_ebook', '#bs_ebook');
    })

    $('#bs_btn_audio').mouseover(function(){
        bestsellerShow('#bs_btn_audio', '#bs_audio');
    })

    $('#bs_btn_sam').mouseover(function(){
        bestsellerShow('#bs_btn_sam', '#bs_sam');
    })





































    // 북튜버의 책방 & 추천 eBook
    $('.btn_booktuber').mouseover(function(){
        $('.recomBook').removeClass('on');
        $('.booktuber').addClass('on');
        $(this).addClass('btn_on');
        $('.btn_eBook').removeClass('btn_on');
    })

    $('.btn_eBook').mouseover(function(){
        $('.booktuber').removeClass('on');
        $('.recomBook').addClass('on');
        $(this).addClass('btn_on');
        $('.btn_booktuber').removeClass('btn_on');
    })
    
})
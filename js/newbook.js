$(function(){

    for (i = 1; i <= 4; i++){
        $('#nbDomestic').append('<li class="nb_book'+i+'"></li>');
        $('#nbForeign').append('<li class="nb_book'+i+'"></li>');
        $('#nbEbook').append('<li class="nb_book'+i+'"></li>');
        $('#nbSam').append('<li class="nb_book'+i+'"></li>');
    }

    // 화제의 신간.국내도서.01
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "신춘문예 당선소설집"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){

            $('#nbDomestic .nb_book1').append('<a href="./sub.html" target="_self"><img src='+msg.documents[0].thumbnail+'></a>').append('<p class="genre">[소설]</p>').append('<a href="./sub.html" target="_self"><span class="bookName">'+msg.documents[0].title+'</span></a>');
        })

    // 화제의 신간.국내도서.02
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "킴닥스의 대학생활백서"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
  
            $('#nbDomestic .nb_book2').append('<a href="./sub.html" target="_self"><img src='+msg.documents[0].thumbnail+'></a>').append('<p class="genre">[자기계발]</p>').append('<a href="./sub.html" target="_self"><span class="bookName">'+msg.documents[0].title+'</span></a>');
        })

    // 화제의 신간.국내도서.03
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "만화로 배우는 조선 왕실의 신화"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            
            $('#nbDomestic .nb_book3').append('<a href="./sub.html" target="_self"><img src='+msg.documents[0].thumbnail+'></a>').append('<p class="genre">[역사/문화]</p>').append('<a href="./sub.html" target="_self"><span class="bookName">'+msg.documents[0].title+'</span></a>');
        })

    // 화제의 신간.국내도서.04
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "머니카피"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){

            $('#nbDomestic .nb_book4').append('<a href="./sub.html" target="_self"><img src='+msg.documents[0].thumbnail+'></a>').append('<p class="genre">[경제/경영]</p>').append('<a href="./sub.html" target="_self"><span class="bookName">'+msg.documents[0].title+'</span></a>');
        })

    // 화제의 신간.외국도서.01
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "The Midnight Library"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){

            $('#nbForeign .nb_book1').append('<a href="./sub.html" target="_self"><img src='+msg.documents[0].thumbnail+'></a>').append('<p class="genre">[문학]</p>').append('<a href="./sub.html" target="_self"><span class="bookName">'+msg.documents[0].title+'</span></a>');
        })

    // 화제의 신간.외국도서.02
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "Lore Olympus"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
  
            $('#nbForeign .nb_book2').append('<a href="./sub.html" target="_self"><img src='+msg.documents[0].thumbnail+'></a>').append('<p class="genre">[문학]</p>').append('<a href="./sub.html" target="_self"><span class="bookName">'+msg.documents[0].title+'</span></a>');
        })

    // 화제의 신간.외국도서.03
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "The Conquest of Happiness"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            
            $('#nbForeign .nb_book3').append('<a href="./sub.html" target="_self"><img src='+msg.documents[0].thumbnail+'></a>').append('<p class="genre">[문학]</p>').append('<a href="./sub.html" target="_self"><span class="bookName">'+msg.documents[0].title+'</span></a>');
        })

    // 화제의 신간.외국도서.04
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "The Tempest (Oxford World Classics)"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){

            $('#nbForeign .nb_book4').append('<a href="./sub.html" target="_self"><img src='+msg.documents[0].thumbnail+'></a>').append('<p class="genre">[잡지]</p>').append('<a href="./sub.html" target="_self"><span class="bookName">'+msg.documents[0].title+'</span></a>');
        })

    // 화제의 신간.eBook.01
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "흑화한 며느리가 공작가를 길들이는 방법 1"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){

            $('#nbEbook .nb_book1').append('<a href="./sub.html" target="_self"><img src='+msg.documents[0].thumbnail+'></a>').append('<p class="genre">[로맨스판타지]</p>').append('<a href="./sub.html" target="_self"><span class="bookName">'+msg.documents[0].title+'</span></a>');
        })

    // 화제의 신간.eBook.02
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "우리 개는 주인도 물어요 1"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
  
            $('#nbEbook .nb_book2').append('<a href="./sub.html" target="_self"><img src='+msg.documents[0].thumbnail+'></a>').append('<p class="genre">[현대로맨스]</p>').append('<a href="./sub.html" target="_self"><span class="bookName">'+msg.documents[0].title+'</span></a>');
        })

    // 화제의 신간.eBook.03
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "마신은 평화롭게 살고 싶다 1"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            
            $('#nbEbook .nb_book3').append('<a href="./sub.html" target="_self"><img src='+msg.documents[0].thumbnail+'></a>').append('<p class="genre">[현대판타지]</p>').append('<a href="./sub.html" target="_self"><span class="bookName">'+msg.documents[0].title+'</span></a>');
        })

    // 화제의 신간.eBook.04
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "안녕, 코하루 1"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){

            $('#nbEbook .nb_book4').append('<a href="./sub.html" target="_self"><img src='+msg.documents[0].thumbnail+'></a>').append('<p class="genre">[만화]</p>').append('<a href="./sub.html" target="_self"><span class="bookName">'+msg.documents[0].title+'</span></a>');
        })

    // 화제의 신간.sam.01
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "메타 리치의 시대"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){

            $('#nbSam .nb_book1').append('<a href="./sub.html" target="_self"><img src='+msg.documents[0].thumbnail+'></a>').append('<p class="genre">[재테크전략]</p>').append('<a href="./sub.html" target="_self"><span class="bookName">'+msg.documents[0].title+'</span></a>');
        })

    // 화제의 신간.sam.02
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "빛이 매혹이 될 때"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
  
            $('#nbSam .nb_book2').append('<a href="./sub.html" target="_self"><img src='+msg.documents[0].thumbnail+'></a>').append('<p class="genre">[자연과학/공학]</p>').append('<a href="./sub.html" target="_self"><span class="bookName">'+msg.documents[0].title+'</span></a>');
        })

    // 화제의 신간.sam.03
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "돈이 되는 주식을 사라"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            
            $('#nbSam .nb_book3').append('<a href="./sub.html" target="_self"><img src='+msg.documents[0].thumbnail+'></a>').append('<p class="genre">[주식/증권]</p>').append('<a href="./sub.html" target="_self"><span class="bookName">'+msg.documents[0].title+'</span></a>');
        })

    // 화제의 신간.sam.04
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "찾았다, 내 편"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){

            $('#nbSam .nb_book4').append('<a href="./sub.html" target="_self"><img src='+msg.documents[0].thumbnail+'></a>').append('<p class="genre">[한국에세이]</p>').append('<a href="./sub.html" target="_self"><span class="bookName">'+msg.documents[0].title+'</span></a>');
        })

    $('.nbContBox ul').addClass('off');
    $('#nbDomestic').removeClass('off').addClass('bs_on');

    function newBooksShow(btn, books){
        $(btn).addClass('category_on');
        $(btn).parent().siblings().find('a').removeClass('category_on');
        $('.nbContBox ul').removeClass('bs_on').addClass('off');
        $(books).removeClass('off').addClass('bs_on');
    }

    $('#nb_btn_dome').mouseover(function(){
        newBooksShow('#nb_btn_dome', '#nbDomestic');
    })

    $('#nb_btn_for').mouseover(function(){
        newBooksShow('#nb_btn_for', '#nbForeign');
    })

    $('#nb_btn_ebook').mouseover(function(){
        newBooksShow('#nb_btn_ebook', '#nbEbook');
    })

    $('#nb_btn_sam').mouseover(function(){
        newBooksShow('#nb_btn_sam', '#nbSam');
    })

})
$(function(){

    const otherContents01 = $('.author_container ul').eq(0).find('li');
    const otherContents02 = $('.author_container ul').eq(1).find('li');
    const otherContents03 = $('.author_container ul').eq(2).find('li');
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    // 역자의 다른 작품 01
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "인플루언서"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            otherContents01.eq(0).find('.author_bookcover').append('<img src="'+msg.documents[0].thumbnail+'">');
            otherContents01.eq(0).find('.author_title').text(msg.documents[0].title);
            const bookPrice = msg.documents[0].sale_price;
            otherContents01.eq(0).find('.author_price').html('<strong>'+numberWithCommas(bookPrice)+'</strong>' + '원');
        })

    // 역자의 다른 작품 02
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "한 권으로 이해하는 수학"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            otherContents01.eq(1).find('.author_bookcover').append('<img src="'+msg.documents[0].thumbnail+'">');
            otherContents01.eq(1).find('.author_title').text(msg.documents[0].title);
            const bookPrice = msg.documents[0].sale_price;
            otherContents01.eq(1).find('.author_price').html('<strong>'+numberWithCommas(bookPrice)+'</strong>' + '원');
        })

    // 역자의 다른 작품 03
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "수학이 만만해지는 책"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            otherContents01.eq(2).find('.author_bookcover').append('<img src="'+msg.documents[0].thumbnail+'">');
            otherContents01.eq(2).find('.author_title').text(msg.documents[0].title);
            const bookPrice = msg.documents[0].sale_price;
            otherContents01.eq(2).find('.author_price').html('<strong>'+numberWithCommas(bookPrice)+'</strong>' + '원');
        })

    // 역자의 다른 작품 04
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "직관력은 어떻게 발휘되는가"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            otherContents01.eq(3).find('.author_bookcover').append('<img src="'+msg.documents[0].thumbnail+'">');
            otherContents01.eq(3).find('.author_title').text(msg.documents[0].title);
            const bookPrice = msg.documents[0].sale_price;
            otherContents01.eq(3).find('.author_price').html('<strong>'+numberWithCommas(bookPrice)+'</strong>' + '원');
        })

    // 역자의 다른 작품 05
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "매직 수학"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            otherContents02.eq(0).find('.author_bookcover').append('<img src="'+msg.documents[0].thumbnail+'">');
            otherContents02.eq(0).find('.author_title').text(msg.documents[0].title);
            const bookPrice = msg.documents[0].sale_price;
            otherContents02.eq(0).find('.author_price').html('<strong>'+numberWithCommas(bookPrice)+'</strong>' + '원');
        })

    // 역자의 다른 작품 06
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "퍼즐로 즐거워지는 사고력 수학"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            otherContents02.eq(1).find('.author_bookcover').append('<img src="'+msg.documents[0].thumbnail+'">');
            otherContents02.eq(1).find('.author_title').text(msg.documents[0].title);
            const bookPrice = msg.documents[0].sale_price;
            otherContents02.eq(1).find('.author_price').html('<strong>'+numberWithCommas(bookPrice)+'</strong>' + '원');
        })

    // 역자의 다른 작품 07
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "질병이 바꾼 세계의 역사"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            otherContents02.eq(2).find('.author_bookcover').append('<img src="'+msg.documents[0].thumbnail+'">');
            otherContents02.eq(2).find('.author_title').text(msg.documents[0].title);
            const bookPrice = msg.documents[0].sale_price;
            otherContents02.eq(2).find('.author_price').html('<strong>'+numberWithCommas(bookPrice)+'</strong>' + '원');
        })

    // 역자의 다른 작품 08
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "리얼리티 쇼크"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            otherContents02.eq(3).find('.author_bookcover').append('<img src="'+msg.documents[0].thumbnail+'">');
            otherContents02.eq(3).find('.author_title').text(msg.documents[0].title);
            const bookPrice = msg.documents[0].sale_price;
            otherContents02.eq(3).find('.author_price').html('<strong>'+numberWithCommas(bookPrice)+'</strong>' + '원');
        })

    // 역자의 다른 작품 09
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "통계의 거짓말"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            otherContents03.eq(0).find('.author_bookcover').append('<img src="'+msg.documents[0].thumbnail+'">');
            otherContents03.eq(0).find('.author_title').text(msg.documents[0].title);
            const bookPrice = msg.documents[0].sale_price;
            otherContents03.eq(0).find('.author_price').html('<strong>'+numberWithCommas(bookPrice)+'</strong>' + '원');
        })

    // 역자의 다른 작품 10
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "인생이 풀리는 만능 생활 수학"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            otherContents03.eq(1).find('.author_bookcover').append('<img src="'+msg.documents[0].thumbnail+'">');
            otherContents03.eq(1).find('.author_title').text(msg.documents[0].title);
            const bookPrice = msg.documents[0].sale_price;
            otherContents03.eq(1).find('.author_price').html('<strong>'+numberWithCommas(bookPrice)+'</strong>' + '원');
        })

    // 역자의 다른 작품 11
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "22가지 수학의 원칙으로 배우는 생각공작소"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            otherContents03.eq(2).find('.author_bookcover').append('<img src="'+msg.documents[0].thumbnail+'">');
            otherContents03.eq(2).find('.author_title').text(msg.documents[0].title);
            const bookPrice = msg.documents[0].sale_price;
            otherContents03.eq(2).find('.author_price').html('<strong>'+numberWithCommas(bookPrice)+'</strong>' + '원');
        })

    // 역자의 다른 작품 12
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "수포자를 위한 몰입 수학"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            otherContents03.eq(3).find('.author_bookcover').append('<img src="'+msg.documents[0].thumbnail+'">');
            otherContents03.eq(3).find('.author_title').text(msg.documents[0].title);
            const bookPrice = msg.documents[0].sale_price;
            otherContents03.eq(3).find('.author_price').html('<strong>'+numberWithCommas(bookPrice)+'</strong>' + '원');
        })

    
    const authorBooks0 = $('.author_container').find('ul').eq(0);
    const authorBooks1 = $('.author_container').find('ul').eq(1);
    const authorBooks2 = $('.author_container').find('ul').eq(2);
    authorBooks0.show();
    authorBooks1.hide();
    authorBooks2.hide();

    function authorPage(){
        if (authorOtherPage == 0){
            $('.author_container').find('ul').hide();
            authorBooks0.show();
        } else if (authorOtherPage == 1){
            $('.author_container').find('ul').hide();
            authorBooks1.show();
        } else if (authorOtherPage == 2){
            $('.author_container').find('ul').hide();
            authorBooks2.show();
        }
    }
    
    let authorOtherPage = 0;

    $('.author_btn_right').click(function(){
        if (authorOtherPage >= 2){
            authorOtherPage = -1;    
        }
        authorOtherPage++;
        authorPage();
    })

    $('.author_btn_left').click(function(){
        if (authorOtherPage <= 0){
            authorOtherPage = 3;    
        }
        authorOtherPage--;
        authorPage();
    })

})
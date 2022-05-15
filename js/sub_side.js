$(function(){

    const bestrankItem = $('.best_rank .side_container');
    const newrankItem = $('.new_rank .side_container');
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    
    // 이 분야의 베스트 1위
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "이어령의 마지막 수업"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            $('.best_rank .img_cover').eq(0).append('<img src="'+msg.documents[0].thumbnail+'">')
            bestrankItem.eq(0).find('.side_title').text(msg.documents[0].title);
            bestrankItem.eq(0).find('.side_author').text(msg.documents[0].authors[0]);
            const bookPrice = msg.documents[0].sale_price;
            bestrankItem.eq(0).find('.side_price').text(numberWithCommas(bookPrice) + '원');
        })
    
    // 이 분야의 베스트 2위
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "공간의 미래"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            $('.best_rank .img_cover').eq(1).append('<img src="'+msg.documents[0].thumbnail+'">')
            bestrankItem.eq(1).find('.side_title').text(msg.documents[0].title);
            bestrankItem.eq(1).find('.side_author').text(msg.documents[0].authors[0]);
            const bookPrice = msg.documents[0].sale_price;
            bestrankItem.eq(1).find('.side_price').text(numberWithCommas(bookPrice) + '원');
        })
    
    // 이 분야의 베스트 3위
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "마음의 법칙"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            $('.best_rank .img_cover').eq(2).append('<img src="'+msg.documents[0].thumbnail+'">')
            bestrankItem.eq(2).find('.side_title').text(msg.documents[0].title);
            bestrankItem.eq(2).find('.side_author').text(msg.documents[0].authors[0]);
            const bookPrice = msg.documents[0].sale_price;
            bestrankItem.eq(2).find('.side_price').text(numberWithCommas(bookPrice) + '원');
        })
    
    // 이 분야의 베스트 4위
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "우리는 여전히 삶을 사랑하는가"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            $('.best_rank .img_cover').eq(3).append('<img src="'+msg.documents[0].thumbnail+'">')
            bestrankItem.eq(3).find('.side_title').text(msg.documents[0].title);
            bestrankItem.eq(3).find('.side_author').text(msg.documents[0].authors[0]);
            const bookPrice = msg.documents[0].sale_price;
            bestrankItem.eq(3).find('.side_price').text(numberWithCommas(bookPrice) + '원');
        })
    
    // 이 분야의 베스트 5위
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "메멘토 모리"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            $('.best_rank .img_cover').eq(4).append('<img src="'+msg.documents[0].thumbnail+'">')
            bestrankItem.eq(4).find('.side_title').text(msg.documents[0].title);
            bestrankItem.eq(4).find('.side_author').text(msg.documents[0].authors[0]);
            const bookPrice = msg.documents[0].sale_price;
            bestrankItem.eq(4).find('.side_price').text(numberWithCommas(bookPrice) + '원');
        })
        
    // 이 분야의 신간 1위
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "권력의 심리학"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            $('.new_rank .img_cover').eq(0).append('<img src="'+msg.documents[0].thumbnail+'">')
            newrankItem.eq(0).find('.side_title').text(msg.documents[0].title);
            newrankItem.eq(0).find('.side_author').text(msg.documents[0].authors[0]);
            const bookPrice = msg.documents[0].sale_price;
            newrankItem.eq(0).find('.side_price').text(numberWithCommas(bookPrice) + '원');
        })
    
    // 이 분야의 신간 2위
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "우리는 지금 문학이 필요하다"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            $('.new_rank .img_cover').eq(1).append('<img src="'+msg.documents[0].thumbnail+'">')
            newrankItem.eq(1).find('.side_title').text(msg.documents[0].title);
            newrankItem.eq(1).find('.side_author').text(msg.documents[0].authors[0]);
            const bookPrice = msg.documents[0].sale_price;
            newrankItem.eq(1).find('.side_price').text(numberWithCommas(bookPrice) + '원');
        })
    
    // 이 분야의 신간 3위
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "늙는다는 착각"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            $('.new_rank .img_cover').eq(2).append('<img src="'+msg.documents[0].thumbnail+'">')
            newrankItem.eq(2).find('.side_title').text(msg.documents[0].title);
            newrankItem.eq(2).find('.side_author').text(msg.documents[0].authors[0]);
            const bookPrice = msg.documents[0].sale_price;
            newrankItem.eq(2).find('.side_price').text(numberWithCommas(bookPrice) + '원');
        })
    
    // 이 분야의 신간 4위
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "사랑의 기술 (5판)"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            $('.new_rank .img_cover').eq(3).append('<img src="'+msg.documents[0].thumbnail+'">')
            newrankItem.eq(3).find('.side_title').text(msg.documents[0].title);
            newrankItem.eq(3).find('.side_author').text(msg.documents[0].authors[0]);
            const bookPrice = msg.documents[0].sale_price;
            newrankItem.eq(3).find('.side_price').text(numberWithCommas(bookPrice) + '원');
        })
    
    // 이 분야의 신간 5위
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "나는 나답게 살기로 했다"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            $('.new_rank .img_cover').eq(4).append('<img src="'+msg.documents[0].thumbnail+'">')
            newrankItem.eq(4).find('.side_title').text(msg.documents[0].title);
            newrankItem.eq(4).find('.side_author').text(msg.documents[0].authors[0]);
            const bookPrice = msg.documents[0].sale_price;
            newrankItem.eq(4).find('.side_price').text(numberWithCommas(bookPrice) + '원');
        })
})
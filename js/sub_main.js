$(function(){
    // 메인 책 정보
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query: "쓸모 있는 음악책"},
        headers: {Authorization: "KakaoAK 9e884caf9b858c694a962be0c156daf3"}
    })
        .done(function(msg){
            console.log(msg)
            $('.bookImg').append('<img src="'+msg.documents[0].thumbnail+'">')
            $('.bookTitle').text(msg.documents[0].title);
            $('.writer').append('<a href="#">'+msg.documents[0].authors[0]+'</a> 지음');
            $('.translater').append('<a href="#">'+msg.documents[0].translators[0]+'</a> 옮김');
            $('.publisher').append('<a href="#">'+msg.documents[0].publisher+'</a>');
            const publishingDate = msg.documents[0].datetime;
            $('.date').text(publishingDate.slice(0, 10));
            $('.price_regular > span').text(msg.documents[0].price.toLocaleString() + '원');
            $('.price_discount > span').text(msg.documents[0].sale_price.toLocaleString() + '원');
        })

    // 수량
    let countCurr = 1;
    $('.count').val(countCurr);
    
    $('.count').on('keyup', function(){
        let countChange = $('.count').val();
        countCurr = countChange;
        if (isNaN(countCurr) == true){
            countCurr = 0;
        } else if (countCurr <= 1){
            countCurr = 0;
        } else if (countCurr >= 1000){
            countCurr = 0;
        }
    })

    $('.btn_plus').click(function(){
        if (countCurr >= 999){
            return false;
        }
        countCurr++;
        $('.count').val(countCurr);
    })

    $('.btn_minus').click(function(){
        if (countCurr <= 1){
            return false;
        }
        countCurr--;
        $('.count').val(countCurr);
    })

    // btn hover
    $('.bookBtnWrap a').mouseover(function(){
        $(this).css({"border": "1px solid #666", "box-shadow": "2px 2px 2px #ddd"})
    }).mouseleave(function(){
        $(this).css({"border": "1px solid #aaa", "box-shadow": "none"})
    })


    // Section Tab Scroll Event

    const productTab = $('#productInfo').find('.tab_content').offset().top;
    const reviewTab = $('#reviewInfo').find('.tab_content').offset().top;
    const csTab = $('#csInfo').find('.tab_content').offset().top;
    
    $('.product_tab').click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: productTab + 36
        }, 0)
    })

    $('.review_tab').click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: reviewTab + 36
        }, 0)
    })

    $('.cs_tab').click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: csTab + 36
        }, 0)
    })


})

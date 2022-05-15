$(function(){

    $('.gift_top_01').show();
    $('.gift_top_02').hide();
    $('.gift_top_03').hide();

    let giftTopPaging = 1;
    
    function giftTopNext(){
        if (giftTopPaging >= 3){
            giftTopPaging = 0;
        }
        giftTopPaging++;
        $('.gift_top > ul').hide();
        $('.gift_top_0'+giftTopPaging+'').show();
    }

    function giftTopPrev(){
        if (giftTopPaging <= 1){
            giftTopPaging = 4;
        }
        giftTopPaging--;
        $('.gift_top > ul').hide();
        $('.gift_top_0'+giftTopPaging+'').show();
    }

    $('.gift_top .gift_btn_right').click(function(){
        giftTopNext();
    })

    $('.gift_top .gift_btn_left').click(function(){
        giftTopPrev();
    })

    $('.gift_bot_01').show();
    $('.gift_bot_02').hide();
    $('.gift_bot_03').hide();

    let giftBotPaging = 1;
    
    function giftBotNext(){
        if (giftBotPaging >= 3){
            giftBotPaging = 0;
        }
        giftBotPaging++;
        $('.gift_bot > ul').hide();
        $('.gift_bot_0'+giftBotPaging+'').show();
    }

    function giftBotPrev(){
        if (giftBotPaging <= 1){
            giftBotPaging = 4;
        }
        giftBotPaging--;
        $('.gift_bot > ul').hide();
        $('.gift_bot_0'+giftBotPaging+'').show();
    }

    $('.gift_bot .gift_btn_right').click(function(){
        giftBotNext();
    })

    $('.gift_bot .gift_btn_left').click(function(){
        giftBotPrev();
    })

    
    /* JSON */

    $.ajax({
        url: "./json/gift.json",
        dataType: "json",
        success: function(data){

            // Top_1
            for (i = 0; i < 3; i++){
                $('.gift_top_01').find('li').eq(i).find('.gift_img').append('<img src="'+data[i].thumbnail+'">')
                $('.gift_top_01').find('li').eq(i).find('.gift_title').text(data[i].title);
                $('.gift_top_01').find('li').eq(i).find('.gift_price').text(data[i].price);
                $('.gift_top_01').find('li').eq(i).find('.gift_discount').text(data[i].discount);
            }

            // Top_2
            for (i = 0; i < 3; i++){
                $('.gift_top_02').find('li').eq(i).find('.gift_img').append('<img src="'+data[i+3].thumbnail+'">')
                $('.gift_top_02').find('li').eq(i).find('.gift_title').text(data[i+3].title);
                $('.gift_top_02').find('li').eq(i).find('.gift_price').text(data[i+3].price);
                $('.gift_top_02').find('li').eq(i).find('.gift_discount').text(data[i+3].discount);
            }

            // Top_3
            for (i = 0; i < 3; i++){
                $('.gift_top_03').find('li').eq(i).find('.gift_img').append('<img src="'+data[i+6].thumbnail+'">')
                $('.gift_top_03').find('li').eq(i).find('.gift_title').text(data[i+6].title);
                $('.gift_top_03').find('li').eq(i).find('.gift_price').text(data[i+6].price);
                $('.gift_top_03').find('li').eq(i).find('.gift_discount').text(data[i+6].discount);
            }

            // Bot_1
            for (i = 0; i < 3; i++){
                $('.gift_bot_01').find('li').eq(i).find('.gift_img').append('<img src="'+data[i+9].thumbnail+'">')
                $('.gift_bot_01').find('li').eq(i).find('.gift_title').text(data[i+9].title);
                $('.gift_bot_01').find('li').eq(i).find('.gift_price').text(data[i+9].price);
                $('.gift_bot_01').find('li').eq(i).find('.gift_discount').text(data[i+9].discount);
            }

            // Bot_2
            for (i = 0; i < 3; i++){
                $('.gift_bot_02').find('li').eq(i).find('.gift_img').append('<img src="'+data[i+12].thumbnail+'">')
                $('.gift_bot_02').find('li').eq(i).find('.gift_title').text(data[i+12].title);
                $('.gift_bot_02').find('li').eq(i).find('.gift_price').text(data[i+12].price);
                $('.gift_bot_02').find('li').eq(i).find('.gift_discount').text(data[i+12].discount);
            }

            // Bot_3
            for (i = 0; i < 3; i++){
                $('.gift_bot_03').find('li').eq(i).find('.gift_img').append('<img src="'+data[i+15].thumbnail+'">')
                $('.gift_bot_03').find('li').eq(i).find('.gift_title').text(data[i+15].title);
                $('.gift_bot_03').find('li').eq(i).find('.gift_price').text(data[i+15].price);
                $('.gift_bot_03').find('li').eq(i).find('.gift_discount').text(data[i+15].discount);
            }
            
        }
    })

})
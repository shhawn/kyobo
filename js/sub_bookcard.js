$(function(){
    const bookCard01 = $('.bookcard_list').find('ul').eq(0);
    const bookCard02 = $('.bookcard_list').find('ul').eq(1);
    const bookCard03 = $('.bookcard_list').find('ul').eq(2);
    bookCard01.show();
    bookCard02.hide();
    bookCard03.hide();

    function bookCardPaging(){
        if (bookCardCurr == 1){
            $('.bookcard_list').find('ul').hide();
            bookCard01.show();
        } else if (bookCardCurr == 2){
            $('.bookcard_list').find('ul').hide();
            bookCard02.show();
        } else if (bookCardCurr == 3){
            $('.bookcard_list').find('ul').hide();
            bookCard03.show();
        }
    }

    let bookCardCurr = 1;
    $('.btn_right').click(function(){
        if (bookCardCurr >= 3){
            bookCardCurr = 0;
        }
        bookCardCurr++;
        bookCardPaging();
    })

    $('.btn_left').click(function(){
        if (bookCardCurr <= 1){
            bookCardCurr = 4;
        }
        bookCardCurr--;
        bookCardPaging();
    })

    $('.bookcard_list').find('li').mouseover(function(){
        $('.bookcard_list li').removeClass('card_on');
        $(this).addClass('card_on');
        $('.bookcard').empty();
        $(this).children().clone().appendTo('.bookcard');
    })


    $('.bookcard_list').mouseover(function(){
        $(this).find('button').show();
    }).mouseleave(function(){
        $(this).find('button').hide();
    })
    




})

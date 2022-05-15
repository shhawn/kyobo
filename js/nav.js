$(function(){

    $('.menu_all_btn').mouseover(function(){
        $('.menu_all').show();
        $('.menu_all > li > a').css({'color': '#000'});
    }).mouseleave(function(){
        $('.menu_all').hide();
    })

    $('.menu_all').mouseover(function(){
        $(this).show();
    }).mouseleave(function(){
        $(this).hide();
    })

    $('.menu_wrap').mouseover(function(){
        $(this).show();
        $('.menu_all').show();
    }).mouseleave(function(){
        $(this).hide();
        $('.menu_all').hide();
    })

    $('.menu_wrap').mouseleave(function(){
        $('.menu_all > li').css({'background': '#fff'});
        $('.menu_all > li > a').css({'color': '#fff'});
    })

    function menuHoverShow(category){
        $(category).show();
        $('.menu_all > li').css({'background': '#fff'});
        $('.menu_all > li > a').css({'color': '#000'});
        $(category + '_btn').css({'background': '#1e326e'});
        $(category + '_btn').find('a').css({'color': '#fff'});
    }

    function menuHoverHide(category){
        $(category).hide();
        $(category + '_btn').css({'background': '#fff'});
        $(category + '_btn').find('a').css({'color': '#fff'});
    }

    $('.menu_dome_btn').mouseover(function(){
        menuHoverShow('.menu_dome');
    }).mouseleave(function(){
        menuHoverHide('.menu_dome');
    })

    $('.menu_fore_btn').mouseover(function(){
        menuHoverShow('.menu_fore');
    }).mouseleave(function(){
        menuHoverHide('.menu_fore');
    })

    $('.menu_ebook_btn').mouseover(function(){
        menuHoverShow('.menu_ebook');
    }).mouseleave(function(){
        menuHoverHide('.menu_ebook');
    })

    $('.menu_genre_btn').mouseover(function(){
        menuHoverShow('.menu_genre');
    }).mouseleave(function(){
        menuHoverHide('.menu_genre');
    })

    $('.menu_sam_btn').mouseover(function(){
        menuHoverShow('.menu_sam');
    }).mouseleave(function(){
        menuHoverHide('.menu_sam');
    })

    $('.menu_gift_btn').mouseover(function(){
        menuHoverShow('.menu_gift');
    }).mouseleave(function(){
        menuHoverHide('.menu_gift');
    })

    $('.menu_music_btn').mouseover(function(){
        menuHoverShow('.menu_music');
    }).mouseleave(function(){
        menuHoverHide('.menu_music');
    })

    $('.menu_used_btn').mouseover(function(){
        menuHoverShow('.menu_used');
    }).mouseleave(function(){
        menuHoverHide('.menu_used');
    })

    $('.menu_kyobo_btn').mouseover(function(){
        menuHoverShow('.menu_kyobo');
    }).mouseleave(function(){
        menuHoverHide('.menu_kyobo');
    })
  
    function menuBtnHover(cateogory){ 
        $(cateogory + '_btn').css({'background': '#1e326e'});
    }

    $('.menu_dome').mouseover(function(){
        menuBtnHover('.menu_dome');
    })

    $('.menu_fore').mouseover(function(){
        menuBtnHover('.menu_fore');
    })

    $('.menu_ebook').mouseover(function(){
        menuBtnHover('.menu_ebook');
    })

    $('.menu_genre').mouseover(function(){
        menuBtnHover('.menu_genre');
    })

    $('.menu_sam').mouseover(function(){
        menuBtnHover('.menu_sam');
    })

    $('.menu_gift').mouseover(function(){
        menuBtnHover('.menu_gift');
    })

    $('.menu_music').mouseover(function(){
        menuBtnHover('.menu_music');
    })

    $('.menu_used').mouseover(function(){
        menuBtnHover('.menu_used');
    })

    $('.menu_kyobo').mouseover(function(){
        menuBtnHover('.menu_kyobo');
    })

})
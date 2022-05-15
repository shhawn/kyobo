$(function(){

    $.ajax({
        url: "./json/storyK.json",
        dataType: "json",
        success: function(data){
            for (i in data){
                let category = data[i].category;
                let title = data[i].title;
                let contents = data[i].contents;
                let thumbnail = data[i].thumbnail;

                $('.sk_wrap li').eq(i).find('.sk_imgbox').prepend('<img src="'+thumbnail+'">');
                $('.sk_wrap li').eq(i).find('.sk_category').append('<span>'+category+'</span>');
                $('.sk_wrap li').eq(i).find('.sk_title').text(title);
                $('.sk_wrap li').eq(i).find('.sk_summary').text(contents);

            }
        }
    })

    // hover Effect
    $('.sk_imgbox').mouseover(function(){
        $(this).find('img').css({
            'transform': 'scale(1.1)'
        })
    }).mouseleave(function(){
        $(this).find('img').css({
            'transform': 'scale(1)'
        })
    })

})
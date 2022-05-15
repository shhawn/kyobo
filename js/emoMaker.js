$(function(){

    $.ajax({
        url: "./json/emo_maker.json",
        dataType: "json",
        success: function(data){
            for (i in data){
                let title = data[i].title;
                let contents = data[i].contents;
                let thumbnail = data[i].thumbnail;

                $('.sentiMaker li').eq(i).find('.mk_imgBox').append('<img src="'+thumbnail+'">').append('<p class="mk_imgTitle">'+title+'</p>');
                $('.sentiMaker li').eq(i).find('.mk_title').text(contents);                
            }
        }
    })

})
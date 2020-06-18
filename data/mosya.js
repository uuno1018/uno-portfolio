$(function () {
    var topBtn = $('.top-btn')
    topBtn.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1000) {
            topBtn.fadeIn(700);
        } else {
            topBtn.fadeOut(700);
        }
    });
    $(".top-btn").on('click',function(){
        $("html,body").animate({scrollTop:0});
    });
});

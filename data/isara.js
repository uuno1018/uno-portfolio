$(function () {
    var anser = $('.anser')
    var topBtn = $('.top-btn')
    topBtn.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            topBtn.fadeIn(700);
        } else {
            topBtn.fadeOut(700);
        }
    });
    $(".top-btn").on('click',function(){
        $("html,body").animate({scrollTop:0});
    });
    $(anser).hide();
    $('.situmon',this).click(function(){
        $(this).next(anser).slideToggle(400);
        $(this).children(".yazirusi").toggleClass("yaya");
    });
    $(".txt12syo").hide();
    $('.icon12',this).click(function(){
        $(this).next(".txt12syo").slideToggle(400);
        $(this).children(".yazirusi12").toggleClass("yaya");
    });
});
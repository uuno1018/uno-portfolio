var child=".child";
$(function () {
    $(child).hide();
    $(".menu").hover(function () {
        $(child,this).stop().slideDown(300);
        }, function () {
            $(child, this).stop().slideUp(300);
    });
    
    $(".hanburger").on('click',function(){
        $(this).toggleClass("active")
        $(".menu-contents").toggleClass("open")
    });

    $(".top-btn").on('click',function(){
        $("html,body").animate({scrollTop:0},"700");
    });

    $(window).scroll(function () {
        $('.fadein').each(function () {
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 100) {
                $(this).addClass('scrollIn');
            }
        });
    });
});

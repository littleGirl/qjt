$(function(){
    var $winw=$(window).width();
    var $winH=$(window).height();
    var swiper = new Swiper('.slide-banner', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        centeredSlides: true,
        autoplay: 4000,
        loop: true,
        autoplayDisableOnInteraction: false
    });

    $(".menu-icon").click(function(){
        if($("body").hasClass("mobile-nav-open")){
            $("body").removeClass("mobile-nav-open");
            $(".site-wrapper").removeAttribute("style");
        }else{
            $("body").addClass("mobile-nav-open");
            $(".site-wrapper").height($winH);
        }
    })

    $(".map-lianxi").click(function(){
        if($(this).hasClass("map-open")){
            $(this).removeClass("map-open");
            $(this).find(".contents").slideUp();
        }else{
            $(this).addClass("map-open");
            $(this).find(".contents").slideDown();
        }
    })
})
$('.header__menu').on('click', function() {
    $('.header__list').toggleClass('open-menu');
    $('.header__menu-bar').toggleClass('active-bar');
})

$('.banner__cta').on('click', function() {
    $('.banner__video-block').addClass('active-video');
})

$('.banner__video-block').on('click', function() {
    $('.banner__video-block').removeClass('active-video');
})

$('.banner__video-exit').on('click', function() {
    $('.banner__video-block').removeClass('active-video');
})

$('.subscribe__monthly').on('click', function() {
        $('.subscribe__annually').removeClass('active-text-bar');
        $('.subscribe__monthly').addClass('active-text-bar');
        $('.annually-block').removeClass('active-block');
        $('.monthly-block').addClass('active-block');
}) 

$('.subscribe__annually').on('click', function() {
    $('.subscribe__monthly').removeClass('active-text-bar');
    $('.subscribe__annually').addClass('active-text-bar');
    $('.monthly-block').removeClass('active-block');
    $('.annually-block').addClass('active-block');
}) 
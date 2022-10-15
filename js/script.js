$(function () {
    'use strict'


    // Counter Start
    $('.counter').counterUp({
        delay: 10,
        time: 2000,
    });
    // Counter End

    //manu fixed
    var map = $('.main_manu').offset().top;


    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > map) {
            $('.main_manu').addClass('menu_fix');
        } else {
            $('.main_manu').removeClass('menu_fix');
        }

    });







});
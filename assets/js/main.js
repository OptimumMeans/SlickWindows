$(function() {

    // Fixed Header 
    $(window).scroll(function () {
        if($(this).scrollTop() > 30)
        {
            $('.header').addClass('fixed-header');
        }
        else
            $('.header').removeClass('fixed-header');

    });

    // Go Top
    var btn = $('#top');

    $(window).scroll(function () {
        if($(this).scrollTop() > 300)
        {
            $('.top').removeClass('disnone');
        }
        else
            $('.top').addClass('disnone');

    });

    btn.click(function(){
        $('html, body').animate({ scrollTop:0 }, '300');
    });


    $('.show-menu').click(function() {

        $('.header .menu-website').addClass('show');

    });
    $('.close-menu').click(function (){
        $('.header .menu-website').removeClass('show')
    });

    // Trigger The Slider
    $('.slider .owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

     // Testimonial
     $('.testimonial .owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

    // Slider Height
    'use strict';
    var winH = $(window).height(),
        TopHeader = $('.top-header').innerHeight();
    $('.slider .slide').height(winH - TopHeader);  

});
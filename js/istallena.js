$(document).ready(function () {
  const swiper = new Swiper('.swiper', {
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },


  });
  $(window).on('load', function () {
    $('.text-btn').addClass('slideText');

  });
  $('.swiper-button-prev').click(function () {
    $('.text-btn').removeClass('slideText');
    window.requestAnimationFrame(function () {
      $('.text-btn').addClass('slideText');
    });

  });
  $('.swiper-button-next').click(function () {
    $('.text-btn').removeClass('slideText');
    window.requestAnimationFrame(function () {
      $('.text-btn').addClass('slideText');
    });

  });



});
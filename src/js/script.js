$(document).ready(function() {
    
  $('.promo__box').not('.slick-initialized').slick({
      dots: false,
      arrows: false,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      autoplay: true,
      autoplaySpeed: 8000
  });

  $('.promo__box_second').not('.slick-initialized').slick({
      dots: false,
      arrows: false,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      autoplay: true,
      autoplaySpeed: 3000
  });

  $('.promo__box_third').not('.slick-initialized').slick({
      dots: false,
      arrows: false,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      autoplay: true,
      autoplaySpeed: 12000
  });

  $('#comm').not('.slick-initialized').slick({
    prevArrow: '<button type="button" class="slick-prev"><img src="../icons/prev_arrow.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="../icons/next_arrow.svg"></button>'

  });

$('ul.portfolio__tabs').on('click', 'li:not(.portfolio__tab_active)', function() {
    $(this)
      .addClass('portfolio__tab_active').siblings().removeClass('portfolio__tab_active')
      .closest('div.container').find('div.portfolio__content').removeClass('portfolio__content_active').eq($(this).index()).addClass('portfolio__content_active');
  });

});
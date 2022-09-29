$(function(){

  $('.icon-th-list').on('click', () => {
    $('.products-page__items .product__item').addClass('list');
    $('.icon-th-list').addClass('active');
    $('.icon-th-large').removeClass('active');
  });

$('.icon-th-large').on('click', () => {
    $('.products-page__items .product__item').removeClass('list');
    $('.icon-th-list').removeClass('active');
    $('.icon-th-large').addClass('active');
  });

$('.js-range-slider').ionRangeSlider({
    type: "double",
    min: 0,
    max: 1000,
    from: 0,
    to: 600
  });

    $(".rate-star").rateYo({
        rating: 5,
        starWidth:"12px",
        readOnly: true
      });
     
      $('.product__slider-inner').slick({
        dots: true,
        arrows:false,
        slidesToShow:4,
        slidesToScroll:4
      });

      $('.product-one__tabs .tab, .settings__tabs .tab').on('click', function(event) {
        var id = $(this).attr('data-id');
          $('.product-one__tabs, .settings__tabs .tab').find('.tab-item').removeClass('active-tab').hide();
          $('.product-one__tabs .tabs, .settings__tabs .tab').find('.tab').removeClass('active');
          $(this).addClass('active');
          $('#'+id).addClass('active-tab').fadeIn();
          return false;
        });
        

$('.header__btn-menu').on('click', function(){
  $('.header__box').toggleClass('active');
});
$('.menu__btn').on('click', function(){
  $('.menu__list').slideToggle('slow');
});


var mixer = mixitup('.products__inner-box');


});
$(document).foundation()

$('.slip-slider-1').slick({
     dots: true,
     slidesToShow: 1,
     slidesToScroll: 1,
     arrows: false,
     infinite: true,
     fade: false,
     speed: 500,
     cssEase: 'linear',
     autoplay: true,
     autoplaySpeed: 3000,
  });

$('.fade-slider').slick({
     dots: false,
     slidesToShow: 1,
     slidesToScroll: 1,
     arrows: false,
     infinite: true,
     fade: true,
     speed: 500,
     cssEase: 'linear',
     autoplay: true,
     autoplaySpeed: 2000,
  });

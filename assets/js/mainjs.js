$(document).ready(function () {
  //Calling hompage Owl Carousel
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    items: 2,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplayHoverPause: true,
    slideTransition: 'ease-in-out',
  });
});

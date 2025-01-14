$(document).ready(function() {
  // Initialize Slick Carousel
  $('#carousel').slick({
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at once
    autoplay: true, // Enable automatic scrolling
    autoplaySpeed: 2000, // Time between slides (2 seconds)
    arrows: true, // Enable arrows
    prevArrow: $('.prev-arrow'), // Custom previous arrow
    nextArrow: $('.next-arrow'), // Custom next arrow
    dots: true, // Enable default Slick dots (no manual dot buttons)
    speed: 500, // Transition speed
  });

  // Optional: Dynamically set the active dot based on slide index
  $('#carousel').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    const dots = $('.slick-dots li');
    dots.removeClass('active');
    $(dots[nextSlide]).addClass('active');
  });
});

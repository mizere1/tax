$(document).ready(function () {
  // Hide all sections except the home section on page load
  $('.section:not(#home)').hide();

  // Function to show the selected section and hide others
  function showSection(sectionId) {
    $('.section').each(function () {
      if ($(this).attr('id') === sectionId) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  }

  // Show home section by default
  showSection('home');

  // Event handler for navigation buttons
  $('.nav-link').on('click', function () {
    const sectionId = $(this).data('section');
    showSection(sectionId);
  });

  // Image carousel
  let currentSlide = 0;
  const slideInterval = 5000; // 5 seconds
  const $carouselImages = $('.carousel img');
  const numSlides = $carouselImages.length;

  function showNextSlide() {
    const nextSlide = (currentSlide + 1) % numSlides;
    $carouselImages.eq(currentSlide).css('opacity', 0);
    $carouselImages.eq(nextSlide).css('opacity', 1);
    currentSlide = nextSlide;
  }

  // Start the carousel interval
  let carouselInterval = setInterval(showNextSlide, slideInterval);

  // Pause the carousel on hover
  $('.carousel').hover(
    function () {
      clearInterval(carouselInterval);
    },
    function () {
      carouselInterval = setInterval(showNextSlide, slideInterval);
    }
  );
});

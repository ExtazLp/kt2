document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    const prevArrow = document.querySelector('.prev-arrow');
    const nextArrow = document.querySelector('.next-arrow');
    const slideCount = document.querySelectorAll('.slide').length;
    let currentIndex = 0;
  
    
    function goToSlide(index) {
      if (index < 0) {
        index = slideCount - 1; 
      } else if (index >= slideCount) {
        index = 0; 
      }
      currentIndex = index;
      slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    prevArrow.addEventListener('click', () => {
      goToSlide(currentIndex - 1);
    });
  
    nextArrow.addEventListener('click', () => {
      goToSlide(currentIndex + 1);
    });
  });
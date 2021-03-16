

/**
 * @name initSwiper
 *
 * @description initialize Swiper
 */
const initSwiper = () => {

  new Swiper('.reviewsSlider', {
    loop: false,
    effect: 'flip',
    flipEffect: {
      slideShadows: false,
    },
    speed: 800,
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: '.reviews__btn--next',
      prevEl: '.reviews__btn--prev',
    }
  });

  new Swiper('.solutionsSwiper', {
    loop: false,
    effect: 'slide',
    speed: 800,
    slidesPerView: 3,
    spaceBetween: 50,
    navigation: {
      nextEl: '.solutions__btn--next',
      prevEl: '.solutions__btn--prev',
    }
  });
  
};

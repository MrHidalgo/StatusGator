

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
    speed: 1000,
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
    speed: 1000,
    slidesPerView: 3,
    spaceBetween: 50,
    navigation: {
      nextEl: '.solutions__btn--next',
      prevEl: '.solutions__btn--prev',
    }
  });

  new Swiper('.trustSwiper', {
    loop: false,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false
    },
    effect: 'slide',
    speed: 1000,
    slidesPerView: 5,
    slidesPerGroup: 5,
    spaceBetween: 50,
    pagination: {
      el: '.trust__pagination',
      clickable: true,
    }
  });
  
};

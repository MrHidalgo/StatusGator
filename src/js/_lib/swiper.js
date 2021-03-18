

/**
 * @name initSwiper
 *
 * @description initialize Swiper
 */
const initSwiper = () => {
  
  if($('.reviewsSlider').length > 0) {

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
      },
      pagination: {
        el: '.reviews__pagination',
        clickable: true,
      }
    });
    
  }
  if($('.partnersSwiper').length > 0) {

    new Swiper('.partnersSwiper', {
      loop: false,
      effect: 'slide',
      speed: 1000,
      slidesPerView: 5,
      spaceBetween: 30,
      breakpoints: {
        320: {
          slidesPerView: 3,
          spaceBetween: 30,
          slidesOffsetAfter: 15,
          slidesOffsetBefore: 15,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 30,
          slidesOffsetAfter: 0,
          slidesOffsetBefore: 0,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 30
        }
      },
      pagination: {
        el: '.partners__pagination',
        clickable: true,
      }
    });
    
  }
  if($('.solutionsSwiper').length > 0) {
    let solutionsSwiper = undefined,
      solutionSwiperOPT = {
        loop: false,
        effect: 'slide',
        speed: 1000,
        slidesPerView: 3,
        spaceBetween: 50,
        breakpoints: {
          320: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50
          }
        },
        navigation: {
          nextEl: '.solutions__btn--next',
          prevEl: '.solutions__btn--prev',
        }
      };
    
    $(window).on('load', () => {
      if ($(window).width() > 767) {
        solutionsSwiper = new Swiper('.solutionsSwiper', solutionSwiperOPT);
      }
    });
    $(window).on('resize', () => {
      if($(window).width() < 768 && solutionsSwiper !== undefined) {
        
        solutionsSwiper.destroy(true, true);
        solutionsSwiper = undefined;
        
      } else if(solutionsSwiper === undefined) {
        solutionsSwiper = new Swiper('.solutionsSwiper', solutionSwiperOPT);
      }
    });
    
  }
  if($('.trustSwiper').length > 0) {

    new Swiper('.trustSwiper', {
      loop: false,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      effect: 'slide',
      speed: 1000,
      slidesPerView: 5,
      slidesPerGroup: 5,
      spaceBetween: 50,
      breakpoints: {
        320: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 5,
          slidesPerGroup: 5,
          spaceBetween: 50
        }
      },
      pagination: {
        el: '.trust__pagination',
        clickable: true,
      }
    });
    
  }
  if($('.twitterSwiper').length > 0) {

    new Swiper('.twitterSwiper', {
      loop: true,
      autoplay: {
        delay: 10000,
        disableOnInteraction: false
      },
      effect: 'slide',
      speed: 1000,
      slidesPerView: 'auto',
      spaceBetween: 30,
      // centeredSlides: true,
    });
    
  }
  if($('.statusSwiper').length > 0) {

    new Swiper('.statusSwiper', {
      loop: false,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      speed: 1000,
      slidesPerView: 1,
      spaceBetween: 100,
      navigation: {
        nextEl: '.status__btn--next',
        prevEl: '.status__btn--prev',
      },
      pagination: {
        el: '.status__pagination',
        clickable: true,
        type: 'progressbar'
      },
    });
    
  }
  
};

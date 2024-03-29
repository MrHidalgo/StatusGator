"use strict";

/*
*
* ============================
* ============================
*
* Include lib:
*
* - preventBehavior.js;
*
* ============================
* ============================
* */

/**
 * @name initHamburger
 *
 * @description Init hamburger logic with animated
 */
var initHamburger = function initHamburger() {

  var btn = document.querySelector("[hamburger-js]"),
      btnClose = document.querySelector('.header__close'),
      hideScrollContainer = document.querySelectorAll("html, body"),
      mobileContainer = document.querySelector("[mobile-block-js]");

  /**
    * @description
   */
  if (btn) {
    btn.addEventListener("click", function (ev) {
      var elem = ev.currentTarget;

      elem.classList.add("is-active");
      mobileContainer.classList.add("is-open");

      hideScrollContainer.forEach(function (val, idx) {
        val.classList.add("is-hideScroll");
      });
    });

    btnClose.addEventListener("click", function (ev) {
      btn.classList.remove("is-active");
      mobileContainer.classList.remove("is-open");

      hideScrollContainer.forEach(function (val, idx) {
        val.classList.remove("is-hideScroll");
      });
    });
  }
};

/**
 * @name initPopups
 *
 * @description
 */
var initPopups = function initPopups() {

  if ($('[popup-js]').length > 0) {
    $('[popup-js]').magnificPopup({
      type: 'inline',
      fixedContentPos: true,
      fixedBgPos: true,
      overflowY: 'auto',
      closeBtnInside: true,
      preloader: false,
      midClick: true,
      removalDelay: 300,
      mainClass: 'is-show',
      callbacks: {
        beforeOpen: function beforeOpen() {
          this.st.mainClass = this.st.el.attr('data-effect');
        },
        close: function close() {}
      }
    });

    $('[popup-status-js]').on('click', function (ev) {
      if ($(window).width() < 768) {
        $('[popup-status-js]').magnificPopup({
          type: 'inline',
          fixedContentPos: true,
          fixedBgPos: true,
          overflowY: 'auto',
          closeBtnInside: true,
          preloader: false,
          midClick: true,
          removalDelay: 300,
          mainClass: 'is-show',
          callbacks: {
            beforeOpen: function beforeOpen() {
              this.st.mainClass = this.st.el.attr('data-effect');
            },
            close: function close() {}
          }
        });
      } else {
        return false;
      }
    });

    $('[popup-close-js]').on('click', function (ev) {
      $.magnificPopup.close();
    });
  }
};

/**
 * @name initPreventBehavior
 *
 * @description
 */
var initPreventBehavior = function initPreventBehavior() {

  var link = document.querySelectorAll("a");

  link.forEach(function (val, idx) {

    val.addEventListener("click", function (e) {
      if (val.getAttribute("href") === "#") {
        e.preventDefault();
      }
    });
  });
};

/**
 * @name initStellar
 * @description Stellar.js is a jQuery plugin that provides parallax scrolling effects to any scrolling element.
 *
 * Parallax Elements
 * - data-stellar-ratio="1"
 *
 * Parallax Backgrounds
 * - data-stellar-background-ratio="1"
 */
var initStellar = function initStellar() {
  if ($("[parallax-js]").length) {
    $(function () {
      $.stellar({
        // Set scrolling to be in either one or both directions
        horizontalScrolling: false,
        verticalScrolling: true,

        // Set the global alignment offsets
        horizontalOffset: 0,
        verticalOffset: 0,

        // Refreshes parallax content on window load and resize
        responsive: false,

        // Select which property is used to calculate scroll.
        // Choose 'scroll', 'position', 'margin' or 'transform',
        // or write your own 'scrollProperty' plugin.
        scrollProperty: 'scroll',

        // Select which property is used to position elements.
        // Choose between 'position' or 'transform',
        // or write your own 'positionProperty' plugin.
        positionProperty: 'position',

        // Enable or disable the two types of parallax
        parallaxBackgrounds: true,
        parallaxElements: true,

        // Hide parallax elements that move outside the viewport
        hideDistantElements: false,

        // Customise how elements are shown and hidden
        hideElement: function hideElement($elem) {
          $elem.hide();
        },
        showElement: function showElement($elem) {
          $elem.show();
        }
      });
    });
  }
};

/**
 * @name initSwiper
 *
 * @description initialize Swiper
 */
var initSwiper = function initSwiper() {

  if ($('.reviewsSlider').length > 0) {

    new Swiper('.reviewsSlider', {
      loop: false,
      effect: 'flip',
      flipEffect: {
        slideShadows: false
      },
      speed: 1000,
      slidesPerView: 1,
      spaceBetween: 30,
      navigation: {
        nextEl: '.reviews__btn--next',
        prevEl: '.reviews__btn--prev'
      },
      pagination: {
        el: '.reviews__pagination',
        clickable: true
      }
    });
  }
  if ($('.partnersSwiper').length > 0) {

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
          slidesOffsetBefore: 15
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 30,
          slidesOffsetAfter: 0,
          slidesOffsetBefore: 0
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 30
        }
      },
      pagination: {
        el: '.partners__pagination',
        clickable: true
      }
    });
  }
  if ($('.solutionsSwiper').length > 0) {
    var solutionsSwiper = undefined,
        solutionSwiperOPT = {
      loop: false,
      effect: 'slide',
      speed: 1000,
      slidesPerView: 3,
      spaceBetween: 25,
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 25
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 25
        }
      },
      navigation: {
        nextEl: '.solutions__btn--next',
        prevEl: '.solutions__btn--prev'
      }
    };

    $(window).on('load', function () {
      if ($(window).width() > 767) {
        solutionsSwiper = new Swiper('.solutionsSwiper', solutionSwiperOPT);
      }
    });
    $(window).on('resize', function () {
      if ($(window).width() < 768 && solutionsSwiper !== undefined) {

        solutionsSwiper.destroy(true, true);
        solutionsSwiper = undefined;
      } else if (solutionsSwiper === undefined && $(window).width() > 767) {
        solutionsSwiper = new Swiper('.solutionsSwiper', solutionSwiperOPT);
      }
    });
  }
  if ($('.trustSwiper').length > 0) {

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
          spaceBetween: 30
        },
        768: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30
        },
        1024: {
          slidesPerView: 5,
          slidesPerGroup: 5,
          spaceBetween: 50
        }
      },
      pagination: {
        el: '.trust__pagination',
        clickable: true
      }
    });
  }
  if ($('.twitterSwiper').length > 0) {

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
      breakpoints: {
        320: {
          spaceBetween: 10
        },
        768: {
          spaceBetween: 30
        }
      }
    });
  }
  if ($('.statusSwiper').length > 0) {

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
        prevEl: '.status__btn--prev'
      },
      pagination: {
        el: '.status__pagination',
        clickable: true,
        type: 'progressbar'
      }
    });
  }
};

/**
 * @description Document DOM ready.
 */
(function () {
  /*
  * CALLBACK :: start
  * ============================================= */
  var gatorAnimation = function gatorAnimation() {
    var tl = new TimelineMax({ repeat: -1, yoyo: true });

    if (!$('#dino').length) return false;

    var dino = $('#dino'),
        eyeLeft = $('#dinoEyeLeft'),
        eyeLeftWhite = $('#dinoEyeLeftWhite'),
        eyebrownLeft = $('#dinoEyebrowLeft'),
        eyebrownRight = $('#dinoEyebrowRight'),
        dinoTail = $('#dinoTail'),
        leftHand = $('#dinoHandLeft'),
        rightHand = $('#dinoHandRight');

    tl.set([dinoEyeLeft, dinoEyeLeftWhite], { transformOrigin: 'center' }).set(eyebrownLeft, { transformOrigin: 'center' }).set(eyebrownRight, { transformOrigin: 'center' });

    tl.fromTo(dino, 1.3, { x: -3, y: 2, rotation: 0 }, { x: 3, y: -5, rotation: 5, ease: Power1.easeInOut }, '-=1.3').fromTo(eyeLeft, 1.3, { scaleY: 1, rotation: 15 }, { scaleY: 0, rotation: 15, ease: Power1.easeInOut }, '-=1.3').fromTo(eyeLeftWhite, 1.3, { scaleY: 1, rotation: 15 }, { scaleY: 0, rotation: 15, ease: Power1.easeInOut }, '-=1.3').fromTo(eyebrownLeft, 1.3, { rotation: 0 }, { rotation: 12, ease: Power1.easeInOut }, '-=1.3').fromTo(eyebrownRight, 1.3, { rotation: 0 }, { rotation: -15, ease: Power1.easeInOut }, '-=1.3').fromTo(dinoTail, 1.3, { y: 0, rotation: 0 }, { y: -65, rotation: 50, ease: Power1.easeInOut }, '-=1.3').fromTo(leftHand, 1.3, { x: 0, rotation: 0 }, { x: 2, rotation: -30, ease: Power1.easeInOut }, '-=1.3').fromTo(rightHand, 1.3, { y: 0, rotation: 0 }, { y: 2, rotation: -30, ease: Power1.easeInOut }, '-=1.3');
  };

  var headerFixed = function headerFixed() {
    var elSelector = 'header',
        $element = $(elSelector);

    if (!$element.length) return true;

    var elHeight = 0,
        elTop = 0,
        $document = $(document),
        dHeight = 0,
        $window = $(window),
        wHeight = 0,
        wScrollCurrent = 0,
        wScrollBefore = 0,
        wScrollDiff = 0;

    if ($window.scrollTop() > 0) {
      $element.addClass('is-color');
    } else {
      $element.removeClass('is-color');
    }

    $window.on('scroll', function (ev) {
      if ($window.scrollTop() > 0) {
        $element.addClass('is-color');
      } else {
        $element.removeClass('is-color');
      }

      elHeight = $($element).outerHeight();
      dHeight = $document.height();
      wHeight = $window.height();
      wScrollCurrent = $window.scrollTop();
      wScrollDiff = wScrollBefore - wScrollCurrent;
      elTop = parseInt($($element).css('top')) + wScrollDiff;

      if (wScrollCurrent <= 0) {
        $($element).css('top', 0).removeClass('is-fixed is-hide');
      } else if (wScrollDiff > 0) {
        $($element).css('top', elTop > 0 ? 0 : elTop).removeClass('is-hide').addClass('is-fixed');
      } else if (wScrollDiff < 0) {
        if (wScrollCurrent + wHeight >= dHeight - elHeight) {
          // $($element).css('top', (elTop = wScrollCurrent + wHeight - dHeight) < 0 ? elTop : 0);
        } else {
          $($element).css('top', Math.abs(elTop) > elHeight ? -elHeight : elTop).addClass('is-hide');
        }
      }

      wScrollBefore = wScrollCurrent;
    });
  };

  var expandFilters = function expandFilters() {
    $('[expand-all-js]').on('click', function (ev) {
      var el = $(ev.currentTarget),
          elExpandAttrVal = el.attr('data-expand'),
          elCollapseAttrVal = el.attr('data-collapse');

      if (el.hasClass('is-collapse')) {
        el.removeClass('is-collapse');
        el.find('span').text(elExpandAttrVal);
      } else {
        el.addClass('is-collapse');
        el.find('span').text(elCollapseAttrVal);
      }

      $(ev.currentTarget).closest('.services-main__link').find('> div').slideToggle(350);
    });
  };

  var filtersCB = function filtersCB() {
    $('[filters-toggle-js]').on('click', function (ev) {
      $('#filters').addClass('is-open');
    });

    $('[filters-close-js]').on('click', function (ev) {
      $('#filters').removeClass('is-open');
    });

    $('[filters-expand-js]').on('click', function (ev) {
      var el = $(ev.currentTarget),
          elExpandAttrVal = el.attr('data-expand'),
          elCollapseAttrVal = el.attr('data-collapse');

      if (el.hasClass('is-collapse')) {
        el.removeClass('is-collapse');
        el.find('span').text(elExpandAttrVal);
      } else {
        el.addClass('is-collapse');
        el.find('span').text(elCollapseAttrVal);
      }

      $('[filters-node-js]').slideToggle(350);
    });
  };

  var faqCollapse = function faqCollapse() {
    $('.faq__collapse-head').on('click', function (ev) {
      var el = $(ev.currentTarget);

      if (el.hasClass('is-active')) {
        el.removeClass('is-active');
        el.siblings('.faq__collapse-body').slideUp(350);
      } else {
        $('.faq__collapse-head').removeClass('is-active');
        el.addClass('is-active');

        $('.faq__collapse-body').slideUp(350);
        el.siblings('.faq__collapse-body').slideDown(350);
      }
    });
  };

  var supportCollapse = function supportCollapse() {
    $('.support__collapse-toggle').on('click', function (ev) {
      var el = $(ev.currentTarget);

      if (el.hasClass('is-active')) {
        el.removeClass('is-active');
        el.closest('.support__collapse-head').siblings('.support__collapse-body').slideUp(350);
      } else {
        $('.support__collapse-toggle').removeClass('is-active');
        el.addClass('is-active');

        $('.support__collapse-body').slideUp(350);
        el.closest('.support__collapse-head').siblings('.support__collapse-body').slideDown(350);
      }
    });
  };

  var plansCB = function plansCB() {
    $('.plans__option input[type="checkbox"]').on('change', function (ev) {
      if ($(ev.currentTarget).is(':checked')) {

        $.each($('.plans__box-price'), function (idx, val) {
          $(val).find('span').text($(val).attr('data-monthly-price'));
        });
      } else {

        $.each($('.plans__box-price'), function (idx, val) {
          $(val).find('span').text($(val).attr('data-annual-price'));
        });
      }
    });
  };

  var solutionEveryoneCB = function solutionEveryoneCB() {
    $('.solutions__box-head').on('click', function (ev) {
      if ($(window).width() < 768) {
        if ($(ev.currentTarget).hasClass('is-active')) {
          $(ev.currentTarget).removeClass('is-active');
          $(ev.currentTarget).siblings('.solutions__box-body').slideUp(350);
        } else {
          $('.solutions__box-head').removeClass('is-active');
          $(ev.currentTarget).addClass('is-active');

          $('.solutions__box-body').slideUp(350);
          $(ev.currentTarget).siblings('.solutions__box-body').slideDown(350);
        }
      }
    });
  };
  /*
  * CALLBACK :: end
  * ============================================= */

  /**
   * @name initNative
   * @description Init all method
   */
  var initNative = function initNative() {
    // default
    initPreventBehavior();
    // ==========================================

    // lib
    initSwiper();
    initStellar();
    initHamburger();
    initPopups();
    // ==========================================

    // callback
    gatorAnimation();
    headerFixed();
    expandFilters();
    faqCollapse();
    supportCollapse();
    filtersCB();
    plansCB();
    solutionEveryoneCB();
    // ==========================================

    // OTHER
    $('[data-toggle="tooltip"]').tooltip();
    // ==========================================
  };
  initNative();
})();
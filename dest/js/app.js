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

	new Swiper('.reviewsSlider', {
		loop: false,
		effect: 'flip',
		flipEffect: {
			slideShadows: false
		},
		speed: 800,
		slidesPerView: 1,
		spaceBetween: 30,
		navigation: {
			nextEl: '.reviews__btn--next',
			prevEl: '.reviews__btn--prev'
		}
	});
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

		var dino = $('#dino'),
		    eyeLeft = $('#dinoEyeLeft'),
		    eyeLeftWhite = $('#dinoEyeLeftWhite'),
		    eyebrownLeft = $('#dinoEyebrowLeft'),
		    eyebrownRight = $('#dinoEyebrowRight'),
		    dinoTail = $('#dinoTail'),
		    leftHand = $('#dinoHandLeft'),
		    rightHand = $('#dinoHandRight');

		tl.set([dinoEyeLeft, dinoEyeLeftWhite], { transformOrigin: 'center' }).set(eyebrownLeft, { transformOrigin: 'center' }).set(eyebrownRight, { transformOrigin: 'center' });

		tl.fromTo(dino, 1.35, { x: -2, rotation: 0 }, { x: 2, rotation: 5, ease: Power1.easeInOut }, '-=1.35').fromTo(eyeLeft, 1.35, { scaleY: 1, rotation: 15 }, { scaleY: 0, rotation: 15, ease: Power1.easeInOut }, '-=1.35').fromTo(eyeLeftWhite, 1.35, { scaleY: 1, rotation: 15 }, { scaleY: 0, rotation: 15, ease: Power1.easeInOut }, '-=1.35').fromTo(eyebrownLeft, 1.35, { rotation: 0 }, { rotation: 12, ease: Power1.easeInOut }, '-=1.35').fromTo(eyebrownRight, 1.35, { rotation: 0 }, { rotation: -15, ease: Power1.easeInOut }, '-=1.35').fromTo(dinoTail, 1.35, { y: 0, rotation: 0 }, { y: -65, rotation: 50, ease: Power1.easeInOut }, '-=1.35').fromTo(leftHand, 1.35, { x: 0, rotation: 0 }, { x: 2, rotation: -30, ease: Power1.easeInOut }, '-=1.35').fromTo(rightHand, 1.35, { y: 0, rotation: 0 }, { y: 2, rotation: -30, ease: Power1.easeInOut }, '-=1.35');
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
		// ==========================================

		// callback
		gatorAnimation();
		headerFixed();
		// ==========================================
	};
	initNative();
})();
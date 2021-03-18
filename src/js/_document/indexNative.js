/**
 * @description Document DOM ready.
 */
(function () {
	/*
	* CALLBACK :: start
	* ============================================= */
	const gatorAnimation = () => {
		const tl = new TimelineMax({repeat: -1, yoyo: true});
		
		if(!$('#dino').length) return false;
		
		const dino = $('#dino'),
			eyeLeft = $('#dinoEyeLeft'),
			eyeLeftWhite = $('#dinoEyeLeftWhite'),
			eyebrownLeft = $('#dinoEyebrowLeft'),
			eyebrownRight = $('#dinoEyebrowRight'),
			dinoTail = $('#dinoTail'),
			leftHand = $('#dinoHandLeft'),
			rightHand = $('#dinoHandRight');
		
		tl
			.set([dinoEyeLeft, dinoEyeLeftWhite], {transformOrigin: 'center'})
			.set(eyebrownLeft, {transformOrigin: 'center'})
			.set(eyebrownRight, {transformOrigin: 'center'});
		
		tl
			.fromTo(dino, 1.3, {x: -3, y: 2, rotation: 0}, {x: 3, y: -5, rotation: 5, ease:Power1.easeInOut}, '-=1.3')
			.fromTo(eyeLeft, 1.3, {scaleY:1, rotation: 15}, {scaleY:0, rotation: 15, ease:Power1.easeInOut}, '-=1.3')
			.fromTo(eyeLeftWhite, 1.3, {scaleY:1, rotation: 15}, {scaleY:0, rotation: 15, ease:Power1.easeInOut}, '-=1.3')
			.fromTo(eyebrownLeft, 1.3, {rotation: 0}, {rotation: 12, ease:Power1.easeInOut}, '-=1.3')
			.fromTo(eyebrownRight, 1.3, {rotation: 0}, {rotation: -15, ease:Power1.easeInOut}, '-=1.3')
			.fromTo(dinoTail, 1.3, {y: 0, rotation: 0}, {y: -65, rotation: 50, ease:Power1.easeInOut}, '-=1.3')
			.fromTo(leftHand, 1.3, {x: 0, rotation:0}, {x:2, rotation: -30, ease:Power1.easeInOut}, '-=1.3')
			.fromTo(rightHand, 1.3, {y:0, rotation:0}, {y:2, rotation: -30, ease:Power1.easeInOut}, '-=1.3');
	};
	
	
	const headerFixed = function headerFixed() {
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
		
		if($window.scrollTop() > 0) {
			$element.addClass('is-color');
		} else {
			$element.removeClass('is-color')
		}
		
		$window.on('scroll', function (ev) {
			if($window.scrollTop() > 0) {
				$element.addClass('is-color');
			} else {
				$element.removeClass('is-color')
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
	
	
	const expandFilters = () => {
		$('[expand-all-js]').on('click', (ev) => {
			const el = $(ev.currentTarget),
				elExpandAttrVal = el.attr('data-expand'),
				elCollapseAttrVal = el.attr('data-collapse');
			
			if(el.hasClass('is-collapse')) {
				el.removeClass('is-collapse');
				el.find('span').text(elExpandAttrVal);
			} else {
				el.addClass('is-collapse');
				el.find('span').text(elCollapseAttrVal);
			}
			
			$(ev.currentTarget).closest('.services-main__link').find('> div').slideToggle(350);
		});
	};
	
	
	const filtersCB = () => {
		$('[filters-toggle-js]').on('click', (ev) => {
			$('#filters').addClass('is-open');
		});
		
		$('[filters-close-js]').on('click', (ev) => {
			$('#filters').removeClass('is-open');
		});
		
		$('[filters-expand-js]').on('click', (ev) => {
			const el = $(ev.currentTarget),
				elExpandAttrVal = el.attr('data-expand'),
				elCollapseAttrVal = el.attr('data-collapse');
			
			if(el.hasClass('is-collapse')) {
				el.removeClass('is-collapse');
				el.find('span').text(elExpandAttrVal);
			} else {
				el.addClass('is-collapse');
				el.find('span').text(elCollapseAttrVal);
			}
			
			$('[filters-node-js]').slideToggle(350);
		});
	};
	
	
	const faqCollapse = () => {
		$('.faq__collapse-head').on('click', (ev) => {
			const el = $(ev.currentTarget);
			
			if(el.hasClass('is-active')) {
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
	
	
	const supportCollapse = () => {
		$('.support__collapse-toggle').on('click', (ev) => {
			const el = $(ev.currentTarget);
			
			if(el.hasClass('is-active')) {
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
	
	
	const plansCB = () => {
		$('.plans__option input[type="checkbox"]').on('change', (ev) => {
			if($(ev.currentTarget).is(':checked')) {
				
				$.each($('.plans__box-price'), (idx, val) => {
					$(val).find('span').text($(val).attr('data-monthly-price'));
				});
				
			} else {
				
				$.each($('.plans__box-price'), (idx, val) => {
					$(val).find('span').text($(val).attr('data-annual-price'));
				});
				
			}
		});
	};
	
	
	const solutionEveryoneCB = () => {
		$('.solutions__box-head').on('click', (ev) => {
			if($(window).width() < 768) {
				if($(ev.currentTarget).hasClass('is-active')) {
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
	const initNative = () => {
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
	};
	initNative();
})();

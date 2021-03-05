/**
 * @description Document DOM ready.
 */
(function () {
	/*
	* CALLBACK :: start
	* ============================================= */
	const gatorAnimation = () => {
		const tl = new TimelineMax({repeat: -1, yoyo: true});
		
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
			.fromTo(dino, 1.35, {x: -2, rotation: 0}, {x: 2, rotation: 5, ease:Power1.easeInOut}, '-=1.35')
			.fromTo(eyeLeft, 1.35, {scaleY:1, rotation: 15}, {scaleY:0, rotation: 15, ease:Power1.easeInOut}, '-=1.35')
			.fromTo(eyeLeftWhite, 1.35, {scaleY:1, rotation: 15}, {scaleY:0, rotation: 15, ease:Power1.easeInOut}, '-=1.35')
			.fromTo(eyebrownLeft, 1.35, {rotation: 0}, {rotation: 12, ease:Power1.easeInOut}, '-=1.35')
			.fromTo(eyebrownRight, 1.35, {rotation: 0}, {rotation: -15, ease:Power1.easeInOut}, '-=1.35')
			.fromTo(dinoTail, 1.35, {y: 0, rotation: 0}, {y: -65, rotation: 50, ease:Power1.easeInOut}, '-=1.35')
			.fromTo(leftHand, 1.35, {x: 0, rotation:0}, {x:2, rotation: -30, ease:Power1.easeInOut}, '-=1.35')
			.fromTo(rightHand, 1.35, {y:0, rotation:0}, {y:2, rotation: -30, ease:Power1.easeInOut}, '-=1.35');
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
		// ==========================================

		// callback
		gatorAnimation();
		// ==========================================
	};
	initNative();
})();



/**
 * @name initHamburger
 *
 * @description Init hamburger logic with animated
 */
const initHamburger = () => {

  const btn = document.querySelector("[hamburger-js]"),
	  btnClose = document.querySelector('.header__close'),
    hideScrollContainer = document.querySelectorAll("html, body"),
    mobileContainer = document.querySelector("[mobile-block-js]");

	/**
   * @description
	 */
	btn.addEventListener("click", (ev) => {
    const elem = ev.currentTarget;

    elem.classList.add("is-active");
    mobileContainer.classList.add("is-open");

    hideScrollContainer.forEach((val, idx) => {
      val.classList.add("is-hideScroll");
    });

  });
	
	btnClose.addEventListener("click", (ev) => {
		btn.classList.remove("is-active");
    mobileContainer.classList.remove("is-open");

    hideScrollContainer.forEach((val, idx) => {
      val.classList.remove("is-hideScroll");
    });

  });

};

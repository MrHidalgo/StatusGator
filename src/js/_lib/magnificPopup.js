

/**
 * @name initPopups
 *
 * @description
 */
const initPopups = () => {

  if($('[popup-js]').length > 0) {
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
        beforeOpen: function() {
          this.st.mainClass = this.st.el.attr('data-effect');
        },
        close: function() {}
      }
    });
  
    $('[popup-close-js]').on('click', (ev) => {
      $.magnificPopup.close();
    });
  }

};

;(function($) {

  dd_GLOBAL.hide_thought_bubbles = function() {

    $('.dd-thought').each(function() {
      $(this).hide();
    });

  }

  dd_GLOBAL.show_thought_bubbles = function() {

    $('.dd-thought').each(function() {
      $(this).delay(300).fadeIn(200);
    });

  }

  // show thought bubble on page load
  dd_GLOBAL.show_thought_bubbles();

  // show thought bubble on orientation change
  $(window).on('orientationchange', function() {
    dd_GLOBAL.hide_thought_bubbles();
    dd_GLOBAL.show_thought_bubbles();
  });

}(jQuery));

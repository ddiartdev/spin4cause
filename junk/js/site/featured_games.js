;(function($) {
  
  // center text vertically using display:table-cell (apparently) needs height set in css
  // since the featured games are responsive, set the height on page load
  function set_height() {

    var the_items = $('.dd-flip-back-face-heading');

    $(the_items).each(function() {

      var the_this = $(this),
          the_new_height = $(the_this).parent().outerHeight();

      $(the_this).height(the_new_height);

    });

  }

  // call on page load
  set_height();

  // call on page resize or orientation change
  $(window).on('resize orientationChanged', function() {
    set_height();
  });

}(jQuery));

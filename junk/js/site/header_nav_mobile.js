;(function($) {

  $('#dd-header-nav-mobile-icon').on('click', function() {

    // if the nav is active
    if( $('#dd-header-nav').hasClass('dd-active-nav') ) {

        function animate_opacity(callback) {

          $('#dd-header-nav').animate({
            'opacity': 0
          }, 250, callback);

        }

        function cleanup() {

          $('#dd-header-nav').removeClass('dd-active-nav').removeAttr('style');

        }

        animate_opacity(cleanup);

    // if the nav is not active
    } else {

      // fade in the nav 
      $('#dd-header-nav')
        .addClass('dd-active-nav')
        .animate({
          'opacity': 1
        }, 300);

    }

  });

}(jQuery));

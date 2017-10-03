;(function($) {

  $.fn.vertically_center = function(offset_limit) {

    return this.each(function() {

      var the_element = $(this),
          window_height = $(window).height(),
          element_height = $(the_element).outerHeight(),
          current_window_scroll = $(window).scrollTop(),
          top_offset = Math.ceil( (window_height - element_height) / 2),
          scroll_adjusted_top_offset = current_window_scroll + top_offset,
          scroll_adjusted_offset_limit = current_window_scroll + offset_limit;

          console.log('top offset: ' + top_offset);
          console.log('offset limit: ' + offset_limit);
          console.log('scroll adjusted top offset: ' + scroll_adjusted_top_offset);
          console.log('scroll adjusted offset limit: ' + scroll_adjusted_offset_limit);
          console.log('window height: ' + window_height);
          console.log('the element height: ' + element_height);

      // remove any previous styling
      $(the_element).removeAttr('style');

      // if the calculated top_offset is between 0 and the offset limit
      if ( (top_offset >= 0) && (top_offset <= offset_limit) ) {

        $(the_element).css('top', scroll_adjusted_top_offset + 'px');

      // if the calculated top_offset is greater than the offset limit
      } else if ( (top_offset >= 0) && (top_offset > offset_limit) ) {

        $(the_element).css('top', scroll_adjusted_offset_limit + 'px');

      // if the calculated top_offset is less than zero
      } else if (top_offset < 0) {

        $(the_element).css('top', current_window_scroll + 'px');

      // log any errors
      } else {

        console.warn('error in vertically_center.js');

      }

    });

  }; 

}(jQuery));
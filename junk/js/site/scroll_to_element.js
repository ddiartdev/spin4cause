;(function($) {

  // TODO: FUNCTIONIZE AND ABSTRACT AS THIS IS DECIDEDLY NOT DRY

  // SCROLL TO OPEN POSITIONS 
  $('#dd-careers-page-scroll-trigger').click(function(e) {

    e.preventDefault();

    // reset dd-open-positions margin-bottom in case scroll_to_element has already been executed
    $('.dd-open-positions').css('margin-bottom', 0);

    var amount_to_scroll = $('#dd-open-positions').offset().top,
        viewport_height = $(window).height(),
        document_height = $(document).height(),
        scroll_differential = document_height - amount_to_scroll;

    // if the element will not scroll all the way to top of page because the page is not tall enough
    // add height to footer to make possible full scroll possible
    function adjust_for_scroll_differential(callback) {

      if (viewport_height > scroll_differential) {

        // increase footer height so that element can scroll to top of page
        $('.dd-open-positions').css('marginBottom', viewport_height - scroll_differential + 'px');

        // scroll to the element
        callback();

      } else {

        // scroll to the element
        callback();

      }

    }

    function scroll_to_element() {

      $('html, body').animate({
        scrollTop: amount_to_scroll
      }, 300);  

    }

    // start the animation
    adjust_for_scroll_differential(scroll_to_element);
  
  });
  // END SCROLL TO OPEN POSITIONS

  // SCROLL TO BENEFITS AND PERKS
  $('.dd-page-careers .dd-hero-image').click(function(e) {

    e.preventDefault();

    // reset dd-open-positions margin-bottom in case scroll_to_element has already been executed
    $('.dd-open-positions').css('margin-bottom', 0);

    var amount_to_scroll = $('.dd-benefits-perks').offset().top,
        viewport_height = $(window).height(),
        document_height = $(document).height(),
        scroll_differential = document_height - amount_to_scroll;

    // if the element will not scroll all the way to top of page because the page is not tall enough
    // add height to footer to make possible full scroll possible
    function adjust_for_scroll_differential(callback) {

      if (viewport_height > scroll_differential) {

        // increase footer height so that element can scroll to top of page
        $('.dd-open-positions').css('marginBottom', viewport_height - scroll_differential + 'px');

        // scroll to the element
        callback();

      } else {

        // scroll to the element
        callback();

      }

    }

    function scroll_to_element() {

      $('html, body').animate({
        scrollTop: amount_to_scroll
      }, 300);  

    }

    // start the animation 
    adjust_for_scroll_differential(scroll_to_element);
  
  });
  // END SCROLL TO BENEFITS AND PERKS

}(jQuery));






    


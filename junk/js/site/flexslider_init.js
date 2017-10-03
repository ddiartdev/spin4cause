;(function($) {
    
  $(window).load(function() {

    var the_slider = $('#dd-home-slideshow').flexslider({
      namespace: "dd-home-slideshow-",
      animation: "slide",
      prevText: "",   
      nextText: "",
      showmarkers: true, 
      controlNav: true,
      directionNav: true,
      slideshowSpeed: 5000,   
      animationSpeed: 300,
      useCSS: false,
      before: function() {
        // this function is in thought_bubbles.js
        dd_GLOBAL.hide_thought_bubbles();
      },
      after: function() {
        // this function is in thought_bubbles.js
        dd_GLOBAL.show_thought_bubbles();
        // this function is in lazyload_init.js
        dd_GLOBAL.home_slideshow_lazyload_images();
      }          
    });

  });

}(jQuery));

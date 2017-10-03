;(function($) {

  // nav item hover effect
  $('.dd-header-nav li').hover(
    
    function() {
      
      var this_item = $(this),
          the_nav_items = $('.dd-header-nav li');
      
      $(the_nav_items).not(this_item).animate({
        'opacity' : .6
      }, { queue: false, duration: 300 } );

    },
    
    function() {
      
      var this_item = $(this),
          the_nav_items = $('.dd-header-nav li');
      
      $(the_nav_items).not(this_item).animate({
        'opacity' : 1
      }, { queue: false, duration: 300 } );
            
    }
    
  );
  // end nav item hover effect

  // nav item hover effect
  $('.dd-footer-nav li').hover(
    
    function() {
      
      var this_item = $(this),
          the_nav_items = $('.dd-footer-nav li');
      
      $(the_nav_items).not(this_item).animate({
        'opacity' : .6
      }, { queue: false, duration: 300 } );

    },
    
    function() {
      
      var this_item = $(this),
          the_nav_items = $('.dd-footer-nav li');
      
      $(the_nav_items).not(this_item).animate({
        'opacity' : 1
      }, { queue: false, duration: 300 } );
            
    }
    
  );
  // end nav item hover effect

}(jQuery));

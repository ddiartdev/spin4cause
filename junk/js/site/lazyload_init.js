;(function($) {

  $(document).ready(function() {

    try {

      console.log('lazyload happened');

      // on scroll
      $('.dd-lazyload').lazyload({ 
        threshold : 200,
        failure_limit : 10,
        skip_invisible : true,
        effect : 'show',
        event : 'scroll' 
      });
      // end on scroll

      // home hero slideshow
      $('.dd-home-slideshow .dd-lazyload').lazyload({ 
        threshold : 200,
        failure_limit : 10,
        skip_invisible : true,
        effect : 'show',
        event : 'home_hero_lazyload' 
      });

      // on flexslider animate
      // see flexslider_init.js 
      dd_GLOBAL.home_slideshow_lazyload_images = function() {
        $('.dd-home-slideshow .dd-lazyload').trigger('home_hero_lazyload');      
      }
      // end on flexslider animate

      // on hover over slideshow
      $('.dd-home-slideshow-inner-wrapper').on('mouseenter', function() {
        $('.dd-home-slideshow .dd-lazyload').trigger('home_hero_lazyload');
      });
      // end on hover over slideshow
      // end home hero slideshow

      // featured games section
      // the backface was not loading in ie8 
      $('.dd-flip-back-face .dd-lazyload').lazyload({ 
        threshold : 200,
        failure_limit : 10,
        skip_invisible : false,
        effect : 'show',
        event : 'scroll' 
      });
      // end featured games section

      // team member modals
      dd_GLOBAL.team_modal_lazyload_images = function() {
        $('.dd-team-member-modal .dd-lazyload').trigger('team_modal_lazyload');
      }

      $('.dd-team-member-modal .dd-lazyload').lazyload({ 
        threshold : 2000,
        failure_limit : 100,
        skip_invisible : false,
        effect : 'show',
        event : 'team_modal_lazyload' 
      });
      // end team member modals

    } catch(error) {

      console.log(error);

    }

  });  

}(jQuery));
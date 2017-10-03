;(function($) {

  var the_overlay = $('#dd-team-member-modal-overlay'),
      the_modals = $('.dd-team-member-modal');

  // show the modal
  $('.dd-team-member').on('click', function() {

    var the_team_member_id = $(this).attr('data-team-member');

    // lazyload the team member image
    dd_GLOBAL.team_modal_lazyload_images();

    // vertically center and then fade in the modal
    $('#' + the_team_member_id).vertically_center(130).fadeIn(300);

    // fade in the overlay
    $(the_overlay).fadeIn(300);

  });
  // end show the modal

  // hide the modal when close button clicked
  $('.dd-team-member-modal-close-button').on('click', function() {

    $(the_modals).filter(':visible').fadeOut(300);
    $(the_overlay).fadeOut(300);

  });
  // end hide the modal when close button clicked

  // hide modal when overlay clicked
  $(the_overlay).on('click', function() {

    $(the_modals).filter(':visible').fadeOut(300);
    $(the_overlay).fadeOut(300);

  });
  // end hide modal when overlay clicked

}(jQuery));
;(function($) {
    
  // EE is adding unnecessary p tags with content added thru the rich text editor
  // this removes them from the dom
  $(document).ready(function() {
    
    $('.dd-page-careers .dd-benefits-perk-item p').each(function() {

      var the_tag = $(this),
          the_tag_contents = $(the_tag).text(),
          the_trimmed_contents = $.trim(the_tag_contents);

      // if there is no text in the paragraph tag
      if ( the_trimmed_contents === "" ) {
        $(the_tag).remove();
      }

    });

  });

}(jQuery));
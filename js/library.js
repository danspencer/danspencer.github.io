$(function() {
    var tags = $('.container *');

    // Iterate through each tag within the given block
    tags.each(function() {
      // Get the tag name
      var tag = $(this).prop('tagName').toLowerCase();
      // Initialize the string variable containing that will contain a string representation of any/all HTML tag attributes
      var attributes = '';
      // Iterate through the attributes of the current HTML tag
      $.each(this.attributes,function(item, attribute){
        // Add the attributes to the attributes string
        attributes = attributes + ' ' + attribute.name + '=\"' + attribute.value + '"';
      })
      // Add the HTML markup to display the used HTML markup
      if (tag == "ul") {
        $(this).before('<span class="markup">&lt;' + tag + attributes + '&gt;</span>').after('<span class="markup">&lt;/' + tag + '&gt;</span>');
      } else {
        $(this).prepend('<span class="markup">&lt;' + tag + attributes + '&gt;</span>').append('<span class="markup">&lt;/' + tag + '&gt;</span>');
      }
    });
});

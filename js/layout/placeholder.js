// Make sure placeholders are available for the popups
if (document.createElement("input").placeholder == undefined) {
  // For every element that has a placeholder attribute
  $('[placeholder]').each(function() {
    var $this = $(this),
        placeholderValue = $this.attr('placeholder');

    // If the field is empty, put the placeholder in it
    if ($this.val() == '') {
      $this.val( placeholderValue );
      $this.addClass('hasPlaceholderText');
    };
  });
}

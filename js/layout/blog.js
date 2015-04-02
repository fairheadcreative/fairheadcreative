$(function() {
  $('.get-freebie, .modal-close').on('click', function(e) {
    $('#freebie-modal, .modal-overlay').toggleClass('open');
    return false;
  });
});

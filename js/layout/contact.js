$(function() {
  $('.contact #option-1').on('click', function(e) {
    $('.option').removeClass('secondary').removeClass('selected').addClass('secondary');
    $(this).removeClass('secondary').addClass('selected');
    $('.result').removeClass('is-visible');
    $('#project-planner').addClass('is-visible');
    return false;
  });

  $('.contact #option-2').on('click', function(e) {
    $('.option').removeClass('secondary').removeClass('selected').addClass('secondary');
    $(this).removeClass('secondary').addClass('selected');
    $('.result').removeClass('is-visible');
    $('#prices').addClass('is-visible');
    return false;
  });

  $('.contact #option-3').on('click', function(e) {
    $('.option').removeClass('secondary').removeClass('selected').addClass('secondary');
    $(this).removeClass('secondary').addClass('selected');
    $('.result').removeClass('is-visible');
    $('#something-else').addClass('is-visible');
    return false;
  });
});

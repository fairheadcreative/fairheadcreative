$(function() {

  // Viner
  if ($('body').hasClass('home')) {
    $(".viner").append("<div class='vine-1'><div class='screen'></div></div><div class='vine-1-1'><div class='screen'></div></div><div class='vine-2'><div class='screen'></div></div><div class='vine-2-1'><div class='screen'></div></div><div class='vine-3'><div class='screen'></div></div><div class='vine-3-1'><div class='screen'></div></div><div class='vine-4'><div class='screen'></div></div><div class='vine-4-1'><div class='screen'></div></div>");
    
    $(function viner() {

      $(".viner .vine-1").show(0).animate({
        top: "0"
      }, 1000 ).delay(4000).animate({
        top: "629"
      }, 1000 ).hide(0);
      
      $(".viner .vine-1-1").show(0).delay(100).animate({
        top: "400"
      }, 1000 ).delay(4000).animate({
        top: "700"
      }, 1000 ).hide(0);
      
      $(".viner .vine-2").show(0).delay(5500).animate({
        top: "0"
      }, 1000 ).delay(4000).animate({
        top: "629"
      }, 1000 ).hide(0);
      
      $(".viner .vine-2-1").show(0).delay(5600).animate({
        top: "400"
      }, 1000 ).delay(4000).animate({
        top: "700"
      }, 1000 ).hide(0);
      
      $(".viner .vine-3").show(0).delay(11000).animate({
        top: "0"
      }, 1000 ).delay(4000).animate({
        top: "629"
      }, 1000 ).hide(0);
      
      $(".viner .vine-3-1").show(0).delay(11100).animate({
        top: "400"
      }, 1000 ).delay(4000).animate({
        top: "700"
      }, 1000 ).hide(0);
      
      $(".viner .vine-4").show(0).delay(16500).animate({
        top: "0"
      }, 1000 ).delay(4000).animate({
        top: "629"
      }, 1000 ).hide(0);
      
      $(".viner .vine-4-1").show(0).delay(16600).animate({
        top: "400"
      }, 1000 ).delay(4000).animate({
        top: "700"
      }, 1000 ).hide(0);
      
      setTimeout(viner,25000);
      
    });
  };

  // Home Strap Form
  $('.strap-submit').on('click', function(e) {
    $('#key-modal input[type="url"]').remove();
    $(this).parent().find('input[type="url"]').clone().insertAfter('#key-modal input[type="email"]');
  });

  // Florida page

  setTimeout(h1Span1, 2000);

  function h1Span1() {
    $('.h1-span-1').removeClass('is-visible');
    $('.h1-span-2').addClass('is-visible');
    setTimeout(h1Span2, 2000);
  }

  function h1Span2() {
    $('.h1-span-2').removeClass('is-visible');
    $('.h1-span-3').addClass('is-visible');
    setTimeout(h1Span3, 2000);
  }

  function h1Span3() {
    $('.h1-span-3').removeClass('is-visible');
    $('.h1-span-4').addClass('is-visible');
    setTimeout(h1Span4, 2000);
  }

  function h1Span4() {
    $('.h1-span-4').removeClass('is-visible');
    $('.h1-span-5').addClass('is-visible');
    setTimeout(h1Span5, 2000);
  }

  function h1Span5() {
    $('.h1-span-5').removeClass('is-visible');
    $('.h1-span-1').addClass('is-visible');
    setTimeout(h1Span1, 2000);
  }

});

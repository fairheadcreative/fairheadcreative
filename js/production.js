// Add 'visible()' jQuery functionality
;(function(e){e.fn.visible=function(t,n,r){var i=e(this).eq(0),s=i.get(0),o=e(window),u=o.scrollTop(),a=u+o.height(),f=o.scrollLeft(),l=f+o.width(),c=i.offset().top,h=c+i.height(),p=i.offset().left,d=p+i.width(),v=t===true?h:c,m=t===true?c:h,g=t===true?d:p,y=t===true?p:d,b=n===true?s.offsetWidth*s.offsetHeight:true,r=r?r:"both";if(r==="both")return!!b&&m<=a&&v>=u&&y<=l&&g>=f;else if(r==="vertical")return!!b&&m<=a&&v>=u;else if(r==="horizontal")return!!b&&y<=l&&g>=f}})(jQuery);

// Freebie modal
$(function() {
  $('.get-freebie, #freebie-modal .modal-close').on('click', function(e) {
    $('#freebie-modal, .modal-overlay').toggleClass('open');
    return false;
  });
});

// If scroll…
$(window).scroll(function() {
  // Fix Share section to the bottom when scrolling down
  if ($('#closing').visible(true) || $('.share').visible(true)) {
    $('.share-inner').removeClass('fixed');
  } else {
    $('.share-inner').addClass('fixed');
  }
});

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
    $('#free-report input[type="url"]').remove();
    $('.strap-form input[type="url"]').clone().insertAfter('#free-report input[type="email"]');
  });

  $('.strap-submit, #free-report .modal-close').on('click', function(e) {
    $('#free-report, .modal-overlay').toggleClass('open');
    return false;
  });
});

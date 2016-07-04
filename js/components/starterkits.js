// Add 'visible()' jQuery functionality
;(function(e){e.fn.visible=function(t,n,r){var i=e(this).eq(0),s=i.get(0),o=e(window),u=o.scrollTop(),a=u+o.height(),f=o.scrollLeft(),l=f+o.width(),c=i.offset().top,h=c+i.height(),p=i.offset().left,d=p+i.width(),v=t===true?h:c,m=t===true?c:h,g=t===true?d:p,y=t===true?p:d,b=n===true?s.offsetWidth*s.offsetHeight:true,r=r?r:"both";if(r==="both")return!!b&&m<=a&&v>=u&&y<=l&&g>=f;else if(r==="vertical")return!!b&&m<=a&&v>=u;else if(r==="horizontal")return!!b&&y<=l&&g>=f}})(jQuery);

jQuery(function($) {
  $(window).scroll(function() {
    if ($('.starterkit .splash svg').length > 0) {
      if ($('.starterkit .splash svg').visible(true)) {
        $('.start-box-wrapper').removeClass('fixed');
      } else {
        $('.start-box-wrapper').addClass('fixed');
      }
    }

    if ($('.thankfully').length > 0) {
      if ($('#how-it-works').visible(true) || $('#letter').visible(true) || $('#faq').visible(true) || $('.feature-testimonial').visible(true)) {
        $('.thankfully').addClass('fixed');
        $('.thankful-spotter').addClass('hold');
      } else {
        $('.thankfully').removeClass('fixed');
        $('.thankful-spotter').removeClass('hold');
      }

      if ($('.thankful-big').visible(true)) {
        $('.thankfully').addClass('big');
      } else {
        $('.thankfully').removeClass('big');
      }
    }

    if ($('.fs-content-1').length > 0) {
      if ($('.fs-content-1').visible(true)) {
        $('.fs-content-1').addClass('scrolled');
      } else {
        $('.fs-content-1').removeClass('scrolled');
      }
    }
  });

  $(document).on('click', '.open-capture', function() {
    $('.single-section-capture').show().addClass('animated bounceInUp');
    $('.capture-bg').fadeIn();
    $('.share, .global-footer').fadeOut();
    return false;
  });

  $(document).on('click', '.home-modal-open', function() {
    $('.home-modal').removeClass('bounceOutDown').addClass('is-visible animated bounceInUp');
    $('.home-modal-bg').addClass('is-visible');
    $('.thankfully').addClass('duck');
    return false;
  });

  $(document).on('click', '.home-modal-close', function() {
    $('.home-modal').removeClass('bounceInUp').addClass('bounceOutDown');
    setTimeout(function () { 
      $('.home-modal').removeClass('is-visible');
      $('.home-modal-bg').removeClass('is-visible');
      $('.thankfully').removeClass('duck');
    }, 800); 
    return false;
  });

  $(document).on('click', '.close-capture', function() {
    $('.single-section-capture').fadeOut().removeClass('animated bounceInUp');
    $('.capture-bg').fadeOut();
    $('.share, .global-footer').fadeIn();
    return false;
  });

  $(document).on('click', '.open-subscribe', function() {
    $('.single-section-subscribe').show().addClass('animated bounceInUp');
    $('.capture-bg').fadeIn();
    $('.share, .global-footer').fadeOut();
    return false;
  });

  $(document).on('click', '.close-subscribe', function() {
    $('.single-section-subscribe').fadeOut().removeClass('animated bounceInUp');
    $('.capture-bg').fadeOut();
    $('.share, .global-footer').fadeIn();
    return false;
  });

  $(document).on('click', '.proposal-next-1', function() {
    $('.proposal-next-1').removeClass('proposal-next-1').addClass('proposal-next-2').parent().removeClass('content-1').addClass('content-2');
    return false;
  });
  $(document).on('click', '.proposal-next-2', function() {
    $('.proposal-next-2').removeClass('proposal-next-2').addClass('proposal-next-3').parent().removeClass('content-2').addClass('content-3');
    return false;
  });
  $(document).on('click', '.proposal-next-3', function() {
    $('.proposal-next-3').removeClass('proposal-next-3').addClass('proposal-next-4').parent().removeClass('content-3').addClass('content-4');
    return false;
  });
  $(document).on('click', '.proposal-next-4', function() {
    $('.proposal-next-4').removeClass('proposal-next-4').addClass('proposal-next-5').parent().removeClass('content-4').addClass('content-5');
    return false;
  });
});

jQuery(function($) {
  var _ouibounce = ouibounce(document.getElementById('exiting'), {
    aggressive: true,
    timer: 0,
    callback: function() { $('#exiting').removeClass('animated bounceOutUp').addClass('animated bounceInDown'); }
  });

  $('body').on('click', function() { $('#exiting').removeClass('animated bounceInDown').addClass('animated bounceOutUp'); });
  $('#exiting').on('click', function(e) { e.stopPropagation(); });
});

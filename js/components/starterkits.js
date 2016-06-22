// Add 'visible()' jQuery functionality
;(function(e){e.fn.visible=function(t,n,r){var i=e(this).eq(0),s=i.get(0),o=e(window),u=o.scrollTop(),a=u+o.height(),f=o.scrollLeft(),l=f+o.width(),c=i.offset().top,h=c+i.height(),p=i.offset().left,d=p+i.width(),v=t===true?h:c,m=t===true?c:h,g=t===true?d:p,y=t===true?p:d,b=n===true?s.offsetWidth*s.offsetHeight:true,r=r?r:"both";if(r==="both")return!!b&&m<=a&&v>=u&&y<=l&&g>=f;else if(r==="vertical")return!!b&&m<=a&&v>=u;else if(r==="horizontal")return!!b&&y<=l&&g>=f}})(jQuery);

jQuery(function($) {
  $(window).scroll(function() {
    if ($('.starterkit .splash svg').visible(true)) {
      $('.start-box-wrapper').removeClass('fixed');
    } else {
      $('.start-box-wrapper').addClass('fixed');
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
    return false;
  });

  $(document).on('click', '.home-modal-close', function() {
    $('.home-modal').removeClass('bounceInUp').addClass('bounceOutDown');
    setTimeout(function () { 
      $('.home-modal').removeClass('is-visible');
      $('.home-modal-bg').removeClass('is-visible');
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
});

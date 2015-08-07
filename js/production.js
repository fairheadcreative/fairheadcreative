!function(e, i) {
    "function" == typeof define && define.amd ? define(i) : "object" == typeof exports ? module.exports = i(require, exports, module) : e.ouibounce = i()
}(this, function() {
    return function(e, i) {
        function n(e, i) {
            return "undefined" == typeof e ? i : e
        }
        function o(e) {
            var i = 24 * e * 60 * 60 * 1e3, n = new Date;
            return n.setTime(n.getTime() + i), "; expires=" + n.toGMTString()
        }
        function t() {
            y.addEventListener("mouseleave", u), y.addEventListener("keydown", r)
        }
        function u(e) {
            e.clientY > s || c("viewedOuibounceModal", "true")&&!f || (d(), v())
        }
        function r(e) {
            b || c("viewedOuibounceModal", "true")&&!f || e.metaKey && 76 == e.keyCode && (b=!0, d(), v())
        }
        function c(e, i) {
            var n = document.cookie.split("; ").reduce(function(e, i) {
                var n = i.split("=");
                return e[n[0]] = n[1], e
            }, {});
            return n[e] === i
        }
        function d() {
            e && (e.style.display = "block"), a()
        }
        function a(e) {
            var e = e || {};
            "undefined" != typeof e.cookieExpire && (l = o(e.cookieExpire)), e.sitewide===!0 && (k = ";path=/"), "undefined" != typeof e.cookieDomain && (p = ";domain=" + e.cookieDomain), document.cookie = "viewedOuibounceModal=true" + l + p + k, y.removeEventListener("mouseleave", u), y.removeEventListener("keydown", r)
        }
        var i = i || {}, f = i.aggressive ||!1, s = n(i.sensitivity, 20), m = n(i.timer, 1e3), v = i.callback || function() {}, l = o(i.cookieExpire) || "", p = i.cookieDomain ? ";domain=" + i.cookieDomain: "", k = i.sitewide===!0 ? ";path=/": "", y = document.getElementsByTagName("html")[0];
        setTimeout(t, m);
        var b=!1;
        return {
            fire: d,
            disable: a
        }
    }
});

// Add 'visible()' jQuery functionality
;(function(e){e.fn.visible=function(t,n,r){var i=e(this).eq(0),s=i.get(0),o=e(window),u=o.scrollTop(),a=u+o.height(),f=o.scrollLeft(),l=f+o.width(),c=i.offset().top,h=c+i.height(),p=i.offset().left,d=p+i.width(),v=t===true?h:c,m=t===true?c:h,g=t===true?d:p,y=t===true?p:d,b=n===true?s.offsetWidth*s.offsetHeight:true,r=r?r:"both";if(r==="both")return!!b&&m<=a&&v>=u&&y<=l&&g>=f;else if(r==="vertical")return!!b&&m<=a&&v>=u;else if(r==="horizontal")return!!b&&y<=l&&g>=f}})(jQuery);

// Freebie modal
$(function() {
  $('.strap-submit, .get-freebie, #key-modal .modal-close').on('click', function(e) {
    $('#key-modal').toggle();
    $('#key-modal .modal').toggleClass('animated bounceIn');
    return false;
  });
});

// If scroll…
$(window).scroll(function() {
  // Fix Share section to the bottom when scrolling down
  if ($('#closing').visible(true) || $('.share').visible(true) || $('.sidebar-item img').visible(true) || $('.recommended').visible(true) || $('.private-comment').visible(true)) {
    $('.share-inner').removeClass('fixed');
  } else {
    $('.share-inner').addClass('fixed');
  }

  // Add floating element to sidebar on articles
  if ($('.sidebar').visible(true) || $('.main .inline-freebie').visible(true) || $('#closing').visible(true) || $('.private-comment').visible(true)) {
    $('.sidebar .in-sidebar').fadeOut();
  } else {
    $('.sidebar .in-sidebar').fadeIn();
  }
});

// If user is about to leave
function addEvent(obj, evt, fn) {
    if (obj.addEventListener) {
        obj.addEventListener(evt, fn, false);
    }
    else if (obj.attachEvent) {
        obj.attachEvent("on" + evt, fn);
    }
}
addEvent(document, "mouseout", function(e) {
    e = e ? e : window.event;
    var from = e.relatedTarget || e.toElement;
    if (!from || from.nodeName == "HTML") {
      // the cursor has left the building
      console.log('leaving');
      $('#key-modal .email').focus();
      $('#key-modal .modal').toggleClass('animated bounceIn');
    }
});


$(document).ready(function(){

  // MailChimp Article Freebie Download / Subscribe
  
  ajaxMailChimpForm($(".article .modal form, .article .sidebar-item .subscribe-form, .blog-title-form"), $(".subscribe-result"));
  
  function ajaxMailChimpForm($form, $resultElement){
    // Hijack the submission. We'll submit the form manually.
    $form.submit(function(e) {
      e.preventDefault();
      if (!isValidEmail($form)) {
        var error =  "A valid email address must be provided.";
        $resultElement.html(error);
        $resultElement.css("color", "red");
      } else {
        $resultElement.css("color", "black");
        $resultElement.html("Subscribing...");
        submitSubscribeForm($form, $resultElement);
      }
    });
  }

  // Validate the email address in the form (also used by the home report)
  function isValidEmail($form) {
    // If email is empty, show error message.
    // contains just one @
    var email = $form.find("input[type='email']").val();
    if (!email || !email.length) {
      return false;
    } else if (email.indexOf("@") == -1) {
      return false;
    }
    return true;
  }

  // Submit the form with an ajax/jsonp request.
  // Based on http://stackoverflow.com/a/15120409/215821
  function submitSubscribeForm($form, $resultElement) {
    $.ajax({
      type: "GET",
      url: $form.attr("action"),
      data: $form.serialize(),
      cache: false,
      dataType: "jsonp",
      jsonp: "c", // trigger MailChimp to return a JSONP response
      contentType: "application/json; charset=utf-8",
      error: function(error){
        // According to jquery docs, this is never called for cross-domain JSONP requests
      },
      success: function(data){
        if (data.result != "success") {

          if ($("body").hasClass("article")) {
            var message = data.msg || "Sorry. Unable to subscribe (mail service provider issues) Here's your freebie anyway:";
            $('.subscribe-freebie').show();
          } else {
            var message = data.msg || "Sorry. Unable to subscribe (mail service provider issues). Contact our Executive Assistant at kris.parris@fairheadcreative.com for help.";
          };

          $resultElement.css("color", "red");
          $('.modal form input, .modal p').hide();

          if (data.msg && data.msg.indexOf("already subscribed") >= 0) {
            message = "Thanks, you're subscribed!";
            $('.subscribe-freebie').show();
            $('.modal form input, .modal p').hide();
            $resultElement.css("color", "black");
            $('.subscribe-result .freebie').show();
          }
          $resultElement.html(message);
        } else {
          $resultElement.css("color", "black");
          $('.modal form input, .modal p').hide();

          if ($("body").hasClass("article")) {
            $resultElement.html("Thanks!<br>Look for the confirmation link in your inbox, your freebie awaits!");
          } else {
            $resultElement.html("Great!<br>Look for the confirmation link in your inbox.");
          };
        }
      }
    });
  }

  // MailChimp Report
  
  ajaxMailChimpFormHome($(".strapline-form"), $(".subscribe-result"));
  
  function ajaxMailChimpFormHome($form, $resultElement){
    // Hijack the submission. We'll submit the form manually.
    $form.submit(function(e) {
      e.preventDefault();
      if (!isValidEmail($form)) {
        var error =  "We need a valid email address to send your report to.";
        $resultElement.html(error);
      } else {
        $resultElement.html("Submitting...");
        submitSubscribeFormHome($form, $resultElement);
      }
    });
  }

  // Submit the form with an ajax/jsonp request.
  // Based on http://stackoverflow.com/a/15120409/215821
  function submitSubscribeFormHome($form, $resultElement) {
    $.ajax({
      type: "GET",
      url: $form.attr("action"),
      data: $form.serialize(),
      cache: false,
      dataType: "jsonp",
      jsonp: "c", // trigger MailChimp to return a JSONP response
      contentType: "application/json; charset=utf-8",
      error: function(error){
        // According to jquery docs, this is never called for cross-domain JSONP requests
      },
      success: function(data){
        if (data.result != "success") {
          var message = data.msg || "Our mail service provider must be having problems. Email our Executive Assistant at kris.parris@fairheadcreative.com and we'll do it manually for you. ";

          if (data.msg && data.msg.indexOf("already subscribed") >= 0) {
            message = "Thanks, you've already requested a report! Email our Executive Assistant at kris.parris@fairheadcreative.com for help if you lost it!"; 
          }
          $resultElement.html(message);
        } else {
          $.post('http://fairheadcreative-mailer.herokuapp.com/welcome', {
            name: $('.strapline-form input[name="MMERGE1"]').val(),
            email: $('.strapline-form input[name="EMAIL"]').val(),
            website: $('.strapline-form input[name="MMERGE3"]').val(),
            key: '345e8e6fb8'
          });

          $('.modal form input, .modal p').hide();
          $resultElement.html("Sent!<br>Look for the confirmation link in your inbox, we only send to confirmed addresses for privacy reasons.");
          window.location = "/excited/";
        }
      }
    });
  }
  
  // Private Comment Form
  $('.form-comment').submit(function(event) {
    event.preventDefault();

    var form = $(this);

    var subject = form.find('input[name="subject"]').val();
    var name = form.find('input[name="name"]').val();
    var email = form.find('input[name="email"]').val();
    var comment = form.find('textarea').val();

    if (name.replace(/ /g,'').length == 0 || email.replace(/ /g,'').length == 0)
    {
      form.addClass('validation');
      return false;
    }
    else {
      $.post(form.attr('action'), {
        subject: subject,
        name: name,
        email: email,
        comment: comment,
        key: '345e8e6fb8'
      });

      form.fadeOut();
      form.parent().append("<div class='cta-thanks' style='display:none'><em>Thanks! We love reading your comments, and we love getting to know you.</em></div>");
      $('.cta-thanks').fadeIn();
    } 
  });
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

var _ouibounce = ouibounce(document.getElementById('key-modal'), {
  aggressive: true,
  timer: 0,
  callback: function() { console.log('ouibounce fired!'); }
});

$('#key-modal').on('click', function(e) {
  e.stopPropagation();
});

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
    $('#key-modal .email').focus();
    return false;
  });
});

// If scroll…
$(window).scroll(function() {
  // Fix Share section to the bottom when scrolling down
  if ($('#closing').visible(true) || $('.share').visible(true) || $('.sidebar-item img').visible(true) || $('.recommended').visible(true)) {
    $('.share-inner').removeClass('fixed');
  } else {
    $('.share-inner').addClass('fixed');
  }

  // Add floating element to sidebar on articles
  if ($('.sidebar').visible(true) || $('.main .inline-freebie').visible(true) || $('#closing').visible(true)) {
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

  // Validate the email address in the form
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
            var message = data.msg || "Sorry. Unable to subscribe (MailChimp problems?) Here's your freebie anyway:";
            $('.subscribe-freebie').show();
          } else {
            var message = data.msg || "Sorry. Unable to subscribe (MailChimp problems?) Please try again in a few minutes.";
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
      if (!isValidEmailHome($form)) {
        var error =  "We need a valid email address to send your report to.";
        $resultElement.html(error);
      } else {
        $resultElement.html("Submitting...");
        submitSubscribeFormHome($form, $resultElement);
      }
    });
  }

  // Validate the email address in the form
  function isValidEmailHome($form) {
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
          var message = data.msg || "Sorry. Unable to capture your address (MailChimp problems?) Please try again in a few minutes? ";

          if (data.msg && data.msg.indexOf("already subscribed") >= 0) {
            message = "Thanks, you've already requested a report!";
          }
          $resultElement.html(message);
        } else {
          $('.modal form input, .modal p').hide();
          $resultElement.html("Sent!<br>Look for the confirmation link in your inbox, we only send to confirmed addresses for privacy reasons.");
        }
      }
    });
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
    $('#key-modal input[type="url"]').remove();
    $(this).parent().find('input[type="url"]').clone().insertAfter('#key-modal input[type="email"]');
  });
});

var _ouibounce = ouibounce(document.getElementById('key-modal'), {
  aggressive: true,
  timer: 0,
  callback: function() { console.log('ouibounce fired!'); }
});

$('#key-modal').on('click', function(e) {
  e.stopPropagation();
});

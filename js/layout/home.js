$(function() {

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

});

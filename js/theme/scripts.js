(function(){

  //menu item activator
  $('[data-menu-target]').on('click', function(){
    var getTarget = $(this).attr('data-menu-target'),
        getActivateTarget = $(this).attr('data-activate-target');    
    $('[data-menu-item], [data-menu-target]').removeClass('is-active');
    $(this).addClass('is-active');
    $('[data-menu-item="'+getTarget+'"]').addClass('is-active');
    $('[data-activate-item="'+getActivateTarget+'"]').attr('class', 'global-nav-submenu');
    $('[data-activate-item="'+getActivateTarget+'"]').addClass('is-active is-'+getTarget);
  });
  
  //turn menu off when clicked outside of it or its activator link
  $(document).on('click', function (e) {
    if ($(e.target).closest('[data-close-outside="true"]').length === 0 && $(e.target).closest('[data-open-outside="true"]').length === 0 ) {
      $('[data-close-outside="true"]').removeClass('is-active');
      $('[data-open-outside="true"]').removeClass('is-active');
    }
  });
    
})();

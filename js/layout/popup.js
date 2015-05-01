var _ouibounce = ouibounce(document.getElementById('key-modal'), {
  aggressive: true,
  timer: 0,
  callback: function() { console.log('ouibounce fired!'); }
});

$('#key-modal').on('click', function(e) {
  e.stopPropagation();
});

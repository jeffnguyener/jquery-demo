$(function() {
  $('.toggleh2').bind('click', function() {
    $(this)
      .toggleClass('pink')
      .removeClass('blue');
  });
});

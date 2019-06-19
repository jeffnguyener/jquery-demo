$(function() {
    $('.toggleh2').bind('click', function() {
      $(this)
        .toggleClass('pink')
        .removeClass('blue');
    });
    $('.box:eq(1)').bind('click', function() {
      $('h2').toggleClass('pink')
    });
    $('.box:first').bind('click', function() {
      $(this).hide(500).show(750)
    });
    $('.box:eq(2)').bind('click', function() {
      $(this).animate({bottom:'200px'}, 300).animate({bottom:'-200px'}, 300).animate({bottom:'0px'}, 300)
    });
    $('.box:eq(3)').bind('click', function() {
      $(this).animate({height:'200px'}, 300).animate({height:'50px'}, 300)
    });
    $('.box:last').bind('click', function() {
      $(this).slideUp(500).slideDown(1000)
    });
   });
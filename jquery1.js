

$(function() {
  $(".toggleh2").bind("click", function() {
    $(this)
      .toggleClass("pink")
      .removeClass("blue");
  });
  $(".box:eq(1)").bind("click", function() {
    $("h2").toggleClass("pink");
  });
  $(".box:first").bind("click", function() {
    $(this)
      .hide(500)
      .show(750);
  });
  $(".box:eq(2)").bind("click", function() {
    $(this)
      .animate({ bottom: "200px" }, 300)
      .animate({ bottom: "-200px" }, 300)
      .animate({ bottom: "0px" }, 300);
  });
  $(".box:eq(3)").bind("click", function() {
    $(this)
      .animate({ height: "200px" }, 300)
      .animate({ height: "50px" }, 300);
  });
  $(".box:last").bind("click", function() {
    $(this)
      .slideUp(500)
      .slideDown(1000);
  });
  $(".box2:first").bind("click", function() {
    $(".box2")
      .animate(
        {
          top: "250px",
          opacity: "0.5",
          height: "250px",
          width: "250px"
        },
        300
      )
      .animate(
        {
          top: "0px",
          opacity: "1",
          height: "120px",
          width: "120px"
        },
        300
      );
  });
  $('.box2:eq(1)').hover(function() {
    $('.box2:eq(1)').text("100")
   })
   
   $('.box2:eq(2)').bind('click', function(){
    $('.box2:eq(2)').animate({top:'200px'}, 300).animate({width:'500px'},500).text("The Box Has Changed")
    $('.box2:gt(2)').animate({right:'520px'})
   })
   
   $('.box2:eq(3)').bind('click', function(){
    $('.box2:gt(2)').animate({left:'0px'})
    $('.box2:eq(2)').animate({width:'100px'},300).text("3").animate({top:'0px'}, 300)
    $('.box2:eq(1)').text('2')
   })
});



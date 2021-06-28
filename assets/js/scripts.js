
$(document).ready(function () {
  $(".kv-menu-mobile-btn").click(function () {
    $("body").toggleClass("menu-on");
    $("body").toggleClass("no-scroll ");
    $("html").toggleClass("noscroll-menu ");
  });

  ("use strict");


});

$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {

        $("body").addClass("has-stick");
    } else {  

        $("body").removeClass("has-stick");
    }
});



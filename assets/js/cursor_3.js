jQuery(document).ready(function() {

  var mouseX = 0, mouseY = 0;
  var xp = 0, yp = 0;



  var scrollcontent = document.querySelector(".scroll-content");
  console.log(scrollcontent)
   
  $(document).mousemove(function(e){
    mouseX = e.pageX - 30;
    mouseY = e.pageY - 30; 
  });
    
  setInterval(function(){
    xp += ((mouseX - xp)/6);
    yp += ((mouseY - yp)/6);
    $(".cursor").css({left: xp +'px', top: yp +'px'});
  }, 20);

});
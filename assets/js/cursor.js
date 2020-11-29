

var cursor = document.querySelector(".cursor"),
follower = document.querySelector(".cursor-follow");

var $follower = document.querySelector(".cursor-follow");

const $hoverables = document.querySelectorAll(".hoverable");

for (let i = 0; i < $hoverables.length; i++) {
$hoverables[i].addEventListener("mouseenter", onMouseHover);
$hoverables[i].addEventListener("mouseleave", onMouseHoverOut);
}

var posX = 0,
posY = 0;

var posX2 = 0,
posY2 = 0;

var mouseX = 0,
mouseY = 0;

TweenMax.to({}, 0.016, {
repeat: -1,
onRepeat: function () {
  posX += (mouseX - posX) / 6;
  posY += (mouseY - posY) / 6;

  posX2 += (mouseX - posX2) / 4;
  posY2 += (mouseY - posY2) / 4;

  TweenMax.set(follower, {
    css: {
      left: posX - 10,
      top: posY - 10
    }
  });

  TweenMax.set(cursor, {
    css: {
      left: posX2,
      top: posY2
    }
  });
}
});

document.addEventListener("mousemove", function (e) {
mouseX = e.pageX;
mouseY = e.pageY;
});

// Hover an element
function onMouseHover() {
TweenMax.to($follower, 0.3, {
  css: {


    scale: 4
  }
});
}
function onMouseHoverOut() {
TweenMax.to($follower, 0.3, {
  scale: 1,


});
}


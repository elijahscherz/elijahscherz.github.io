$(document).ready(function () {
  // jQuery methods go here...
  var pattern = Trianglify({
    width: window.innerWidth,
    height: window.innerHeight
  });
  var splash = document.getElementById("mainSplash");
  var gradientString =
    "linear-gradient(to bottom,rgba(22, 22, 22, 0.3) 0,rgba(22, 22, 22, 0.7) 85%,#161616 100%), ";
  splash.style.backgroundImage = gradientString + "url(" + pattern.png() + ")";

  $("nav .nav-link").on("click", function () {
    $("nav")
      .find(".active")
      .removeClass("active");
    $(this).addClass("active");
  });

  $("#splashText h1").text("");
  $("#splashText h3").text("");
  setTimeout(startTypeWriters, 1000);
});

$(window).scroll(function (event) {

  $(".slide-up").each(function (i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-up");
    }
  });

  $(".slide-left").each(function (i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-left");
    }
  });

  $(".slide-right").each(function (i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-right");
    }
  });

});

function startTypeWriters() {
  var i = 0;
  var text = "Developer. Musician. Player.";
  var text2 = "It's the 21st century. Everybody needs a site.";
  var speed = 140;

  var splashHeader = $("#splashText h1");
  var splashSubline = $("#splashText h3");

  typeWriter(i, text, speed, splashHeader);
  setTimeout(typeWriter, 2500, i, text2, speed / 2, splashSubline);
}

// This might not really work in other browsers / < IE9 for example.
function typeWriter(i, txt, speed, elem) {
  //var splashHeader = $("#splashText h1");
  console.log(i);
  if (i < txt.length) {
    elem.text(elem.text() + txt.charAt(i));
    i++;
    setTimeout(typeWriter, getRandomInt(speed - 80, speed), i, txt, speed, elem);
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
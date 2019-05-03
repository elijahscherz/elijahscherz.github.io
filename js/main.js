$(document).ready(function() {
  // jQuery methods go here...
  var pattern = Trianglify({
    width: window.innerWidth,
    height: window.innerHeight
  });
  var splash = document.getElementById("mainSplash");
  var gradientString =
    "linear-gradient(to bottom,rgba(22, 22, 22, 0.3) 0,rgba(22, 22, 22, 0.7) 85%,#161616 100%), ";
  splash.style.backgroundImage = gradientString + "url(" + pattern.png() + ")";
});

$("nav .nav-link").on("click", function() {
  $("nav")
    .find(".active")
    .removeClass("active");
  $(this)
    .parent()
    .addClass("active");
});

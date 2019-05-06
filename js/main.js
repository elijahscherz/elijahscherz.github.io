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

  typeWriter();
});

function typeWriter() {
  var i = 0;
  var txt1 = "Developer. Musician. Player."; /* The text */
  var txt2 = "It's the 21st century. Everybody needs a site.";
  var speed = 5000; /* The speed/duration of the effect in milliseconds */
  var text1 = $("#splashText h1");
  var text2 = $("#splashText h3");

  text1.text("");
  text2.text("");

  // for (i = 0; i < txt1.length; ++i) {
  //   text1.text(text1.text() + txt1.charAt(i));
  //   setTimeout(typeWriter, speed);
  // }

  // for (i = 0; i < txt2.length; ++i) {
  //   text2.text() += txt2.charAt(i);
  //   i++;
  //   setTimeout(typeWriter, speed);
  // }
}
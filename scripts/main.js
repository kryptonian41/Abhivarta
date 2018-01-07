$(document).ready(function() {
  // for the navigation tab
  $(".nav-toggle").on("click", function() {
    $(this).toggleClass("nav-toggle-clicked");
    $(".nav-bar").toggleClass("u-collapse");
    if (!$(".nav-bar").hasClass("u-collapse")) {
      var navHeight = $(".nav-bar .nav-option-list").height();
      $(".nav-bar").css({
        height: navHeight + "px"
      });
    } else {
      var navHeight = 0;
      $(".nav-bar").css({
        height: navHeight + "px"
      });
    }
  });
  // end for navigation tab


});


var type1 = new Typed('.typed1',{
    strings: ["About Abhivarta"],
    // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
    stringsElement: null,
    // typing speed
    typeSpeed: 30,
    // time before typing starts
    startDelay: 1200,
    // backspacing speed
    backSpeed: 20,
    // time before backspacing
    backDelay: 500,
    // loop
    loop: false,
    // false = infinite
    loopCount: false,
    // show cursor
    showCursor: false,
    // character for cursor
    cursorChar: "|",
    // attribute to type (null == text)
    attr: null,
    // either html or text
    contentType: 'html'
});
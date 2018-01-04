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

$(window).scroll(function() {
  var wscroll = $(this).scrollTop();
  console.log(wscroll);
  $(".header__hero-image").css({
    transform: "translate(0," + wscroll / 3 + "px)"
  });
  $(".parallax-container").css({
    transform: "translate("+ wscroll/2 +"px,-" + wscroll / 3 + "px)"
  });
  if (wscroll > $('.section-about').offset().top) {
    console.log("flag");
    $('.dome-image').addClass('animate animate-forward animate-slidein-bottom');
  }
});
//($('.section-about').offset().top + (($(window).height() * 1.2) - $(window).height() ) ) 
console.log('offset : '+$('.section-about').offset().top);
console.log('height : '+$(window).height());

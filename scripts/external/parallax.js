$(window).scroll(function() {
  var wscroll = $(this).scrollTop();
  // console.log(wscroll);
  $(".header__hero-image").css({
    transform: "translate(0," + wscroll / 3 + "px)"
  });
  $(".parallax-container").css({
    transform: "translate("+ wscroll/2 +"px,-" + wscroll / 3 + "px)"
  });
  // if (wscroll > $('.section-about--abhivarta').offset().top - 200) {
  //   // console.log("flag-abhivarta");
  //   $('.section-about--abhivarta').children('.slidein-image').addClass('animate animate-backward animate-slidein-bottom');
  // }
  // if (wscroll > $('.section-about--manipal').offset().top) {
  //   // console.log("flag-manipal");
  //   $('.section-about--manipal').children('.slidein-image').addClass('animate animate-backward animate-slidein-bottom');
  // }
  var css1 = {
    transform : "translateX(-"+ ($('.about-card__manipal--left').offset().top - wscroll) +"px)"
  }
  var css2 = {
    transform :"translateX("+($('.about-card__abhivarta--right').offset().top - wscroll) +"px)"
  }
  $('.about-card__manipal--left').children('.backdrop').css(css1);
  $('.about-card__abhivarta--right').children('.backdrop').css(css2);
  console.log($('.about-card__manipal--left').children('.backdrop'));
});

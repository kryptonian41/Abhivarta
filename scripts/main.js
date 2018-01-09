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
  
  // pagepiling start

  $('#pagepiling').pagepiling({
    menu: null,
      direction: 'horizontal',
      verticalCentered: true,
      sectionsColor: [],
      anchors: ['landing_page','tiles','page3','page4'],
      scrollingSpeed: 700,
      easing: 'swing',
      loopBottom: false,
      loopTop: false,
      css3: true,
      navigation: {
          'textColor': '#FFF',
          'bulletsColor': '#FFF',
          'position': 'right'
          // 'tooltips': ['section1', 'section2', 'section3', 'section4']
      },
      // normalScrollElements: '#tile-container',
      normalScrollElementTouchThreshold: 5,
      touchSensitivity: 5,
      keyboardScrolling: true,
      sectionSelector: '.section',
      animateAnchor: false,

  //events
  onLeave: function(index, nextIndex, direction){},
  afterLoad: function(anchorLink, index){},
  afterRender: function(){},
});

});

// Marquee  

$('.marquee-wrapper__text').marquee({
  duplicated: false,
  allowCss3Support: true,
  css3easing: 'linear',
  direction: 'right',
  pauseOnHover: true
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
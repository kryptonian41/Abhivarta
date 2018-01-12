
 var card = $(".team__members__card");
 console.log(card);
 card.each(function(i) {
   $(this).css({
     zIndex: "" + (100-i)
   });
   setTimeout(function() {
    $(".team__members__card")
      .eq(i)
      .addClass("animate animate-both animate-fadein-left");
  }, 150 * (i + 1));
  $(this).one('webkitAnimationEnd oanimationend msAnimationEnd animationend',   
    function(e) {
    
    // code to execute after animation ends
    $(this).css('opacity',1);
    $(this).removeClass('animate animate-both');
    });
 });
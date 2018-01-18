var slides = $(".slider-container").children(".slide");
var circles = $(".indicator").children(".circle");
// console.log(circles);
var counter = 0;
circles[counter].style.background = "white";
console.log(circles[counter]);
for (var i = 1; i < 4; i++) {
  slides[i].style.left = "100%";
}
// automatic scrool
var flag = true; //true for left and false for right
var auto_left = setInterval(move_left, 3000);
var auto_right = setInterval(move_right, 3000);
clearInterval(auto_right);
// functions
function move_right() {
  if (counter != 0) {
    circles[counter].style.background = "rgba(96.1%, 96.1%, 96.1%,0.7)";
    slides[counter].style.left = "100%";
    counter--;
    circles[counter].style.background = "white";
    slides[counter].style.left = 0;
    console.log("move right");
    if (counter == 0) {
      clearInterval(auto_right);
      clearInterval(auto_left);
      auto_left = setInterval(move_left, 3000);
      flag = true;
    }
  }
}

function move_left() {
  if (counter != 3) {
    circles[counter].style.background = "rgba(96.1%, 96.1%, 96.1%,0.7)";
    slides[counter].style.left = "-100%";
    counter++;
    circles[counter].style.background = "white";
    slides[counter].style.left = 0;
    console.log("move left");
    if (counter == 3) {
      clearInterval(auto_left);
      clearInterval(auto_right);
      auto_right = setInterval(move_right, 3000);
      flag = false;
    }
  }
}

// console.log(right_stack);
$("#left_arrow").on("click", function () {
  clearInterval(auto_left);
  clearInterval(auto_right);
  move_right();
});
$("#right_arrow").on("click", function () {
  clearInterval(auto_left);
  clearInterval(auto_right);
  move_left();
});

$("#slider-container").hover(
  function () {
    // console.log("mouse in");
    clearInterval(auto_left);
    clearInterval(auto_right);
  },
  function () {
    // console.log("mouse out");
    if (flag) auto_left = setInterval(move_left, 3000);
    else auto_right = setInterval(move_right, 3000);
  }
);
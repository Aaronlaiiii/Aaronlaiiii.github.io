const ball = document.querySelector(".ball");
console.log(ball);

const moveButton = document.querySelector("#move-button");
console.log(moveButton);
moveButton.addEventListener("click", moveball);

const outer = document.querySelector(".outer");

let distance = 30;
let outerWidth = outer.clientwidth / 2 - 30;

function moveball() {
  if (distance < outerWidth) {
    ball.style.transform = "translateX(${distance}px)";
    distance += 30;
  }
}

const rotateButton = document.querySelector("#rotate-button");
console.log(rotateButton);
rotateButton.addEventListener("click", rotateball);

let rDeg = 45;

function rotateball() {
  ball.style.transform = "rotate(${rDeg}deg)";
  rDeg += 45;
}

const scaleButton = document.querySelector("#scale-button");
console.log(scaleButton);
scaleButton.addEventListener("click", scaleball);

let scaleVale = 0.9;

function scaleball() {
  ball.style.transform = "scale(${scaleVale})";
  scaleVale -= 0.1;
}

function transformball() {
  ball.style.transform =
    "translateX(${distance}px) rotate(${rDeg}deg) scale(${scaleVale})";
}

const resetButton = document.querySelector("#reset-button");
console.log(resetButton);
resetButton.addEventListener("click", resetball);

function resetball() {
  scalevale = 0.9;
  distance = 0;
  rDeg = 45;
  transformball();
}

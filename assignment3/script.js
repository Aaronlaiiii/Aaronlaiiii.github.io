//const slides = document.querySelectorAll(".slides");
/*console.log(slides);
let slideIndex = 0;

const rightArrowButton = document.querySelector("#right-arrow-button");
console.log(rightArrowButton);
rightArrowButton.addEventListener("click", gotoNextSlide);

const leftArrowButton = document.querySelector("#left-arrow-button");
console.log(leftArrowButton);
leftArrowButton.addEventListener("click", gotoPreviousSlide);

function gotoNextSlide() {
  if (slideIndex === slides.length - 1) {
    rightArrowButton.disabled = true;
    return;
  }
  if (slideIndex < slides.length - 1) {
    slideIndex++;
    const nextSlide = slides[slideIndex];
    const newLeftPosition = nextSlide.offsetLeft;
    console.log(newLeftPosition);
    window.scrollTo({ left: newLeftPosition, behavior: "smooth" });
    leftArrowButton.disabled = false;
  }
}

function gotoPreviousSlide() {
  if (slideIndex === 0) {
    leftArrowButton.disabled = true;
    return;
  }
  if (slideIndex > 0) {
    slideIndex--;
    const previousSlide = slides[slideIndex];
    const newLeftPosition = previousSlide.offsetLeft;
    console.log(newLeftPosition);
    window.scrollTo({ left: newLeftPosition, behavior: "smooth" });
    rightArrowButton.disabled = false;
  }
}*/

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.querySelectorAll(".mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Nav Burger Menu
let burgerBtn = document.querySelector("#burger-btn");
let mainMenu = document.querySelector("#main-menu");

let canSeeMenu = false;

burgerBtn.addEventListener("click", () => {
    console.log(canSeeMenu);

    if(!canSeeMenu){
        mainMenu.classList.add("show-menu");
        canSeeMenu = true;
    }else{
        mainMenu.classList.remove("show-menu");
        canSeeMenu = false;
    }
})

mainMenu.addEventListener("click", () => {
        mainMenu.classList.remove("show-menu");
        canSeeMenu = false;
})

// Dark Mode
let toggleBtn = document.querySelector(".dark-mode-toggle");

let sun = document.querySelector(".fa-sun");
let moon = document.querySelector(".fa-moon");

toggleBtn.addEventListener("click", function () {
  document.querySelector('html').toggleAttribute('data-dark-mode')


  sun.classList.toggle('hide-sun')
  moon.classList.toggle('hide-moon')
});


// AOS
AOS.init();

/*// index slide show
function showImage(picName){
  document.getElementById("main_pic").src=picName;
}

// Slide Show
let slideIndex = 1;
showSlides(slideIndex);

$(document).ready(function () {
  $(".first-div a").fancybox({
    loop: true,
    buttons: ["zoom", "slideshow", "fullscreen", "close"],
  });
});

const container = document.getElementById("myCarousel");
const options = { infinite: false };

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}*/

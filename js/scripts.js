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

const wrapper = document.querySelector(".wrapper"),
    carousel = document.querySelector(".carousel "),
    images = document.querySelectorALL(".img"),
    buttons = document.querySelectorALL(".button");

let imageIndex =1,
intervalid;

const autoSlide = () => {
    intervalid = setInterval(() => slideImage(++imageIndex), 2000)
};

autoSlide()

const slideImage = () => {
    console.style.transform = 'translate(-${imageIndex * 100}%)'
};


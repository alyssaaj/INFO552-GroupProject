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

let navTriggerElm = document.querySelector(".hamburger");
let navElm = document.querySelector("nav");
let contentElm = document.querySelector(".content");
let hamburgerBarElm = document.getElementsByTagName("span");

function toggleNav() {
    navTriggerElm.addEventListener("click", function () {
        navElm.classList.toggle("open");
        contentElm.classList.toggle("shift");
        animatHamburger();
    });
}

function animatHamburger() {
    for (let elem of hamburgerBarElm) {
        elem.classList.toggle("change");
    }
}

toggleNav();

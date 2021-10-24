const navHamburger = document.querySelector('.nav__hamburger');

navHamburger.addEventListener("click", () => {
    const navLinks = document.querySelector(".nav__links");
    const html = document.querySelector("html");

    navHamburger.classList.toggle("nav__hamburger--active");
    navLinks.classList.toggle("nav__links--active");
    html.classList.toggle("html--active");
});
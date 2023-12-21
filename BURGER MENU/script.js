document.addEventListener("DOMContentLoaded", function () {
    const burgerMenu = document.querySelector(".burger-menu");
    const navLinks = document.querySelector(".nav-links");

    burgerMenu.addEventListener("click", function () {
        if (navLinks.style.maxHeight) {
            navLinks.style.maxHeight = null;
        } else {
            navLinks.style.maxHeight = navLinks.scrollHeight + "px";
        }
    });
});

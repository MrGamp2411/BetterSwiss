let isMenuOpen = false;

function toggleMenu() {
    console.log("Funzione toggleMenu chiamata");
    var nav = document.getElementById("myNav");

    isMenuOpen = !isMenuOpen;

    if (isMenuOpen) {
        nav.style.maxHeight = "400px"; /* o qualsiasi altra altezza desiderata */
    } else {
        nav.style.maxHeight = "0";
    }

    nav.classList.toggle("open");
}

document.querySelector(".menu-icon").addEventListener("click", toggleMenu);

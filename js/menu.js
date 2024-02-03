document.querySelector(".menu-icon").addEventListener("click", function() {
    console.log("Funzione toggleMenu chiamata");
    var nav = document.getElementById("myNav");
    nav.classList.toggle("open");
});

let hamburger = document.getElementById("hamburger");
let shortSidenav = document.getElementById("short-sidenav");
let closeit = document.getElementById("closeit");
let longSidenav = document.getElementById("long-sidenav");
let content = document.getElementById("content");

hamburger.onclick = function() {
    longSidenav.style.left = "0%";
    // content.style.transform = 'translateX(15%)'
}

closeit.onclick = function() {
    if(window.matchMedia("(orientation: portrait)").matches){
        longSidenav.style.left = "-100%";
        return;
    }
    longSidenav.style.left = "-20%";
    // content.style.transform = 'translateX(0%)'
}
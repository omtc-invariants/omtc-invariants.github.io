let hamburger = document.getElementById("hamburger");
let shortSidenav = document.getElementById("short-sidenav");
let closeit = document.getElementById("closeit");
let longSidenav = document.getElementById("long-sidenav");
let content = document.getElementById("content");

hamburger.onclick = function() {
    longSidenav.style.transform = "translateX(0%)"
    // content.style.transform = 'translateX(15%)'
}

closeit.onclick = function() {
    longSidenav.style.transform = "translateX(-100%)"
    // content.style.transform = 'translateX(0%)'
}
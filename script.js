let hamburger = document.getElementById("hamburger");
let shortSidenav = document.getElementById("short-sidenav");
let closeit = document.getElementById("closeit");
let longSidenav = document.getElementById("long-sidenav");
let content = document.getElementById("content");

hamburger.onclick = function() {
    let isPortrait = window.matchMedia("(orientation: portrait)").matches;
    if (!isPortrait) {
        longSidenav.style.transform = "translateX(0%)"
        // content.style.transform = 'translateX(15%)'
    } else {
        longSidenav.style.transform = "translateY(0%)"
    }
}

closeit.onclick = function() {
    let isPortrait = window.matchMedia("(orientation: portrait)").matches;
    if (!isPortrait) {
        longSidenav.style.transform = "translateX(-100%)"
        // content.style.transform = 'translateX(15%)'
    } else {
        longSidenav.style.transform = "translateY(-100%)"
    }
}
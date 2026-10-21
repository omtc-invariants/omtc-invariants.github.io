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

let accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach(function(header) {
    header.onclick = function() {
        let panel = header.nextElementSibling;
        let isOpen = header.getAttribute("aria-expanded") === "true";
        header.setAttribute("aria-expanded", !isOpen);
        panel.style.maxHeight = isOpen ? null : panel.scrollHeight + "px";
    }
});

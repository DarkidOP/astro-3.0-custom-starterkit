const cursorIn = document.querySelector(".cursor-in"),
cursorOut = document.querySelector(".cursor-out"), 
body = document.querySelector("body");



function detectTouchscreen() {
    var result = false;
    if (window.PointerEvent && ('maxTouchPoints' in navigator)) {
    // if Pointer Events are supported, just check maxTouchPoints
    if (navigator.maxTouchPoints > 0) {
        result = true;
    }
    } else {
    // no Pointer Events...
    if (window.matchMedia && window.matchMedia("(any-pointer:coarse)").matches) {
        // check for any-pointer:coarse which mostly means touchscreen
        result = true;
    } else if (window.TouchEvent || ('ontouchstart' in window)) {
        // last resort - check for exposed touch events API / event handler
        result = true;
    }
    }
    return result;
}



let mouseHoveringLink = document.querySelectorAll("a");
let mouseHoveringButton = document.querySelectorAll("button");
addMouseAnimation(mouseHoveringLink);
addMouseAnimation(mouseHoveringButton);

let mouseCursoAnimate = document.querySelectorAll(".mouseCursoAnimate");
addMouseAnimation(mouseCursoAnimate);


function addMouseAnimation(element) {
    element.forEach(e => {
        e.addEventListener("mouseenter", (e) => {
            cursorIn.classList.add("cursor-pointer-hover"),
            cursorOut.classList.add("cursor-pointer-hover")
        });
        e.addEventListener("mouseleave", function (e) {
            cursorIn.classList.remove("cursor-pointer-hover"),
            cursorOut.classList.remove("cursor-pointer-hover")
        });
    });
}
// setInterval(() => {

// }, 7000)

if(detectTouchscreen()){
    cursorIn.style.opacity = "0";
    cursorOut.style.opacity = "0";
    body.style.cursor = 'default';
} 

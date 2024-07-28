/* ============================ toggle style switcher ========================= */
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})
// hide style switcher on scroll
/* ============================ theme colors ========================= */
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
    alternateStyles.forEach(style => {
        if(color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        }
        else {
            style.setAttribute("disabled", "true");
        }
    })
}
/* ============================ theme light and dark mode ========================= */
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", _ => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load", _ => {
    document.body.classList.contains("dark") ? dayNight.querySelector("i").classList.add("fa-sun") : dayNight.querySelector("i").classList.add("fa-moon");
})
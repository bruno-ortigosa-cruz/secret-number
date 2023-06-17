const sun = document.getElementById("sun-container")
const moon = document.getElementById("moon-container")
const darkModeSave = localStorage.getItem("dark-mode") || "off"

if (darkModeSave === "on") {
    document.body.classList.add("dark-mode")
    moon.style.display = "block"
} else {
    sun.style.display = "block"
}

sun.addEventListener('click', () => {
    toggle(sun, moon)
    localStorage.setItem("dark-mode", "on")
})

moon.addEventListener('click', () => {
    toggle(moon, sun)
    localStorage.setItem("dark-mode", "off")
})

function toggle(toDisappear, toAppear) {
    toDisappear.style.display = "none";
    document.body.classList.toggle('dark-mode')
    toAppear.style.display = "block"
}

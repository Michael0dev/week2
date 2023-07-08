const hamburger = document.querySelector(".hamburger")
const task = document.querySelector(".task")
const close = document.querySelector(".close_menu")

hamburger.addEventListener("click", () => {
    task.classList.toggle("visible");
    hamburger.classList.add("hide");
    close.classList.add("visible");
})
close.addEventListener("click", () => {
    task.classList.remove("visible");
    hamburger.classList.remove("hide");
    close.classList.remove("visible");

})
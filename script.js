const menu = document.querySelector(".menu");
const options = document.querySelector(".options");

menu.addEventListener("click", () => {
    options.classList.toggle("active");

    if(options.classList.contains("active")) {
        menu.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
        menu.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
});
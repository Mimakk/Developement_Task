let scrollContainer = document.querySelector('.scroll');
let btn = document.querySelector('.forarrow');

scrollContainer.addEventListener("wheel", (event) => {
    scrollContainer.scrollLeft += event.deltaY;
});

btn.addEventListener("click", () => {
    scrollContainer.scrollLeft += 350;
});
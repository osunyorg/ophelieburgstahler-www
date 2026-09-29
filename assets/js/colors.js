function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}

function changeColor() {
    document.body.classList.remove("color-" + window.color);
    window.color = getRandomInt(5);
    document.body.classList.add("color-" + window.color);
}

changeColor();

let links = document.querySelectorAll("a");
links.forEach(link => {
  link.addEventListener('mouseover', () => changeColor());
});

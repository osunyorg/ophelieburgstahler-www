function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}

function getFavicon() {
    let favicon = document.querySelector("link#favicon-color");
    if (!favicon) {
        favicon = document.createElement("link");
        favicon.id = "favicon-color";
        favicon.rel = "icon";
        favicon.type = "image/svg+xml";
        document.head.appendChild(favicon);
    }
    return favicon;
}

function changeFavicon() {
    getFavicon().href = "/assets/images/favicons/color-" + window.color + ".svg";
}

function changeColor() {
    document.body.classList.remove("color-" + window.color);
    window.color = getRandomInt(5);
    document.body.classList.add("color-" + window.color);
    changeFavicon();
}

changeColor();

let links = document.querySelectorAll("a");
links.forEach(link => {
  link.addEventListener('mouseover', () => changeColor());
});

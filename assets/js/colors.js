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
    const color = getComputedStyle(document.body).backgroundColor,
          svg = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>" +
                "<circle cx='16' cy='16' r='15' fill='" + color + "'/>" +
                "</svg>";
    getFavicon().href = "data:image/svg+xml," + encodeURIComponent(svg);
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

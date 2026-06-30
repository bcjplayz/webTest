const images = [
    "/img/Ren.png",
    "/img/Joker_P5.png"
];

let index = 0;

function imgChange(direction) {
    index += direction

    if (index < 0) {
        index = images.length - 1;
    }

    if (index >= images.length) {
        index = 0;
    }

    document.getElementById("character-display").src = images[index]
}
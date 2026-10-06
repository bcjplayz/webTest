const images = [
    "/img/Orpheus.png",
    "/img/Thanatos.png",
    "/img/Messiah.png"

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

    document.getElementById("character").src = images[index]
}
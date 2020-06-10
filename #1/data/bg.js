const body = document.querySelector("body");

const IMG_NUMBER = 5;

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `../data/images/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);
}

function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

// 임의의 수를 랜덤으로 생성하여 백그라운드에 표시

function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();
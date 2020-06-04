const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes}:${
    seconds < 10 ? `0${seconds}` : seconds
  }`;
}

// 간단한 if else문 사용
// ? if , : else

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
const wether = document.querySelector(".js-weather");

const API_KEY = "2a8eac7a0c5c523f1eabd72afca8e232";

const COORDS = "coords";

function getWehter(lat, lng) {
    fetch(
            "https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${2a8eac7a0c5c523f1eabd72afca8e232}"
        )
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            const temperature = json.main.temp;
            const place = json.nmame;
            weather.innerText = "{temperature} @ ${place}";
        });
}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude: latitude,
        longitude: longitude,
        // latitude,
        // longitude  이렇게만 써도 위와 같음
    };
    saveCoords(coordsObj);
    getWehter(latitude, longitude);
}

function handleGeoError() {
    console.log("Cant access geo location");
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
    // location을 얻는 법
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null) {
        askForCoords();
    } else {
        const parseCoords = JSON.parse(loadedCoords);
        getWehter(parseCoords.latitude, parseCoords.longitude);
    }
}

function init() {
    loadCoords();
}

init();
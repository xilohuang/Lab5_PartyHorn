// main.js

// TODO


var volslid = document.getElementById("volume-slider");
var volnum = document.getElementById("volume-number");
var volimg = document.getElementById("volume-image");
var e = document.getElementById("honk-btn");
var AH = document.getElementById("radio-air-horn");
var CH = document.getElementById("radio-car-horn");
var PH = document.getElementById("radio-party-horn");
var volsound = document.getElementById("radio-air-horn");
var volumec = volslid.value;
var element = document.getElementById('horn-sound');

volslid.oninput = function() {
    volumec = this.value;
    volnum.value = this.value;
    element.volume = volumec * 0.01;

    if (volumec == 0) {
        volimg.setAttribute("src", "./assets/media/icons/volume-level-0.svg");
        e.disabled = true;
    }
    else if (volumec >= 1 && volumec <= 33) {
        volimg.setAttribute("src", "./assets/media/icons/volume-level-1.svg");
        e.disabled = false;
    }
    else if (volumec >= 34 && volumec <= 66) {
        volimg.setAttribute("src", "./assets/media/icons/volume-level-2.svg");
        e.disabled = false;
    }
    else {
        volimg.setAttribute("src", "./assets/media/icons/volume-level-3.svg");
        e.disabled = false;
    }

}

volnum.oninput = function() {
    volumec = this.value;
    volslid.value = this.value;
    element.volume = volumec * 0.01;

    if (volumec == 0) {
        volimg.setAttribute("src", "./assets/media/icons/volume-level-0.svg");
        e.disabled = true;
    }
    else if (volumec >= 1 && volumec <= 33) {
        volimg.setAttribute("src", "./assets/media/icons/volume-level-1.svg");
        e.disabled = false;
    }
    else if (volumec >= 34 && volumec <= 66) {
        volimg.setAttribute("src", "./assets/media/icons/volume-level-2.svg");
        e.disabled = false;
    }
    else {
        volimg.setAttribute("src", "./assets/media/icons/volume-level-3.svg");
        e.disabled = false;
    }

}

AH.oninput = function() {
    let hs = document.getElementById('horn-sound');
    let soundimg = document.getElementById('sound-image');
    hs.setAttribute("src", "./assets/media/audio/air-horn.mp3");
    soundimg.setAttribute("src", "./assets/media/images/air-horn.svg");
    soundimg.setAttribute("alt", "Air Horn");
}

CH.oninput = function() {
    let hs = document.getElementById('horn-sound');
    let soundimg = document.getElementById('sound-image');
    hs.setAttribute("src", "./assets/media/audio/car-horn.mp3");
    soundimg.setAttribute("src", "./assets/media/images/car.svg");
    soundimg.setAttribute("alt", "Car Horn");
}

PH.oninput = function() {
    let hs = document.getElementById('horn-sound');
    let soundimg = document.getElementById('sound-image');
    hs.setAttribute("src", "./assets/media/audio/party-horn.mp3");
    soundimg.setAttribute("src", "./assets/media/images/party-horn.svg");
    soundimg.setAttribute("alt", "Party Horn");
}

e.onclick = function (event) {
    event.preventDefault();
    element.play();
}

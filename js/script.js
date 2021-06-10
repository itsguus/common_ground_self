if (document.body.classList.contains("ons-verhaal")) {
    var audioHasPlayed = false,
        audio = document.querySelector("audio");
        audioAllowedToPlay = true;

    audio.onended = () => {
        audioHasPlayed = true;
    }
    window.addEventListener("scroll", scrollFunction);
}

function scrollFunction() {
    const y = window.scrollY,
        thresHold = 200;
    if (y > thresHold && !audioHasPlayed && audioAllowedToPlay) playAudio();
}

function playAudio() {
    document.body.classList.add("audio_playing")
    audio.play();
}

function toggleAudio(el) {
    if (el.checked) { // turn off 
        audio.pause();
        el.parentNode.classList.add("off");
        audioAllowedToPlay = false;
    }
    else {
        audio.play();
        el.parentNode.classList.remove("off")
        audioAllowedToPlay = true;
    }
}
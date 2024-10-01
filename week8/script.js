const myVideo = document.querySelector("#my-video");
console.log(myVideo);

const playPauseBtn = document.querySelector("#play-pause-btn");
console.log(playPauseBtn);

playPauseBtn.addEventListener("click", togglePlay);

const playPauseImg = document.querySelector("#play-pause-img");
function togglePlay() {
    if (myVideo.paused || myVideo.ended) {
        myVideo.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
    } else {
        myVideo.pause();
        playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
    }
    
}





const muteUnmuteBtn = document.querySelector("#mute-unmute-btn");
console.log(muteUnmuteBtn);

muteUnmuteBtn.addEventListener("click", toggleSound);

const muteUnmuteImg = document.querySelector("#mute-unmute-img");
console.log(muteUnmuteImg);

function toggleSound() {
    if (myVideo.muted) {
        myVideo.muted = false;
        muteUnmuteBtn.style.backgroundColor = "#d5cea3";
    //muteUnmuteImg.src = "https://img.icons8.com/ios-glyphs/30/high-volume--v1.png";
    } else {
        myVideo.muted = true;
        muteUnmuteBtn.style.backgroundColor = ""
        //muteUnmutImg.src = "https://img.icons8.com/ios-glyphs/30/no-audio--v1.png";
    }
    
}
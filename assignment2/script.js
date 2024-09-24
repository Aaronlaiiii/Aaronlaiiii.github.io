// Retrieve from the DOM
document.addEventListener("DOMContentLoaded", function () {
  var video = document.getElementById("custom-video-player");
  var playPauseButton = document.getElementById("play-pause-button");
  var muteUnmuteButton = document.getElementById("mute-unmute-button");
  var decreaseVolumeButton = document.getElementById("decrease-volume-button");
  var increaseVolumeButton = document.getElementById("increase-volume-button");
  var fullscreenButton = document.getElementById("fullscreen-button");
  var replayButton = document.getElementById("replay-button");
  var rewindButton = document.getElementById("rewind-button");
  var forwardButton = document.getElementById("forward-button");
  var progressBarFill = document.getElementById("progress-bar-fill");

  //   Video play/pause, and update the button icon
  playPauseButton.addEventListener("click", function () {
    if (video.paused) {
      video.play();
      playPauseButton.innerHTML =
        '<img id="play-pause-img" src="https://img.icons8.com/ios-glyphs/30/pause--v1.png" alt="Pause Button" width="24" height="24">';
    } else {
      video.pause();
      playPauseButton.innerHTML =
        '<img id="play-pause-img" src="https://img.icons8.com/ios-glyphs/30/play--v2.png" alt="Play Button" width="24" height="24">';
    }
  });

  //   Video mute/unmute, and update the button icon
  muteUnmuteButton.addEventListener("click", function () {
    if (video.muted) {
      video.muted = false;
      muteUnmuteButton.innerHTML =
        '<img id="mute-unmute-img" src="https://img.icons8.com/ios-glyphs/30/no-audio--v1.png" alt="Mute Button" width="24" height="24">';
    } else {
      video.muted = true;
      muteUnmuteButton.innerHTML =
        '<img id="mute-unmute-img" src="https://img.icons8.com/ios-glyphs/30/speaker.png" alt="Unmute Button" width="24" height="24">';
    }
  });

  // Decrease/Increase the video volume
  decreaseVolumeButton.addEventListener("click", function () {
    video.volume -= 0.1;
  });

  increaseVolumeButton.addEventListener("click", function () {
    video.volume += 0.1;
  });
  //The step one will junp to eightteen second.
  const step1Btn = document.querySelector("#step-1-btn");
  console.log(step1Btn);

  step1Btn.addEventListener("click", gotostepImg);
  function gotostepImg() {
    video.currentTime = 18.4;
  }
  //The step two will jump to two mintues
  const step2Btn = document.querySelector("#step-2-btn");
  console.log(step1Btn);

  step2Btn.addEventListener("click", gotostep2Img);
  function gotostep2Img() {
    video.currentTime = 120.4;
  }
  //The step three will junp to three mintues
  const step3Btn = document.querySelector("#step-3-btn");
  console.log(step3Btn);

  step3Btn.addEventListener("click", gotostep3Img);
  function gotostep3Img() {
    video.currentTime = 180.4;
  }

  //   video in fullscreen mode
  fullscreenButton.addEventListener("click", function () {
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
      video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) {
      video.msRequestFullscreen();
    }
  });
  let likeCount = 0;

  const likeButton = document.querySelector("#like-btn");
  console.log(likeButton);
  likeButton.addEventListener("click", addLikes);
  const likes = document.querySelector("#likes");
  likes.textContent = likeCount;

  function addLikes() {
    likeCount++;
    likes.textContent = likeCount;
  }
  // The replay button resets the video to the beginning, corresponding to the material preparation stage
  replayButton.addEventListener("click", function () {
    video.currentTime = 0;
    video.play();
  });

  // The rewind button jumps the video to 30 seconds, corresponding to the start of the making stage
  rewindButton.addEventListener("click", function () {
    video.currentTime = 40;
  });

  // The fast forward button jumps the video to three minutes and 43 seconds, corresponding to the introduction of considerations after the completion of the making
  forwardButton.addEventListener("click", function () {
    video.currentTime = 223;
  });

  // Update the progress bar as the video plays
  video.addEventListener("timeupdate", () => {
    const percentage = (video.currentTime / video.duration) * 100;
    progressBarFill.style.width = percentage + "%";
  });
});

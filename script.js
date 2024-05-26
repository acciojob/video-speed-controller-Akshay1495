
function setupVideoPlayer() {
  const video = document.querySelector('.player__video');
  const progressBar = document.querySelector('.progress__filled');
  const toggleButton = document.querySelector('.player__button');
  const volumeSlider = document.querySelector('input[name="volume"]');
  const playbackSpeedSlider = document.querySelector('input[name="playbackRate"]');
  const rewindButton = document.querySelector('.rewind');
  const skipButton = document.querySelector('.skip');

  if (!video) return;

  function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
  }

  function updateButton() {
    const icon = video.paused ? '►' : '❚ ❚';
    toggleButton.textContent = icon;
  }

  function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
  }

  function adjustVolume() {
    video.volume = volumeSlider.value;
  }

  function adjustPlaybackSpeed() {
    video.playbackRate = playbackSpeedSlider.value;
  }

  function rewind() {
    video.currentTime -= 10;
  }

  function skipForward() {
    video.currentTime += 25;
  }

  toggleButton.addEventListener('click', togglePlay);
  volumeSlider.addEventListener('input', adjustVolume);
  playbackSpeedSlider.addEventListener('input', adjustPlaybackSpeed);
  rewindButton.addEventListener('click', rewind);
  skipButton.addEventListener('click', skipForward);

  video.addEventListener('play', updateButton);
  video.addEventListener('pause', updateButton);
  video.addEventListener('timeupdate', handleProgress);
}

document.addEventListener('DOMContentLoaded', setupVideoPlayer);

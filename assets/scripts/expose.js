// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  document.getElementById('horn-select').addEventListener('change', updateHorn);
  document.getElementById('volume-controls').addEventListener('change', updateVolume);
  document.querySelector('#expose button').addEventListener('click', playSound);
}

function updateHorn(event) {
  const selection = event.target.value;
  console.log(selection);

  const image = document.querySelector('#expose img');
  const audio = document.querySelector('audio');

  if(selection == 'air-horn') {
    image.src = 'assets/images/air-horn.svg'
    audio.src = 'assets/audio/air-horn.mp3'
  } else if (selection == 'car-horn') {
    image.src = 'assets/images/car-horn.svg'
    audio.src = 'assets/audio/car-horn.mp3'
  } else if (selection == 'party-horn') {
    image.src = 'assets/images/party-horn.svg'
    audio.src = 'assets/audio/party-horn.mp3'
  }else {
    audio.src = 'assets/audio/no-image.png'
  }
}

function updateVolume(event) {
  const volume_level = event.target.value;
  const image = document.querySelector('#volume-controls img');
  const audio = document.querySelector('audio');
  audio.volume = volume_level / 100;
  console.log(audio.volume);

  if (volume_level == 0){ 
    image.src = 'assets/icons/volume-level-0.svg'
  }else if (volume_level < 33){
    image.src = 'assets/icons/volume-level-1.svg'
  }else if (volume_level < 67){
    image.src = 'assets/icons/volume-level-2.svg'
  }else {
    image.src = 'assets/icons/volume-level-3.svg'
  }
}

function playSound(event) {
  const audio = document.querySelector('audio');
  audio.play();

  if (document.getElementById('horn-select').value === 'party-horn') {
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti();
  }
}
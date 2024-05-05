// expose.js

window.addEventListener('DOMContentLoaded', init);
let jsConfetti = new JSConfetti();

function init() {
  //Changes main image on selection
  let hornSelect = document.getElementById('horn-select');
  let image = document.querySelector('section > img');
  let selected = hornSelect.selectedOptions;
  hornSelect.addEventListener('change', 
  () => {
    image.src = 'assets/images/' + selected.item(0).value + '.svg';
    audio.src = 'assets/audio/' + selected.item(0).value + '.mp3';
  });

  //Changes volume and volume icon based on slider
  let volume = document.getElementById('volume');
  let volIcon = document.querySelector('div > img');
  let audio = document.querySelector('audio');
  volume.addEventListener('input', 
  () => {
    audio.volume = volume.value / 100;
    if (volume.value == 0) {
      volIcon.src = 'assets/icons/volume-level-0.svg';
    }
    else if (volume.value < 33) {
      volIcon.src = 'assets/icons/volume-level-1.svg';
    }
    else if (volume.value < 67) {
      volIcon.src = 'assets/icons/volume-level-2.svg';
    }
    else {
      volIcon.src = 'assets/icons/volume-level-3.svg';
    }
  });

  //Play Sound Button
  let play = document.querySelector('button');
  play.addEventListener('click', 
  () => {
    audio.play();
    
    if (selected.item(0).value == 'party-horn') {
      jsConfetti.addConfetti();
    }
  });
}
// explore.js

window.addEventListener('DOMContentLoaded', init);
let synth = window.speechSynthesis;
synth.addEventListener('voiceschanged', populateVoices);

function init() {
  let talkButton = document.querySelector('button');
  talkButton.addEventListener("click", playSpeech);

  synth.addEventListener("")
}

function populateVoices() {
  let selector = document.getElementById('voice-select');
  let voices = synth.getVoices();
  console.log(voices);
  for (let i = 0; i < voices.length; i++) {
    let voice = document.createElement('option');
    voice.innerHTML = voices[i].name;
    voice.value = i;
    selector.appendChild(voice);
  }
}

function playSpeech() {
  let text = document.querySelector('textarea').value;
  console.log(text);
  let utterance = new SpeechSynthesisUtterance();

  utterance.voice = synth.getVoices()[document.getElementById('voice-select').value];
  utterance.text = text;
  let mouth = document.querySelector('img');
  utterance.addEventListener('end', () => {
    mouth.src = 'assets/images/smiling.png';
  })
  mouth.src = 'assets/images/smiling-open.png';
  synth.speak(utterance); 
}
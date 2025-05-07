// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  // document.getElementById('#voice-select').addEventListener('change', selectVoice);
  const inputText = document.querySelector("#text-to-speak");
  const voiceSelect = document.querySelector("#voice-select");

  document.querySelector("#explore button").addEventListener('click', playSound)

  let voices = [];

  function populateVoice() {
    const synth = window.speechSynthesis;
    voices = synth.getVoices();

    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      if (voices[i].default) {
        option.textContent += " - DEFAULT";
      }

      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
  }

  populateVoice();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoice;
  }

  function playSound(event) {
    const image = document.querySelector('#explore img');
    const utter = new SpeechSynthesisUtterance(inputText.value);
  
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute("data-name");
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utter.voice = voices[i];
      }
    }
  
    utter.onstart = () => {
      image.src = 'assets/images/smiling-open.png';
    };
    
    utter.onend = () => {
      image.src = 'assets/images/smiling.png';
    };
    
    speechSynthesis.speak(utter);
  }
}


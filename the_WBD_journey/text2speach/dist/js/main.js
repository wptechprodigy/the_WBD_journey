// Initialize Speech Synthesis API 
const synth = window.speechSynthesis;

// DOM Elements
const textForm = document.querySelector("form");
const textInput = document.querySelector("#text-input");
const voiceSelect = document.querySelector("#voice-select");
const rate = document.querySelector("#rate");
const rateValue = document.querySelector("rate-value");
const pitch = document.querySelector("#pitch");
const pitchValue = document.querySelector("pitch-value");

// Initialize voices API
let voices = [];

const getVoices = () => {
  voices = synth.getVoices();
  
  // Loop through voices and create an option for each one
  voices.forEach(voice => {
    // Create an option element
    const option = document.createElement("option");
    
    // Fill the option element of voice select with voices and languages
    option.textContent = voice.name + " (" + voice.lang + ")" ;
    
    // Set needed option attributes
    option.setAttribute("data-lang", voice.lang);
    option.setAttribute("data-name", voice.name);
    voiceSelect.appendChild(option);
  });
};

getVoices();

// To resolve the return of an empty array 
// when getVoices is called when voices are not changed yet
if (synth.onvoiceschanged !== undefined) {
  synth.onvoiceschanged = getVoices;
}

// Speak
const speak = () => {
  // Check if alreay speaking
  if (synth.speaking) {
    console.error("Already speaking...");
    return;
  }
  
  if (textInput.value !== ""){
    // Get speech text
    const speakText = new SpeechSynthesisUtterance(textInput.value);
  
    // Speak end
    speakText.onend = e => {
      console.log("Done speaking...");
    };
    
    // Speak error
    speakText.onerror = e => {
      console.error("Looks like something went wrong.");
    };
    
    // Selected Voice
    const selectedVoice = voiceSelect.selectedOptions[0].getAttribute("data-name");
    
    // Loop through voices
    voices.forEach(voice => {
      if (voice.name === selectedVoice) {
        speakText.voice = voice;
      }
    });
    
    // Set rate and pitch
    speakText.rate = rate.value;
    speakText.pitch = pitch.value;
    
    // speak
    synth.speak(speakText);
  }
};

// Event Listeners

// Text form submit
textForm.addEventListener("submit", e => {
  e.preventDefault();
  speak();
  textInput.blur();
});

// Rate value change
rate.addEventListener("change", e => rateValue.textContent = rate.value);

// Rate value change
pitch.addEventListener("change", e => pitchValue.textContent = pitch.value);

// 
voiceSelect.addEventListener("change", e => voice());



























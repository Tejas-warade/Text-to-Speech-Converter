let speech = new SpeechSynthesisUtterance();

let voices = [];

let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices(); // get all voices on device
    speech.voice = voices[0]; // by default first voice is selected

    // To display all voices in select menu
    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
};

// To change seleted voice
voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
});

document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
})
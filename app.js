window.SpeechRecognition = window.webkitSpeechRecognition;
let recognition = new SpeechRecognition();

let template = document.getElementById("template");
let p = document.createElement("p");
template.appendChild(p);

recognition.addEventListener("result", e => {
  let transcript = e.results[0][0].transcript;
  p.innerHTML = transcript;
  if (e.results[0].isFinal === true) {
    p = document.createElement("p");
    template.appendChild(p);
  }
});
recognition.addEventListener("end", recognition.start);

recognition.start();

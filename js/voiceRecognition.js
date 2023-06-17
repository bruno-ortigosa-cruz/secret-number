const guessElement = document.getElementById("guess")

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

var mic = true

recognition.lang = "en-Us"
recognition.start()


recognition.addEventListener('end', () => {
    if (!over && mic === true) {
        recognition.start()
    }
})

recognition.addEventListener('result', onSpeak)

function onSpeak(event) {
    const guess = event.results[0][0].transcript
    displayGuess(guess)
    validateGuess(guess)
}

function displayGuess(guess) {
    if (guess === "secret number") {
        guessElement.innerHTML = `
            <div>Secret Number:</div>
            <span class="box">${secretNumber}</span>
            <div>Shhh... You didn't hear it from me!</div>
        `
    } else {
        guessElement.innerHTML = `
            <div>You said:</div>
            <span class="box">${guess}</span>
        `
    }
    
}


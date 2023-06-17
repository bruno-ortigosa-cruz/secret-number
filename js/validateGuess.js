const main = document.getElementById("main-container")

function validateGuess(guess) {
    const number = +guess

    if (guess == "game over") { 
        main.innerHTML = `
            <div class="main">
                <h2 class="title"><i class="fa-solid fa-skull fa-shake"></i> Game Over! <i class="fa-solid fa-skull fa-shake"></i></h2>
                <h3 class="subtitle">The secret number was: ${secretNumber}</h3>
                <button id="play-again" class="play-btn">Play Again</button>
            </div>
        `
        over = true
    }

    if (invalidGuess(number) && guess != "secret number") {
        guessElement.innerHTML += "<div>Invalid Value: not a number</div>"

        return
    } else if (nonIntegerGuess(number) && guess != "secret number") {
        guessElement.innerHTML += "<div>Invalid Value: not an integer</div>"

        return
    }
    if (outOfRangeGuess(number)) {
        guessElement.innerHTML += `
            <div>Invalid Value: out of range, the guess must be between ${lesserNumber} and ${greaterNumber}</div>
        `

        return
    }
    if (number === secretNumber) {
        main.innerHTML = `
            <div class="main">
                <h2 class="title"><i class="fa-regular fa-star fa-bounce"></i>You Got It!<i class="fa-regular fa-star fa-bounce"></i></h2>
                <h3 class="subtitle">The secret number was ${secretNumber}</h3>
                <button id="play-again" class="play-btn">Play Again</button>
            </div>
        `
        over = true
    } else if (number < secretNumber) {
        guessElement.innerHTML += `
            <span class="text"><br>The secret number is greater than ${number}<i class="fa-solid fa-arrow-up-long fa-bounce"></i></span>
        `
    } else if (number > secretNumber) {
        guessElement.innerHTML += `
            <span class="text"><br>The secret number is less than ${number}<i class="fa-solid fa-arrow-down-long fa-bounce"></i></span>
        `
    }
}

function invalidGuess(number) {
    return Number.isNaN(number)
}

function outOfRangeGuess(number) {
    return number > greaterNumber || number < lesserNumber
}

function nonIntegerGuess(number) {
    return !Number.isInteger(number)
}

document.body.addEventListener('click', event => {
    if (event.target.id == 'play-again') {
        window.location.reload()
    }
})
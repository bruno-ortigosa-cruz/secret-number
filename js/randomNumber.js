var over = false
const lesserNumber = 0
const greaterNumber = 100

const secretNumber = generateRandomNumber(lesserNumber, greaterNumber)

function generateRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const lesserValueElement = document.getElementById("lesser-value")
lesserValueElement.innerHTML = lesserNumber

const greaterValueElement = document.getElementById("greater-value")
greaterValueElement.innerHTML = greaterNumber
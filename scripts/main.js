"use strict"

const result = document.getElementById("result")
let intervalId = null

function randomNumber() {
    return Math.floor(Math.random() * 100)
}

function start() {
    if (!intervalId) {
        intervalId = setInterval(function() {
            result.innerText = randomNumber() + 1
        }, 100)
    }
}

function stop() {
    clearInterval(intervalId)
    intervalId = null
}

function reset() {
    stop()
    result.innerText = 0
}

document.getElementById("start").addEventListener("click", start)
document.getElementById("stop").addEventListener("click", stop)
document.getElementById("reset").addEventListener("click", reset)

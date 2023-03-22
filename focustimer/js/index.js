import Sound from "./sounds.js"
import Bg from "./controls.js"
import Timer  from "./timer.js"
import { elements } from "./elements.js"

const {
    buttonPlay,
    buttonStop,
    buttonIncrease,
    buttonToDecrease,
    buttonForest,
    buttonRain,
    buttonCoffeeShop,
    buttonFireplace,
    minutesDisplay,
    secondsDisplay
} = elements

let minutes = Number(minutesDisplay.textContent)
let timerTimeOut

const sound = Sound()

const bg = Bg({
    buttonCoffeeShop,
    buttonFireplace,
    buttonForest,
    buttonRain
})

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    minutes,
})

buttonForest.addEventListener('click', () => {
    bg.addBg('forest');
    sound.playMusic('forest');
})

buttonRain.addEventListener('click', () => {
    bg.addBg('rain');
    sound.playMusic('rain');
})

buttonCoffeeShop.addEventListener('click', () => {
    bg.addBg('coffeeshop');
    sound.playMusic('coffeeshop');
})

buttonFireplace.addEventListener('click', () => {
    bg.addBg('fireplace')
    sound.playMusic('fireplace');
})

buttonPlay.addEventListener('click', () => {
    document.getElementById('disable').disabled = true
    timer.countDown()
})

buttonStop.addEventListener('click', () => {
    document.getElementById('disable').disabled = false
    clearTimeout(timerTimeOut)
    timer.resetTimer()
})

buttonIncrease.addEventListener('click', () => {
    timer.increaseTime()
})

buttonToDecrease.addEventListener('click', () => {
    timer.toDecreaseTime()
})
import Sound from "./sounds.js"

const sounds = Sound()

export default function ({
    minutesDisplay,
    secondsDisplay,
    timerTimeOut,
    minutes
}) {
    function updateTimerDisplay(minutes, seconds) {
        minutesDisplay.textContent = String(minutes).padStart(2, '0')
        secondsDisplay.textContent = String(seconds).padStart(2, '0')
    }

    function resetTimer() {
        updateTimerDisplay(minutes, 0)
        clearTimeout(timerTimeOut)
    }

    function countDown () {
        timerTimeOut =  setTimeout(() => {
           let seconds = Number(secondsDisplay.textContent)
           let minutes = Number(minutesDisplay.textContent)
   
           if (minutes <= 0 && seconds <= 0 ) {
               updateTimerDisplay(minutesDisplay.textContent, 0)
               resetTimer()
               sounds.stopMusic()
               console.log(sounds)
               return
            }
       
           if (seconds <= 0) {
               seconds = 2
               --minutes
            }
   
           updateTimerDisplay(minutes, String(seconds - 1))
           
           countDown()
           }, 1000)
    }

   function increaseTime() {
        let newMinutes = Number(minutesDisplay.textContent)
        newMinutes = newMinutes + 5
        updateTimerDisplay(newMinutes, Number(secondsDisplay.textContent))
    }

    function toDecreaseTime() {
        let newMinutes = Number(minutesDisplay.textContent)
        newMinutes = newMinutes - 5
        if (newMinutes >= 0) {
            updateTimerDisplay(newMinutes, Number(secondsDisplay.textContent))
        }
    }

    return {
        updateTimerDisplay,
        resetTimer,
        clearTimeout,
        countDown,
        increaseTime,
        toDecreaseTime
    }
}

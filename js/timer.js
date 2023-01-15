import Sound from './sounds.js'

export default function Timer({
    secondsDisplay,
    minutesDisplay,
    resetControls,
}) {
    let timeOut
    let minutes = Number(minutesDisplay.textContent)

    function updateDisplay(newMinutes, seconds) {
        newMinutes = newMinutes ?? minutes
        seconds = seconds ?? 0
        minutesDisplay.textContent = String(newMinutes).padStart(2, '0')
        secondsDisplay.textContent = String(seconds).padStart(2, '0')
    }

    function reset() {
        updateDisplay(minutes, 0)
        clearTimeout(timeOut)
    }

    function countDown() {
        timeOut = setTimeout(function () {
            let seconds = Number(secondsDisplay.textContent)
            let minutes = Number(minutesDisplay.textContent)
            let isFinished = minutes <= 0 && seconds <= 0 

            updateDisplay(minutes, 0)

            if(isFinished) {
                resetControls()
                updateDisplay()
                Sound().timeEnd()
                return;
            }

            if(seconds <= 0) {
                seconds = 60
                --minutes
            }

            updateDisplay(minutes, String(seconds -1))

            countDown()
        }, 1000)
    }

    function updateMinutes(newMinutes) {
        minutes = newMinutes
    }

    function freezeDisplay() {
        clearTimeout(timeOut)
    }

    function increaseDisplay() {
        minutesDisplay.textContent = String(Number(minutesDisplay.textContent) + 5).padStart(2, '0') 
    }

    function decreaseDisplay() {
        if (minutesDisplay.textContent <= 5) {
            updateDisplay(0, 0)
        } else {
            minutesDisplay.textContent = String(Number(minutesDisplay.textContent) - 5).padStart(2, '0')
        }
    }

    return {
        decreaseDisplay,
        increaseDisplay,
        freezeDisplay,
        countDown,
        updateDisplay,
        updateMinutes,
        reset
    }

}
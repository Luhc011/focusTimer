export default function Sounds({
    soundForest,
    soundRain,
    soundCoffee,
    soundFireplace,
}) {
    const btnPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
    const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
    const forestMusic = new Audio("./sound/Forest.wav")
    const rainMusic = new Audio("./sound/Rain.wav")
    const fireplaceMusic = new Audio("./sound/Fireplace.wav")
    const coffeeMusic = new Audio()

    function pressButton() {
        btnPressAudio.play()
    }

    function timeEnd() {
        kitchenTimer.play()
    }

    function forestPress() {
        forestMusic.play()
        coffeeMusic.pause()
        rainMusic.pause()
        fireplaceMusic.pause()
        soundForest.classList.add('selected')
        soundCoffee.classList.remove('selected')
        soundRain.classList.remove('selected')
        soundFireplace.classList.remove('selected')
    }

    function rainPress() {
        rainMusic.play()
        forestMusic.pause()
        coffeeMusic.pause()
        fireplaceMusic.pause()
        soundRain.classList.add('selected')
        soundForest.classList.remove('selected')
        soundCoffee.classList.remove('selected')
        soundFireplace.classList.remove('selected')
    }

    function coffeePress() {
        forestMusic.pause()
        coffeeMusic.play()
        rainMusic.pause()
        fireplaceMusic.pause()
        soundForest.classList.remove('selected')
        soundCoffee.classList.add('selected')
        soundRain.classList.remove('selected')
        soundFireplace.classList.remove('selected')
    }

    function firePress() {
        forestMusic.pause()
        coffeeMusic.pause()
        rainMusic.pause()
        fireplaceMusic.play()
        soundForest.classList.remove('selected')
        soundCoffee.classList.remove('selected')
        soundRain.classList.remove('selected')
        soundFireplace.classList.add('selected')
    }

    sliderForest.addEventListener('input', () => {
        soundForest.volume = sliderForest.value / 100
    })

    sliderCoffee.addEventListener('input', () => {
        soundCoffee.volume = sliderCoffee.value / 100
    })

    sliderRain.addEventListener('input', () => {
        soundRain.volume = sliderRain.value / 100
    })

    sliderFireplace.addEventListener('input', () => {
        soundFireplace.volume = sliderFireplace.value / 100
    })

    return {
        pressButton,
        timeEnd,
        forestPress,
        rainPress,
        coffeePress,
        firePress,
        soundForest,
        soundCoffee,
        soundRain,
        soundFireplace,
    }

}
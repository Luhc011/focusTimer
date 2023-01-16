import {
    sliderVolumeForest,
    sliderVolumeRain,
    sliderVolumeCoffee,
    sliderVolumeFireplace
} from './elements.js'

export default function Sound() {
    const btnPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
    const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

    const forestMusic = new Audio("./sound/Forest.wav")
    const rainMusic = new Audio("./sound/Rain.wav")
    const fireMusic = new Audio("./sound/Fireplace.wav")
    const coffeeMusic = new Audio("./sound/CoffeeShop.wav")
    
    rainMusic.volume = sliderVolumeRain.value
    rainMusic.loop = true
    forestMusic.volume = sliderVolumeForest.value
    forestMusic.loop = true
    fireMusic.volume = sliderVolumeFireplace.value
    fireMusic.loop = true
    coffeeMusic.volume = sliderVolumeCoffee.value

    function pressButton() {
        btnPressAudio.play()
    }

    function timeEnd() {
        kitchenTimer.play()
    }

    return {
        pressButton,
        timeEnd,
        rainMusic,
        forestMusic,
        fireMusic,
        coffeeMusic
    }
}
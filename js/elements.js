const btnPlay = document.querySelector('.play')
const btnPause = document.querySelector('.pause')
const btnStop = document.querySelector('.stop')
const btnVolumeUp = document.querySelector('.increase')
const btnVoumeDown = document.querySelector('.decrease')

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

const btnForest = document.querySelector('.forest')
const btnRain = document.querySelector('.rain')
const btnCoffee = document.querySelector('.coffee')
const btnFireplace = document.querySelector('.fireplace')

const forestCard = document.querySelector('.containerForest')
const rainCard = document.querySelector('.containerRain')
const coffeeCard = document.querySelector('.containerCoffee')
const fireplaceCard = document.querySelector('.containerFireplace')

const sliderVolumeForest = document.getElementById('volumeForest')
const sliderVolumeRain = document.getElementById('volumeRain')
const sliderVolumeCoffee = document.getElementById('volumeCoffee')
const sliderVolumeFireplace = document.getElementById('volumeFireplace')

export {
    btnPlay,
    btnPause,
    btnStop,
    btnVolumeUp,
    btnVoumeDown,
    minutesDisplay,
    secondsDisplay,
    btnForest,
    btnRain,
    btnCoffee,
    btnFireplace,
    forestCard,
    rainCard,
    coffeeCard,
    fireplaceCard,
    sliderVolumeForest,
    sliderVolumeRain,
    sliderVolumeCoffee,
    sliderVolumeFireplace
}
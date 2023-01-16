import {
    btnPlay,
    btnPause,
    btnStop,
    btnVolumeUp,
    btnVoumeDown,
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
    sliderVolumeFireplace,
} from './elements.js'

export default function Events({controls, timer, sound}) {
    btnPlay.addEventListener('click', function() {
        controls.play();
        timer.countDown();
        sound.pressButton()
    })

    btnPause.addEventListener('click', function() {
        controls.pause();
        timer.freezeDisplay()
        sound.pressButton()

    })

    btnStop.addEventListener('click', function() {
        controls.reset()
        timer.reset()
        sound.pressButton()
    })

    btnVolumeUp.addEventListener('click', function() {
        timer.increaseDisplay();
        sound.pressButton();
    })

    btnVoumeDown.addEventListener('click', function() {
        timer.decreaseDisplay();
        sound.pressButton();
    })

    btnForest.addEventListener('click', function() {
        if (forestCard.classList.contains('enable')) {
            forestCard.classList.remove('enable')
            sound.forestMusic.pause()
            return
        }

        forestCard.classList.add('enable')
        rainCard.classList.remove('enable')
        coffeeCard.classList.remove('enable')
        fireplaceCard.classList.remove('enable')
        sound.forestMusic.play()
        sound.rainMusic.pause()
        sound.coffeeMusic.pause()
        sound.fireMusic.pause()
    })

    btnRain.addEventListener('click', function() {
        if (rainCard.classList.contains('enable')) {
            rainCard.classList.remove('enable')
            sound.rainMusic.pause()
            return
        }

        rainCard.classList.add('enable')
        forestCard.classList.remove('enable')
        coffeeCard.classList.remove('enable')
        fireplaceCard.classList.remove('enable')
        sound.forestMusic.pause()
        sound.rainMusic.play()
        sound.coffeeMusic.pause()
        sound.fireMusic.pause()
    })

    btnCoffee.addEventListener('click', function() {
        if (coffeeCard.classList.contains('enable')) {
            coffeeCard.classList.remove('enable')
            sound.coffeeMusic.pause()
            return
        }
        coffeeCard.classList.add('enable')
        rainCard.classList.remove('enable')
        forestCard.classList.remove('enable')
        fireplaceCard.classList.remove('enable')
        sound.forestMusic.pause()
        sound.rainMusic.pause()
        sound.coffeeMusic.play()
        sound.fireMusic.pause()
    })

    btnFireplace.addEventListener('click', function() {
        if (fireplaceCard.classList.contains('enable')) {
            fireplaceCard.classList.remove('enable')
            sound.fireMusic.pause()
            return
        }
        
        fireplaceCard.classList.add('enable')
        coffeeCard.classList.remove('enable')
        rainCard.classList.remove('enable')
        forestCard.classList.remove('enable')
        sound.forestMusic.pause()
        sound.rainMusic.pause()
        sound.coffeeMusic.pause()
        sound.fireMusic.play()
    })

    sliderVolumeForest.addEventListener('mousemove', setvolume)
    sliderVolumeRain.addEventListener('mousemove', setvolume)
    sliderVolumeCoffee.addEventListener('mousemove', setvolume)
    sliderVolumeFireplace.addEventListener('mousemove', setvolume)

    function setvolume() {
        sound.forestMusic.volume = sliderVolumeForest.value
        sound.rainMusic.volume = sliderVolumeRain.value
        sound.coffeeMusic.volume = sliderVolumeCoffee.value
        sound.fireMusic.volume = sliderVolumeFireplace.value
    } 
}

import {
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonIncrease,
    buttonDecrease,
    soundForest,
    soundRain,
    soundCoffee,
    soundFireplace,
} from './elements.js';

export default function Events({controls, timer, sound}) {
    buttonPlay.addEventListener('click', () => {
        controls.play();
        timer.countDown();
        sound.pressButton();
    })

    buttonPause.addEventListener('click', () => {
        controls.pause();
        timer.freezeDisplay();
        sound.pressButton();
    })

    buttonStop.addEventListener('click', () => {
        timer.reset();
        controls.reset();
        sound.pressButton();
    })

    buttonIncrease.addEventListener('click', () => {
        timer.increaseDisplay();
        sound.pressButton();
    })

    buttonDecrease.addEventListener('click', () => {
        timer.decreaseDisplay();
        sound.pressButton();
    })

    soundForest.addEventListener('click', () => {
        sound.forestPress();
    })

    soundRain.addEventListener('click', () => {
        sound.rainPress();
    })

    soundCoffee.addEventListener('click', () => {
        sound.coffeePress();
    })

    soundFireplace.addEventListener('click', () => {
        sound.firePress();
    })
}
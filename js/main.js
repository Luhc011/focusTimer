import Sound from './sounds.js';
import Timer from './timer.js';
import Controls from './controls.js';
import Events from './events.js';
import toggleMode from './theme.js';
import {
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonIncrease,
    buttonDecrease,
    minutesDisplay,
    secondsDisplay,
    soundForest,
    soundRain,
    soundCoffee,
    soundFireplace,
} from './elements.js'


const toggle = toggleMode()

const controls = Controls({
    buttonPlay,
    buttonPause
})

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls: controls.reset
})

const sound = Sound({
    soundForest,
    soundRain,
    soundCoffee,
    soundFireplace,
})

Events({controls, timer, sound})
const theme = document.querySelector('#toggle')

theme.addEventListener('click', toggleMode)

function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('dark')
}

import Sound from './sounds.js'
import Timer from './timer.js'
import Events from './events.js'
import Controls from './controls.js'
import {
    btnPlay,
    btnPause,
    btnStop,
    btnVolumeUp,
    btnVoumeDown,
    minutesDisplay,
    secondsDisplay
} from './elements.js'


const controls = Controls({
    btnPlay,
    btnPause,
    btnStop,
    btnVolumeUp,
    btnVoumeDown
})

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls: controls.reset
})

const sound = Sound()

Events({ controls, timer, sound })

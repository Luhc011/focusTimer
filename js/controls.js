export default function({buttonPlay, buttonPause}) {
    function play() {
        buttonPlay.classList.add('hidden')
        buttonPause.classList.remove('hidden')
    }

    function pause() {
        buttonPlay.classList.remove('hidden')
        buttonPause.classList.add('hidden')
    }

    function reset() {
        buttonPlay.classList.remove('hidden')
        buttonPause.classList.add('hidden')
    }

    return {
        play,
        pause,
        reset
    }
}
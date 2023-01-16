export default function Controls({
    btnPlay,
    btnPause,
    btnStop
}) {
    function play() {
        btnPlay.classList.add('hiden')
        btnPause.classList.remove('hiden')
        btnStop.classList.remove('hiden')
    }

    function pause() {
        btnPlay.classList.remove('hiden')
        btnPause.classList.add('hiden')
    }

    function reset() {
        btnPlay.classList.remove('hiden')
        btnPause.classList.add('hiden')
        btnStop.classList.add('hiden')
    }

    return {
        play,
        pause,
        reset
    }
}
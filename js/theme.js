export default function toggleMode() {
    const darkTheme = document.querySelector('.light')
    const lightMode = document.querySelector('.dark')

    darkTheme.addEventListener('click', () => {
        document.getElementById('bg').style.backgroundColor = '#121214'
        document.getElementById('timer').style.color = 'white'
        document.querySelector('.dark').classList.remove('hide')
        document.querySelector('.light').classList.add('hide')
        document.getElementById('controls').classList.add('dark')
        document.getElementById('sounds').classList.add('dark')
    })

    lightMode.addEventListener('click', () => {
        document.getElementById('bg').style.backgroundColor = 'white'
        document.getElementById('timer').style.color = '#323238'
        document.querySelector('.dark').classList.add('hide')
        document.querySelector('.light').classList.remove('hide')
        document.getElementById('controls').classList.remove('dark')
        document.getElementById('sounds').classList.remove('dark')
    })
}
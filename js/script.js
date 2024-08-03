// darkmode
const darkMode = document.querySelector('#dark_light')
const body = document.querySelector('body')

darkMode.addEventListener('click' ,function(){
    body.classList.toggle('darkmode')
})
// darkmode
const darkMode = document.querySelector('#dark_light')
const body = document.querySelector('body')

darkMode.addEventListener('click' ,function(){
    body.classList.toggle('darkmode')
})

// back to top btn
let mybutton = document.getElementById("backToTop");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}
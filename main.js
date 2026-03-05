let slides=document.querySelectorAll(".slide")

let i=0

setInterval(()=>{

slides.forEach(s=>s.style.display="none")

slides[i].style.display="block"

i++

if(i>=slides.length)

i=0

},3000)



function toggleTheme(){

let theme=localStorage.getItem("theme")

if(theme=="light"){

document.body.classList.remove("light")

localStorage.setItem("theme","dark")

}else{

document.body.classList.add("light")

localStorage.setItem("theme","light")

}

}
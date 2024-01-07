
window.addEventListener('scroll', ()=>{
    let header = document.getElementById('header')
    let span = document.getElementById('span')
    let links = document.getElementById('links')
    header.classList.toggle('scroll', window.scrollY>0)
    span.classList.toggle('scroll', window.scrollY>0)
    links.classList.toggle('scroll', window.scrollY>0)
})

function disponible(){
   let boton =  document.getElementById('botones')
    
    boton.addEventListener('click',mostrar())
    
}
function mostrar(){
    alert("Be patient, it's not available yet")
}

function hamburger(){
    let hamburger = document.getElementById('hamburger')
    let links = document.getElementById('links')


    hamburger.addEventListener('click', ()=>{
        links.classList.toggle('active')
    })
}
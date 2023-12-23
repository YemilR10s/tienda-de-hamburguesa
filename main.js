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
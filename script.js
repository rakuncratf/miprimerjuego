
let nclicks = 0;
const imagen =  document.querySelector(".imagen");
const intruso = document.querySelector("#intruso");
const click = document.querySelector(".clicks")
const alerta = document.querySelector(".alerta")
const alertaMensaje =document.querySelector(".alerta-mensaje")

/* intruso.style.backgroundColor = "rgba(0,0,0,0)";
 */
intruso.addEventListener("click", function() {
    imagen.style.border = "10px solid green";
    imagen.style.borderRadius  = "5%";
    imagen.style.backgroundColor = "green"; 
    alerta.style.display = "flex";

    if (nclicks == 1) {
        alertaMensaje.textContent = "que pro , encontraste  al inpostor a la primera";
    } else if (nclicks < 11) {
        alertaMensaje.textContent =`este muchacho me llena de orgullo, encontraste al inpostor despues de ${nclicks}`;
    }else{
        alertaMensaje.textContent = " Eres un ciego, pero igual lo encontraste "
    }
})



imagen.addEventListener("click", function(){
    nclicks = nclicks + 1 ; if (nclicks == 1) {
       click.style.color = "green";
       } else if (nclicks< 11) {
            click.style.color = " yellow";
       }else{
           click.style.color = "red";
       }

    click.textContent = `Clicks: ${nclicks}`
})

function recargar (){
    location.reload()
}
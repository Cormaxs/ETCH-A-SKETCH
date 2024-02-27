const container = document.querySelector('.container');//selecciono el contenedor

function creacion(numero){
    for(let i = 1; i <= Number(numero); i++){
    var contenido = document.createElement('div');//creo el elemento div
    contenido.addEventListener("mouseover", cambiarColor);//mouseover se desencadena un evento al pasar el mouse por ensima
    contenido.classList.add("creado");
    container.appendChild(contenido);   
    //contenido.textContent =  + i;
                                }
}
creacion(256);

function eliminacion(){
    while (container.firstChild) {//el bucle se ejecutará mientras el contenedor padre tenga al menos un hijo, hasta que devuelva null
        container.removeChild(container.firstChild);// en cada iteración del bucle, se elimina el primer hijo del contenedor padre.
      }
  }

function cambiarColor(event) {
    var cuadrado = event.target;//tarjet se usa para el pasar como objeto y aber ue cuadrado fue tocado
    var color = "grey";
    cuadrado.style.backgroundColor = color;
  }

  function tamanio(){
    let cuadros = prompt("elegi un numero entre 1 y 100");
    if(cuadros >= 1 && cuadros <= 100){
        let total = cuadros * cuadros;
        eliminacion();
        creacion(Number(total));
        
    }
    else{
        alert("ingrese un numero valido");
    }
  }

  
/*let titulo = document.querySelector("h1");
titulo.innerHTML = 'Juego del numero secreto';

let parrafo = document.querySelector("p");
parrafo.innerHTML = 'Indica un numero del 1 al 10';
*/

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return; //buena practica
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    //console.log(typeof(numeroDeUsuario));
    //console.log(numeroSecreto);
    //console.log(typeof(numeroSecreto));
    //console.log(numeroDeUsuario);

    //console.log(intentos);
    //console.log(numeroDeUsuario === numeroSecreto);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`); //operador ternario
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else{
        //El usuario no acerto
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El numero es secreto es menor');
        } else{
            asignarTextoElemento('p', 'El numero es secreto es mayor');
        }
        intentos ++;
        limpiarCaja();
        
    }
    return;
}

function limpiarCaja(){
    /*let valorCaja = document.querySelector("#valorUsuario"); //querySelector por id 
    valorCaja.value = ''; */

    document.querySelector("#valorUsuario").value = ""; //mas reducido
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los numeros 
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p' , 'Ya se sortearon todos los numeros posibles');
    }else {
        //Si el numero generado esta incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1' , 'Juego del numero secreto!');
    asignarTextoElemento('p' , `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar la caja 
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros 
    //generar el numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled","true");
}

condicionesIniciales();
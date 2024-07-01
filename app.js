//let numeroSecreto = generarNumeroSecreto(); //variable = a la funcion ambito de la variable global
//let intentos = 1;//contador de intentos 
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;




//console.log(typeof(numeroSecreto));//este es el tipo de valor del numero aleatorio para verlo en la consola

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);//esta funcion pone los titulos de juego secreto e insetar numeros 
    elementoHTML.innerHTML = texto;
    return;
}


function generarNumeroSecreto() {
    //let numeroSecreto = Math.floor(Math.random()*10)+1; aque corrije esto para que quede en una linea 
    //return numeroSecreto //esto entrega el valor del numero secreto 
    //return Math.floor(Math.random()*10)+1;
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;//aqui se crea una nueva variable para generar el numero 
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los numeros');
    } else { 
                if(listaNumerosSorteados.includes(numeroGenerado)){
                return generarNumeroSecreto();
         } else {
                listaNumerosSorteados.push(numeroGenerado);
                return numeroGenerado;
        }
    }
}


function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);//ojo, la opcion value no va a funcionar si no se le pone primero el id valorUsario al HTML
    
    if (numeroDeUsuario===numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? "vez" : "veces"}!!`);//aqui acierta
        document.getElementById('reiniciar').removeAttribute('disabled'); //aqui le quita el atributo disable al boton dejandolo enable

    } else {
        if (numeroDeUsuario>numeroSecreto) {
            asignarTextoElemento('p','El numero es menor vuelva a intentar');
        } else {
            asignarTextoElemento('p','El numero es mayor, intenta nuevamente!');
        }
        intentos++;//esta es la version optimizada del contador
        console.log (intentos,'cantidad de intentos')
    }
    console.log(numeroDeUsuario,"este es el numero de usuario")
    //console.log(typeof(numeroDeUsuario))

    console.log(numeroDeUsuario === numeroSecreto)//devuelve true or false 
    //alert('Click desde el boton');//esta funcion es un encapsulamiento de una accion que queremos que haga 
    limpiarCaja()
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = ''; //esta funcion limpia la caja 
    //let valorCaja = document.querySelector('#valorUsuario'); paso largo crea el una variable para el valor de la caja que lo ocupamos vacio
    //valorCaja.value = ''; esto se hizo antes y es el paso largo 

}
function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del numero secreto!');
    asignarTextoElemento('p',`Indica un numero de 1 a ${numeroMaximo}!`);  
    numeroSecreto = generarNumeroSecreto();//llama a la funcion numero secreto sin cambiarla 
    intentos = 1;
    console.log(numeroSecreto,'este es el numero secreto');//para verlo en la consola 
    
}


function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //generar el numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //deshabilitar el boton de juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');//ojo aqui es importante que el queryselector buse ei id  aqui le da nuevamente el atributo disabled con la condicion true


}

condicionesIniciales();

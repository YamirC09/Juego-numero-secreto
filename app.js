let numeroSecreto = 0;
let intentos = 0;
let numerosSorteados = [];

function asignarTitulo(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (intentos == 3){
        asignarTitulo('p','Haz superado el limite de intentos');
        limpiarCaja();
    }
    else{
    
        if (numeroUsuario == numeroSecreto){
            document.getElementById('reiniciar').removeAttribute('disabled');
            asignarTitulo('p',`¡Acertaste! en ${intentos} ${intentos === 1 ? 'intento': 'intentos'}`);
        }
        else{
            if (numeroUsuario > numeroSecreto){
                asignarTitulo('p','El numero secreto es menor');
            }
            else if(numeroUsuario < numeroSecreto){
                asignarTitulo('p','El numero secreto es mayor');
            }    
            intentos++;
            limpiarCaja();
        console.log(intentos);
    return;
}
}
}

function nuevoJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute("disabled", "true");
}

function limpiarCaja(){
    document.querySelector("#valorUsuario").value='';
}

function numeroAleatorio(){
    let numeroGenerado = Math.floor(Math.random() * 10) + 1;
    if (numerosSorteados.length == 10){
        asignarTitulo('p','Ya se sortearon todos los numeros');
    }
    else{
        console.log(numeroGenerado);
        console.log(numerosSorteados);
        if (numerosSorteados.includes(numeroGenerado)){
            return  numeroAleatorio();
        }
        else{
            numerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
function condicionesIniciales(){
    asignarTitulo('h1',"Juego del numero secreto!");
    asignarTitulo('p',"Ingresa un numero del 1 al 10");
    numeroSecreto = numeroAleatorio();
    intentos = 1;

}

condicionesIniciales();
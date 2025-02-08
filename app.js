let numeroAleatorio = prompt('Del numero 1 hasta que otro numero te gustaria jugar ?');
let numeroSecreto = Math.floor(Math.random()*(numeroAleatorio))+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez';
let maximosIntentos = prompt('Cual es el numero maximo de intentos que quieres tener?');
console.log(numeroSecreto);
while( numeroUsuario != numeroSecreto){
    numeroUsuario = parseInt(prompt(` Me indicas un numero entre 1 y ${numeroAleatorio}:`));
    //pide un numero al usuario y lo guarda en la variable numeroUsuario, parseInt convierte el string (tipo de dato) en numero

console.log(typeof(numeroUsuario));//typeof nos dice el tipo de dato
 console.log(numeroUsuario);//muestra en consola el numero

 if (numeroUsuario == numeroSecreto) {
      //alert('felicidades adivinaste el numero : ' + numeroSecreto);
     //manda la alerta con el texto de que adivino el numero
     alert(`Felicidades, el numero era ${numeroSecreto} lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces' }`) // otra forma de hacerlo con comillas invertidas y ${} para mostrar el valor de una variable
 }
   else {
     if(numeroUsuario > numeroSecreto){
         alert(`El numero es menor `);
     }
     else {
         alert('El numero es mayor');
   }
   // alert(' no era ese numero lo siento');
 };
 
   // intentos = intentos + 1;
   intentos++;
    palabraVeces = 'veces';
    if(intentos > maximosIntentos)
    {
        alert(`llegaste al numero maximo de intentos ${maximosIntentos}`);
        break;    
    }
}
//Creamos un elemento con Javascript Puro
let encabezado=document.createElement('h2');
//Le ponemos un texto interno
encabezado.textContent='Este es un texto';
//Lo agregamos al elemento deseado, en este caso body
document.getElementsByTagName('body')[0].appendChild(encabezado);
// esto es exactamente lo de arriba, pero con Jquery
//creamos un elemento y definimos el texto
let encabezado2=$('<h2></h2>').text('esto es otro texto');
//lo agregamos al body
$('body').append(encabezado2);
//Serie Fibonacci
// 1. Calcular 30 digitos
// 2. Hacer una funcion
// 3. Sacar cuales son pares y cuales son impares.
function CreaParrafoHTML(numero) {
    let parrafo = document.createElement('p');
    parrafo.textContent = numero + ",";
    return parrafo;
}
function Fibonacci(veces) {
    let arreglo = [0, 1];
    let contenedor = document.createElement('div');

    for (let i = 1; i < veces - 1; i++) {
        let numero = arreglo[i] + arreglo[i - 1];
        arreglo.push(numero);
        let parrafo = CreaParrafoHTML(numero);
        contenedor.appendChild(parrafo);
    }
    console.log(arreglo);
    document.getElementsByTagName('body')[0].appendChild(contenedor);
    return arreglo;
}
function numerosPares(numeros) {
    let contador = 0;
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 == 0) {
            contador++;
        }
    }
    console.log(`tiene ${contador} numeros pares`);
}

function calculaFibo(){
    let cantidad=document.getElementById('cantidad').value;
    Fibonacci(cantidad);
}
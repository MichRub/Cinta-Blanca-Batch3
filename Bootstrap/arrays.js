let numeros=[4,5,6,7,8,9,0,2,1];
console.log(numeros);
console.log(numeros.sort() );

let nombres=['Israel','Michell','Mauricio','Jorge','Jose'];
console.log(nombres);
console.log(nombres.sort());

//anagrama
    let palabra1 = 'omar';
    let palabra2 = 'amor';
    //verifico que sean del mismo tamaño
   if(palabra1.lenght==palabra2.lenght){
       palabra1=palabra1.split("").sort().join("").toLowerCase();
       palabra2=palabra2.split("").sort().join("").toLowerCase();
       if(palabra1===palabra2){
           console.log('Si son anagramas');
       }
       else{
           console.log('nel, no son anagramas');
       }
    }else{
        console.log('soon de un tampaño diferente, entonces no');
    }




    function numeroMayor(arreglo){
        arreglo=arreglo.sort(function(a,b){return a-b});
        let mayor=arreglo[arreglo.length-1];
        return mayor;
    }
        let listas=[1,234,36,56,7,8,888,9,23,55];

    console.log(numeros);

/*crear un arreglo con 40 numeros random
regresar el numero mayor de ese arreglo
hacer lo mismo N veces y guarda rel resultado en un arreglo */

function aleatorio() {
    return Math.round(Math.random()*(1000-0)+parseInt(0));
    }

let arreglo=[];
for(let posicion=0; posicion<=40;posicion++){
    let numero_random=aleatorio();
    arreglo.push(numero_random);
}

console.log(arreglo);
console.log(numeroMayor(arreglo));

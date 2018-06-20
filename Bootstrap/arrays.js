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

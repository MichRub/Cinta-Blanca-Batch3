let alumnos= {
"cinta_blanca":[
    {"nombre": "Michell","edad":25},
    {"nombre": "Mauricio","edad":34},
    {"nombre":"Jorge","edad":19},
    {"nombre":"Israel","edad":26}
]
    };

console.log(alumnos);

console.log(alumnos.cinta_blanca[0].nombre);
console.log(alumnos.cinta_blanca[0].edad);


for(let i=0;i<100;i++){
}
let header=document.createElement('h1');
header.textContent='Este es un encabezado';
document.getElementsByTagName('body')[0].appendChild(header);

for(let i=0; i<alumnos.cinta_blanca.length;i++){
    let header=document.createElement('h1');
    let header2=document.createElement('h2');
 

    header.textContent=alumnos.cinta_blanca[i].nombre;
    header2.textContent=alumnos.cinta_blanca[i].edad;

    document.getElementsByTagName('body')[0].appendChild(header);
    document.getElementsByTagName('body')[0].appendChild(header2);
}



let productos={
    "linea_blanca":[
{"nombre":"refri","precio":3000,"cantidad":10},
{"nombre":"lavadora","precio":5000,"cantidad":11},
    ],
    "electronicos":[
        {"nombre":"computadora","precio":4000,"cantidad":2},
        {"nombre":"television","precio":15000,"cantidad":60}
    ]
}

productos.electronicos.push({"nombre":"dvd","precio":100,"cantidad":70}); 
function agregalineaTabla(producto){
    let linea=document.createElement('tr');
    let nombre=document.createElement('td');
    let precio=document.createElement('td');
    let cantidad=document.createElement('td');
    
    nombre.textContent=producto.nombre;
    precio.textContent=producto.precio;
    cantidad.textContent=producto.cantidad;

    linea.appendChild(nombre);
    linea.appendChild(precio);
    linea.appendChild(cantidad);

    document.getElementsByTagName('tbody')[0].appendChild(linea);
}
let inventario=0;
for(let i=0;i<productos.linea_blanca.length;i++){
    let producto=productos.linea_blanca[i];
    inventario+=producto.precio*producto.cantidad;
    agregalineaTabla(producto)
} 

for(let i=0;i<productos.electronicos.length;i++){
    let producto=productos.electronicos[i];
    inventario+=producto.precio*producto.cantidad;

    agregalineaTabla(producto)
} 

console.log('tu inventario vale'+inventario)

function holaMundo(mensaje){
    console.log(mensaje,mensaje.length);

}
holaMundo('israel');
holaMundo('hi baby');
holaMundo('run forest run');





//agregaLineaTabla(producto);
function eventoEnter(){
    event.preventDefault();
    if(event.keyCode===13){
        muestraNombre();
    }
}

function eliminaElemento(elId) {
    let elemento = document.getElementById(elId);
    //Eliminamos el elemento del padre (el contenedor)
    document.getElementById('el_contenedor').removeChild(elemento);
}

function limpiaTodo(){
    document.getElementById('el_contenedor').innerHTML='';

}
function muestraNombre() {
    //obtenemos el valor de nuestro input con el id 'el_nombre'
    let elNombre = document.getElementById('el_nombre').value;
    if (elNombre.length > 0) {
        //creamos un elemento H2 donde vamos a mostrar el texto
        let encabezado = document.createElement('h2');
        //le asignamos el valor de mi variable al contenido de texto en el h2
        encabezado.textContent = elNombre;
        //definirmos el atributo Id el elemento
        let elId = new Date().getTime();
        encabezado.setAttribute('id',elId);
        //agrego el elemento H2 al div con el id 'el_contenedor'
        encabezado.onclick = function () { eliminaElemento(elId);};
        //agrego el elemento H2 al div con el id ?el_contenedor'
        document.getElementById('el_contenedor').appendChild(encabezado);
        //vamos a limpiar el input
        document.getElementById('el_nombre').value='';
    
    }
}


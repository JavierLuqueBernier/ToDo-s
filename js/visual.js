// el nombre del array inicial es agendaActividades
// el nombre de la seccion es listaactividades

var seccionActividades = document.getElementById('listaactividades');

var boton = document.getElementById('btn');

var ultimoId = 6;



// ----- BOTON PARA OCULTAR MENÚ -------//

var menuBtn = document.querySelector('.menu-icon');
    menu = document.querySelector('header ul');
   /*  menu.style.display = "none"; */

menuBtn.addEventListener('click', desplegarMenu)

/* function desplegarMenu(event){

    if(menu.style.display == 'none'){
        menu.style.display = 'block';    // Aqui el javascript lo que hace es inyectar estilos en css, lo cual no está mal pero no es lo mejor
    }else{                               // ya que puede entrar en conflicto con los @media del propio css
        menu.style.display = 'none'
    }
    
} */


function desplegarMenu(event){
   if( menu.className == ''){           // Aqui javascript lo que hace es inyectar una clase en el html, lo cual es más acertado.
        menu.className = "show";
   }else{
       menu.className = "";
   }
}

//fin


//filtro de prioridad

var selectorPrioridad = document.querySelector('#buscarPrioridad'); //podriamos tambien cogerlo por ElementById pero es para tener ejemplos de ambos

selectorPrioridad.addEventListener('change', recogePrioridad);

function recogePrioridad(e) {
    //e.target.value me devuelve la prioridad seleccionada cada vez que cambio el selector
    let prioridad = e.target.value;

    if (prioridad != "") {
        let listaFiltradaPrioridad = filtrarXPrioridad(agendaActividades, prioridad); //estamos metiendo el resultado del filtrado en una variable para poder sacarlo luego y meterlo en la funcion de pintado.
        pintarActividades(listaFiltradaPrioridad);
    } else {
        pintarActividades(agendaActividades);
    }
}
//fin



//funcion de pintado de cualquier lista de tipo actividad.

function pintarActividades(pListaActividades){ //aqui repintamos la lista completa
    seccionActividades.innerHTML = ""; //aqui estoy borrando todos los pacientes antes pintados para que se muestren los que pinto ahora

    if(pListaActividades.length !=0) {
        pListaActividades.forEach( actividad => { //aqui estamos recorriendo cada uno de los elementos de la lista para ver cual cumple lo que buscamos
            seccionActividades.innerHTML += `<article id="${actividad.id}" class="${actividad.prioridad} ">
                                                <h4>${actividad.nombre}</h4>
                                                <ul class="container">
                                                    <li>Prioridad: <strong>${actividad.prioridad}</strong></li>
                                                    <li><a href="#" title="eliminar" class="eliminar"><span class="delete-icon"><i class="fas fa-trash-alt"></i></span></a></li>
                                                </ul>
                                            </article>
                                            <hr>` //todo lo anterior es un template literal        
        })

    } else{
        seccionActividades.innerHTML = "<h2>No hay registros con esas condiciones</h2>"
    }
}

pintarActividades(agendaActividades);
//fin



//funcion filtrar por nombre

var busqueda = document.querySelector('#search');

busqueda.addEventListener('keyup', recogerBusqueda);

function recogerBusqueda(e) {

    let palabraBuscar = e.target.value.toLowerCase();

    var listaBusqueda = filtrarBusqueda(agendaActividades, palabraBuscar);

    pintarActividades(listaBusqueda);
}
//fin

// Captura de datos para introducir en el array

boton.addEventListener('click', event => { //lanzo el evento
    event.preventDefault(); //bloqueo la accion por defecto
    var nombre = document.getElementById('nuevaactividad').value; //aqui capturamos el valor del nombre de la actividad

    var electorPrioridad = document.getElementById('elegirPrioridad').value; //aqui capturamos el valor de la prioridad
    

    if (nombre.length == 0 || nombre[0] == " ") {
        //mandar un mensaje al usuario
        document.getElementById('mensaje').innerText = "Los campos no pueden estar vacios";
        document.getElementById('form').reset(); //aqui estamos haciendo que al pulsar guardar, se resetee el campo y se vacie

    }
    else {

        guardarDatos(nombre, electorPrioridad);
        document.getElementById('mensaje').innerText = "";
        document.getElementById('form').reset(); //aqui estamos haciendo que al pulsar guardar, se resetee el campo y se vacie

    }
})

//fin

//segunda funcion de pintado?

function pintarActividad(pActividades) {
    seccionActividades.innerHTML += `<article id="${pActividades.id}" class="${pActividades.prioridad}">
                                        <h4>${pActividades.nombre}</h4>
                                        <ul class="container">
                                            <li>Prioridad: <strong>${pActividad.prioridad}</strong></li>
                                            <li><a href="#" title="eliminar" class="eliminar"><span class="delete-icon"><i class="fas fa-trash-alt"></i></span></a></li>
                                        </ul>
                                    </article>`
        eliminar = document.querySelectorAll('.eliminar')
        for(boton of eliminar){
            boton.addEventListener('click', eliminarActividad)
    }        
}

// borrar

var actividadArt = document.getElementsByTagName('article')
//console.log(actividadArt); reconoce que tengo 5 articulos en el array original

function eliminarActividad(e) {
    
    for (let i = 0; i< agendaActividades.length; i++){

        seccionActividades.removeChild(e.target.parentNode); //porque me salta un error en la consola diciendo que Node no es una funcion?

        actividadesBorradas = new Array()
        actividadesBorradas = agendaActividades.splice(actividadArt, 1); //aqui estabamos

}
}
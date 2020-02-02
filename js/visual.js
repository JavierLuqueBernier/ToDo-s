// el nombre del array del inicial es agendaActividades
// el nombre de la seccion es listaactividades

var seccionActividades = document.getElementById('listaactividades');

var boton = document.getElementById('btn');


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

var selectorPrioridad = document.querySelector('#buscarprioridad'); //podriamos tambien cogerlo por ElementById pero es para tener ejemplos de ambos

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

function pintarActividades(pListaActividades){ //aqui repintamos la lista completa porque estamos pintando un filtro
    seccionActividades.innerHTML = ""; //aqui estoy borrando todos los pacientes antes pintados para que se muestren los que pinto ahora

    if(pListaActividades.length !=0) {
        pListaActividades.forEach( actividad => { //aqui estamos recorriendo cada uno de los elementos de la lista para ver cual cumple lo que buscamos
            seccionActividades.innerHTML += `<article>                
                                                <div>    
                                                    <h4>${actividad.nombre}</h4>
                                                    <ul>
                                                        <li>Prioridad: <strong>${actividad.prioridad}</strong></li>
                                                        </ul>
                                                </div>
                                             </article>
                                             <div class="line"></div>
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

    if (nombre.length == 0 || nombre[0] == " ") {
        //mandar un mensaje al usuario
        document.getElementById('mensaje').innerText = "Los campos no pueden estar vacios";
        document.getElementById('form').reset(); //aqui estamos haciendo que al pulsar guardar, se resetee el campo y se vacie

    }
    else {

        guardarDatos(nombre);
        document.getElementById('mensaje').innerText = "";
        document.getElementById('form').reset(); //aqui estamos haciendo que al pulsar guardar, se resetee el campo y se vacie

    }
})

function guardarDatos(pNombre) {

    let registro = {  //esto es un json
        id: ultimoId,
        nombre: pNombre,
        prioridad: pPrioridad
    }

    agendaActividades.push(registro); //aqui lo guardamos
    pintarActividades(registro);
    ultimoId++;

}
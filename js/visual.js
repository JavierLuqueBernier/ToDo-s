// el nombre del array inicial es agendaActividades
// el nombre de la seccion es listaactividades

var seccionActividades = document.getElementById('listaactividades');

var boton = document.getElementById('btn'); //capturo el elemento con id btn y le asigno la variable "boton"

var ultimoId = 6;


// Captura de datos para introducir en el array

boton.addEventListener('click', event => { //lanzo el evento al "escuchar" el click
   
    event.preventDefault(); //bloqueo la accion por defecto
    //console.log('dddd');
    var nombre = document.getElementById('nuevaactividad').value; //aqui capturamos el valor del nombre introducido en el campo de texto

    var electorPrioridad = document.getElementById('elegirPrioridad').value; //capturamos el valor de prioridad introducido en el selector
    

    if (nombre.length == 0 || nombre[0] == " ") { //Si la longitud del nombre es igual a 0 ó el valor del primer caracter es un espacio.
        //mandar un mensaje al usuario
        document.getElementById('mensaje').innerText = "Los campos no pueden estar vacios";
        document.getElementById('form').reset(); //aqui estamos haciendo que al pulsar guardar, se resetee el campo y se vacie

    }
    else {
    
        guardarDatos(nombre, electorPrioridad); //Se llama a guardarDatos linea 41/interno.js con los parametros antes conseguidos
        document.getElementById('mensaje').innerText = "";
        document.getElementById('form').reset(); //aqui estamos haciendo que al pulsar guardar, se resetee el campo y se vacie

    }
})

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


//filtro de prioridad de la busqueda

var selectorPrioridad = document.querySelector('#buscarPrioridad'); //podriamos tambien cogerlo por ElementById pero es para tener ejemplos de ambos. Estamos identificando donde está el dato que queremos

selectorPrioridad.addEventListener('change', recogePrioridad); // "escuchamos" cual es el valor de ese dato

function recogePrioridad(e) { //capturamos el valor de dicho dato
    //e.target.value me devuelve la prioridad seleccionada cada vez que cambio el selector
    let prioridad = e.target.value;

    if (prioridad != "") {
        let listaFiltradaPrioridad = filtrarXPrioridad(agendaActividades, prioridad); //estamos metiendo el resultado del filtrado en una variable para poder sacarlo luego y meterlo en la funcion de pintado en la linea 80. Asi mismo, lo que estamos haciendo aqui es llamar a la funcion filtrarXPrioridad que está en linea 2/interno.js y pasarle como parametros el array inicial y el valor de "e" que queremos que busque en ese array.
        pintarActividades(listaFiltradaPrioridad);
    } else {
        pintarActividades(agendaActividades);
    }
}
//fin




//funcion filtrar por nombre

var busqueda = document.querySelector('#search'); //busqueda del id "search"

busqueda.addEventListener('keyup', recogerBusqueda); // escuchamos cada vez que dejamos de pulsar la casilla de search

function recogerBusqueda(e) { 

    let palabraBuscar = e.target.value.toLowerCase();

    var listaBusqueda = filtrarBusqueda(agendaActividades, palabraBuscar); //funcion filtrarBusqueda linea 22/interno

    pintarActividades(listaBusqueda); //Pintamos el resultado del filtro con la funcion pintarActividades que a su vez usa la funcion pintarActividad
}
//fin




//funcion de pintado de cualquier lista de tipo actividad.

function pintarActividades(pListaActividades){ //aqui repintamos la lista completa
    seccionActividades.innerHTML = ""; //aqui estoy borrando todas actividades antes pintadas para que se muestren las que pinto ahora

    if(pListaActividades.length !=0) {
        pListaActividades.forEach( actividad => { //aqui estamos recorriendo los elementos de la lista para ver cual cumple lo que buscamos
           pintarActividad(actividad); //aqui reutilizamos la funcion pintarActividad que se encuentra en la linea 133
        })

    } else{
        seccionActividades.innerHTML = "<h2>No hay registros con esas condiciones</h2>" 
    }
}

pintarActividades(agendaActividades);

//fin



//segunda funcion de pintado para pintar las actividades de una en una

function pintarActividad(pActividades) {
    seccionActividades.innerHTML += `<article id="${pActividades.id}" class="${pActividades.prioridad}">
                                        <h4>${pActividades.nombre}</h4>
                                        <ul class="container">
                                            <li>Prioridad: <strong>${pActividades.prioridad}</strong></li>
                                            <li><a href="#" title="eliminar" class="eliminar"><span class="delete-icon"><i data-id="${pActividades.id}" class="fas fa-trash-alt"></i></span></a></li>
                                        </ul>
                                    </article>`

        eliminar = document.querySelectorAll('.eliminar') //eliminar es cada uno de los botones con la clase "eliminar"

        for(boton of eliminar){ //este "boton" no es el mismo "boton" definido en la linea 6. Con ese forOf lo que hacemos es recorrer cada uno de los botones de eliminar de cada una de las actividades para borrar solo la actividad seleccionada
           
            boton.addEventListener('click', eliminarActividad) //esperamos al evento click y activamos la funcion eliminarActividad cuando eso suceda
    }        
}

// funcion de borrado

var actividadArt = document.getElementsByTagName('article')
        //console.log(actividadArt); reconoce que tengo 5 articulos en el array original

function eliminarActividad(e) {

    var actividadBorrar = e.target.dataset.id; //hay que utilizar la propiedad del dataset porque si solo pidieramos el valor del target donde está el boton (pues estamos enlazando la funcion de eliminar con un boton concreto), solo recibiriamos el <i> del icono (mal), no el id de todo el articulo, por lo que es necesario imprimirle al icono el id del articulo entero para que se relacione cada boton con el id de su articulo. El otro metodo sería remontarnos 5 generaciones con parentNode hasta llegar el article y pedir el id.
    
    for (let i = 0; i< agendaActividades.length; i++){ //recorremos el array para encontrar la actividad que tiene un id coincidente

       if(agendaActividades[i].id == actividadBorrar) //el [i] funciona como contador
        {
            agendaActividades.splice(i, 1); //recorremos el array original y se aplica a partir del articulo coincidente y en la cantidad que elijamos. 1 en este caso.
            pintarActividades(agendaActividades); //pintamos de nuevo los restantes
        }
    }
}
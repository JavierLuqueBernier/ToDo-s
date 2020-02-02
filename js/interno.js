//funcion filtra por prioridad, la funcion recibe una lista total y me devuelve una lista filtrada con las actividades que tengan la prioridad pasado por parametro.
function filtrarXPrioridad(pListaActividades, pPrioridad) {


    var listaFiltrada = new Array();

    var contador = 0;
    for (actividad of pListaActividades) {
        if (actividad.prioridad.toLowerCase() == pPrioridad.toLowerCase()) {

            listaFiltrada[contador] = actividad;
            contador++;
        }
    }

    return listaFiltrada;

}

//fin

//funcion que devuelve una lista de actividades que tengan en su nombre la cadena de caracteres que introducimos en la casilla de busqueda, devolviendo una lista filtrada con lo que cumpla dicha condicion

function filtrarBusqueda(pListaActividades, pPalabraBuscar) {

    var listaFiltrada = new Array();

    var listaFiltrada = pListaActividades.filter( actividad => {
        var nombreActividad = actividad.nombre.toLowerCase();

        return nombreActividad.includes(pPalabraBuscar);
    })

    return listaFiltrada;
}

//fin

//funcion para guardar los datos (por el motivo que sea da problemas con la funcion de pintarActividades en la linea 68, creo otra funcion de pintado a parte llamada "pintar")

function guardarDatos(pNombre, pPrioridad = "URGENTE") {    //he puesto que si no se selecciona prioridad de primeras, sea Urgente por defecto

    let registro = {  //esto es un json
        id: ultimoId,
        nombre: pNombre,
        prioridad: pPrioridad
    }

    agendaActividades.push(registro); //aqui lo guardamos
    pintar(registro); 
    ultimoId++;
}

//fin
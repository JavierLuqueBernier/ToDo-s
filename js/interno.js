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

    var listaFiltrada = new Array(); //creamos uin nuevo array con las actividades que cumplan las condiciones de la casilla de filtro

    var listaFiltrada = pListaActividades.filter( actividad => { //metodo filter de los arrays
        var nombreActividad = actividad.nombre.toLowerCase(); //nombreActividad es igual al nombre de cada actividad en minuscula

        return nombreActividad.includes(pPalabraBuscar); //nos devuelve las actividades que incluyan la palabra a buscar en ese nuevo array
    })

    return listaFiltrada; //hace que filtrarBusqueda sea igual al valor del array listaFiltrada
}

//fin

//funcion para guardar los datos (por el motivo que sea da problemas con la funcion de pintarActividades en la linea 68, creo otra funcion de pintado a parte llamada "pintar") // problema solucionado con las modificacion del dia 07/02

function guardarDatos(pNombre, pPrioridad = "URGENTE") {    //he puesto que si no se selecciona prioridad de primeras, sea Urgente por defecto

    let registro = {  //aqui definimos como debe de ser la estructura en la que se guarden los datos de las nuevas actividades del array
        id: ultimoId,
        nombre: pNombre,
        prioridad: pPrioridad
    }

    agendaActividades.push(registro); //aqui lo guardamos
    pintarActividad(registro); 
    ultimoId++; //aqui estamos diciendo que las nuevas tareas deben ir sumando en 1 sus id a parte de la ultima id disponible que es 6
}

//fin
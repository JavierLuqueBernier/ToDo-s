//funcion filtra por prioridad, la funcion recibe una lista total y me devuelve una lista filtrada con las actividades que cumplan dicho parametro.

function filtrarPrioridad(pListaActividades, pPrioridad) {


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
        var  nombreActividad = actividad.nombre.toLowerCase();

        return nombreActividad.includes(pPalabraBuscar);
    })

    return listaFiltrada;
}
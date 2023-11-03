// Seleccionamos los botones a través de su ID y los almacenamos en variables
var dom_btnLanzarJugador1 = document.getElementById("btnLanzarJugador1");
var dom_btnLanzarJugador2 = document.getElementById("btnLanzarJugador2");
var dom_btnComprobarGanador = document.getElementById("btnComprobarGanador");
var dom_btnIniciarPartida = document.getElementById("btnIniciarPartida");

// Seleccionamos las imágenes de los dados a través de su ID
var dom_imgDado1 = document.getElementById("imgDado1");
var dom_imgDado2 = document.getElementById("imgDado2");

// Inicializamos los puntos de cada jugador a 0
var puntosJugador1 = 0;
var puntosJugador2 = 0;

// Función que maneja el lanzamiento del dado
function f_lanzar(p_evento) {
    // Obtenemos el botón que ha sido pulsado
    var dom_btnPulsado = p_evento.target;
    var idBtnPulsado = dom_btnPulsado.id;

    // Generamos un número aleatorio entre 1 y 6 para simular el lanzamiento del dado
    var puntuacion = Math.floor( Math.random()*6 ) + 1;

    // Creamos el nombre del archivo de imagen basado en el número generado
    var ficheroImagen = `dado_${puntuacion}.png`;

    // Definimos la ruta hacia el archivo de imagen
    // var route = "assets/" + ficheroImagen;
    var route = `./assets/${ficheroImagen}`;

    // Verificamos cuál botón ha sido pulsado y mostramos la imagen correspondiente
    if (idBtnPulsado === "btnLanzarJugador1") {
        dom_imgDado1.src = route;
        puntosJugador1 = puntuacion;

    } else if (idBtnPulsado === "btnLanzarJugador2") {
        dom_imgDado2.src = route;
        puntosJugador2 = puntuacion;
    }

    // Deshabilitamos el botón pulsado
    dom_btnPulsado.disabled = true;

    // Si ambos jugadores han lanzado el dado, habilitamos el botón para comprobar el ganador
    if (puntosJugador1 !== 0 && puntosJugador2 !== 0) {
        dom_btnComprobarGanador.disabled = false;
    }
};

// Función que inicializa la partida
function f_iniciarPartida (p_evento) {
    // Habilitamos los botones de lanzamiento
    dom_btnLanzarJugador1.disabled = false;
    dom_btnLanzarJugador2.disabled = false;

    // Deshabilitamos el botón de comprobar ganador y el de iniciar partida
    dom_btnComprobarGanador.disabled = true;
    dom_btnIniciarPartida.disabled= true;

    // Restablecemos los puntos de los jugadores a 0
    puntosJugador1 = 0;
    puntosJugador2 = 0;

    // Limpiamos las imágenes de los dados
    dom_imgDado1.src = "";
    dom_imgDado2.src = "";
}

// Función que comprueba quién es el ganador
function f_comprobarGanador() {
    var mensaje;

     // Comparamos los puntos de los jugadores para determinar el ganador
    if (puntosJugador1 === puntosJugador2) {
        mensaje = "Empate";
    } else if (puntosJugador1 > puntosJugador2) {
        mensaje = "¡Gana Jugador 1!";
    } else if (puntosJugador1 < puntosJugador2) {
        mensaje = "¡Gana Jugador 2!";
    }

    // Mostramos un mensaje con el resultado
    alert(mensaje);

    // Habilitamos el botón para iniciar una nueva partida
    dom_btnIniciarPartida.disabled = false;
}

// Asignamos las funciones a los eventos onclick de los botones
dom_btnLanzarJugador1.onclick = f_lanzar;
dom_btnLanzarJugador2.onclick = f_lanzar;
dom_btnIniciarPartida.onclick = f_iniciarPartida;
dom_btnComprobarGanador.onclick = f_comprobarGanador;
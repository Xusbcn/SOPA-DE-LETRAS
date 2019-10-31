// Declaramos las variables.

var matriz,
    alfabeto,
    animales,
    anim,
    control,
    contadorplabras,
    pos,
    anadirpalabra,
    arraypalabra,
    celda

alfabeto = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'Ñ',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
]

animales = [
    'MOSCA',
    'PERRO',
    'ARDILLA',
    'ARAÑA',
    'SERPIENTE',
    'SAPO',
    'CONEJO',
    'LEON',
    'TORTUGA',
    'JABALI'
]

flores = [
    'ADELFA',
    'AMAPOLA',
    'BEGONIA',
    'AZALEA',
    'DALIA',
    'GARDENIA',
    'GERANIO',
    'GIRASOL',
    'JAZMIN',
    'NARCISO'
]

colores = [
    'ROJO',
    'AMARILLO',
    'VERDE',
    'AZUL',
    'VIOLETA',
    'NARANJA',
    'NEGRO',
    'BLANCO',
    'CELESTE',
    'ROSADO'
]

anim = []
control = []
contadorplabras = 0
arraypalabra = []
var arrayConcat = []
var Ganar = 0
var segundos = 0
var tiempos
var sumaCeldas
var almacenaCeldas = []
var arrayIDceldas = []

// función que elije cuatro palabras sin que se repitan.

function eligePalabras(array) {
    for (var i = 0; i < 4; i++) {
        anadirpalabra = array[Math.round(Math.random() * 9)]

        if (anim.includes(anadirpalabra)) {
            i = i - 1
        } else {
            anim.push(anadirpalabra)
        }
    }
}



// Descomponer palabras en letras

function descoponePalabra() {
    for (var i = 0; i < anim.length; i++) {
        var spliter = anim[i].split('')

        arraypalabra.push(spliter)
    }
}


// ****************HORIZONTAL*****************************

// función que rellena en horizontal
function printarHorizontal(array, numero, posicion) {
    for (var i = 0; i < array[posicion].length; i++) {
        document.getElementById('td' + numero).innerText = array[posicion][i]
        numero = numero + 1
    }
}



// función que rellena en horizontal inverso
function printarHorizontalInverso(array, numero, posicion) {
    for (var i = 0; i < array[posicion].length; i++) {
        document.getElementById('td' + numero).innerText = array[posicion][i]

        numero = numero - 1
    }
}


// ****************VERTICAL*****************************

// funcion rellenar vertical de arriba a abajo

function verticalHaciaAbajo(array, numero, posicion) {
    for (var i = 0; i < array[posicion].length; i++) {
        document.getElementById('td' + numero).innerText = array[posicion][i]

        numero = numero + 10
    }
}



// funcion rellenar en vertical inverso

function vertiaclInverso(array, numero, posicion) {
    for (var i = 0; i < array[posicion].length; i++) {
        document.getElementById('td' + numero).innerText = array[posicion][i]

        numero = numero - 10
    }
}

// ****************DIAGONAL*****************************

// rellenar diagonal abajo derecha

function diagonalAbajoDerecha(array, numero, posicion) {
    for (var i = 0; i < array[posicion].length; i++) {
        document.getElementById('td' + numero).innerText = array[posicion][i]

        numero = numero + 11
    }
}

// rellenar diagonal abajo izquierda

function diagonalAbajoIzquierda(array, numero, posicion) {
    for (var i = 0; i < array[posicion].length; i++) {
        document.getElementById('td' + numero).innerText = array[posicion][i]

        numero = numero + 9
    }
}



// rellenar diagonal inverso izquierdo

function diagonalInversoIzquierda(array, numero, posicion) {
    for (var i = 0; i < array[posicion].length; i++) {
        document.getElementById('td' + numero).innerText = array[posicion][i]

        numero = numero - 11
    }
}

// rellenar diagonal inverso derecha

function diagonalInversoDerecha(array, numero, posicion) {
    for (var i = 0; i < array[posicion].length; i++) {
        document.getElementById('td' + numero).innerText = array[posicion][i]

        numero = numero - 9
    }
}

// rellenar con letras si está vacio

function rellenaTableroVacio() {
    for (var i = 0; i < 100; i++) {
        if (document.getElementById('td' + i).innerText == '') {
            document.getElementById('td' + i).innerText =
                alfabeto[Math.floor(Math.random() * alfabeto.length)]
        }
    }

}
// función que cambia el color al clickar la celda
function cambiarColortd(celda) {
    if (document.getElementById('td' + celda).innerText != '') {
        document.getElementById('td' + celda).style.backgroundColor = '#ff000038'
    }

}


//funcion que cronometra el tiempo
function contadorTiempo() {
    tiempo = document.getElementById('reloj')
    window.setInterval(function() {
        tiempo.innerHTML = segundos
        segundos++
    }, 1000)
}

// función que para el tiempo.
function paraTiempo() {
    clearInterval(segundos)
    document.getElementById('reloj').style.display = 'none'
    document.getElementById('labelReloj').style.display = 'none'

    document.getElementById('tiempo').innerHTML = segundos
}

// funcion que muestra el número de palabras acertadas

function palabrasAcertadas(valor) {
    document.getElementById('palabrasEncontradas').innerHTML = valor
}

function partidaGanada(valor) {
    if (valor == 4) {
        document.getElementById('botonReiniciar').style.display = 'block'

        // console.log('funciona')
        paraTiempo()
        deshabilitarCasillas()
    }
}

// funcion que deshabilita las casillas de las palabras encontradas.
function deshabilitarCasillas() {
    for (var i = 0; i < 100; i++) {
        if (document.getElementById('td' + i).style.backgroundColor != '#0200ff8f') {
            document.getElementById('td' + i).onclick = false
        }
    }
}




function concatenarPalabra(celda) {
    almacenaCeldas.push(celda)
    sumaCeldas = almacenaCeldas[almacenaCeldas.length - 2]
    var palabrConcatenada;
    cambiarColortd(celda)

    arrayConcat.push(document.getElementById('td' + celda).innerText)
    palabrConcatenada = arrayConcat.join('')

    arrayIDceldas.push('td' + celda)

    console.log(almacenaCeldas)

    // borrar las que no siguen el orden

    if (
        almacenaCeldas[1] != almacenaCeldas[0] + 1 &&
        almacenaCeldas[1] != almacenaCeldas[0] - 1 &&
        almacenaCeldas[1] != almacenaCeldas[0] + 10 &&
        almacenaCeldas[1] != almacenaCeldas[0] - 10 &&
        almacenaCeldas[1] != almacenaCeldas[0] + 9 &&
        almacenaCeldas[1] != almacenaCeldas[0] - 9 &&
        almacenaCeldas[1] != almacenaCeldas[0] + 11 &&
        almacenaCeldas[1] != almacenaCeldas[0] - 11
    ) {
        for (var i = 0; i < almacenaCeldas.length - 1; i++) {
            document.getElementById(arrayIDceldas[i]).style.backgroundColor = 'white'

            arrayIDceldas = []
            arrayIDceldas[0] = 'td' + celda
            almacenaCeldas = []
            almacenaCeldas[0] = celda
            arrayConcat = []
            arrayConcat[0] = document.getElementById('td' + celda).innerText
            palabrConcatenada
            palabrConcatenada = arrayConcat[0]
        }
    }

    // Dejar de marcar horizontales
    else if (almacenaCeldas[1] - almacenaCeldas[0] == 1) {
        if (celda != sumaCeldas + 1 && celda != almacenaCeldas[0]) {
            for (var i = 0; i < almacenaCeldas.length - 1; i++) {
                document.getElementById(arrayIDceldas[i]).style.backgroundColor =
                    'white'
            }
            arrayIDceldas = []
            arrayIDceldas[0] = 'td' + celda
            almacenaCeldas = []
            almacenaCeldas[0] = celda
            arrayConcat = []
            arrayConcat[0] = document.getElementById('td' + celda).innerText
            palabrConcatenada
            palabrConcatenada = arrayConcat[0]
        }
    }
    // Dejar de marcar verticales hacia abajo
    else if (almacenaCeldas[1] - almacenaCeldas[0] == 10) {
        if (celda != sumaCeldas + 10 && celda != almacenaCeldas[0]) {
            for (var i = 0; i < almacenaCeldas.length - 1; i++) {
                document.getElementById(arrayIDceldas[i]).style.backgroundColor =
                    'white'
            }
            arrayIDceldas = []
            arrayIDceldas[0] = 'td' + celda
            almacenaCeldas = []
            almacenaCeldas[0] = celda
            arrayConcat = []
            arrayConcat[0] = document.getElementById('td' + celda).innerText
            palabrConcatenada
            palabrConcatenada = arrayConcat[0]
        }
    }

    // Dejar de marcar verticales hacia arriba
    else if (almacenaCeldas[0] - almacenaCeldas[1] == 10) {
        if (celda != sumaCeldas - 10 && celda != almacenaCeldas[0]) {
            for (var i = 0; i < almacenaCeldas.length - 1; i++) {
                document.getElementById(arrayIDceldas[i]).style.backgroundColor =
                    'white'
            }
            arrayIDceldas = []
            arrayIDceldas[0] = 'td' + celda
            almacenaCeldas = []
            almacenaCeldas[0] = celda
            arrayConcat = []
            arrayConcat[0] = document.getElementById('td' + celda).innerText
            palabrConcatenada
            palabrConcatenada = arrayConcat[0]
        }
    }

    // Dejar de marcar horizontal inversa
    else if (almacenaCeldas[0] - almacenaCeldas[1] == 1) {
        if (celda != sumaCeldas - 1 && celda != almacenaCeldas[0]) {
            for (var i = 0; i < almacenaCeldas.length - 1; i++) {
                document.getElementById(arrayIDceldas[i]).style.backgroundColor =
                    'white'
            }
            arrayIDceldas = []
            arrayIDceldas[0] = 'td' + celda
            almacenaCeldas = []
            almacenaCeldas[0] = celda
            arrayConcat = []
            arrayConcat[0] = document.getElementById('td' + celda).innerText
            palabrConcatenada
            palabrConcatenada = arrayConcat[0]
        }
    }

    // Dejar de marcar diagonal derecha hacia abajo
    else if (almacenaCeldas[1] - almacenaCeldas[0] == 11) {
        if (celda != sumaCeldas + 11 && celda != almacenaCeldas[0]) {
            for (var i = 0; i < almacenaCeldas.length - 1; i++) {
                document.getElementById(arrayIDceldas[i]).style.backgroundColor =
                    'white'
            }
            arrayIDceldas = []
            arrayIDceldas[0] = 'td' + celda
            almacenaCeldas = []
            almacenaCeldas[0] = celda
            arrayConcat = []
            arrayConcat[0] = document.getElementById('td' + celda).innerText
            palabrConcatenada
            palabrConcatenada = arrayConcat[0]
        }
    }

    // Dejar de marcar diagonal derecha inversa
    else if (almacenaCeldas[0] - almacenaCeldas[1] == 11) {
        if (celda != sumaCeldas - 11 && celda != almacenaCeldas[0]) {
            for (var i = 0; i < almacenaCeldas.length - 1; i++) {
                document.getElementById(arrayIDceldas[i]).style.backgroundColor =
                    'white'
            }
            arrayIDceldas = []
            arrayIDceldas[0] = 'td' + celda
            almacenaCeldas = []
            almacenaCeldas[0] = celda
            arrayConcat = []
            arrayConcat[0] = document.getElementById('td' + celda).innerText
            palabrConcatenada
            palabrConcatenada = arrayConcat[0]
        }
    }

    // Dejar de marcar diagonal izquierda hacia abajo
    else if (almacenaCeldas[1] - almacenaCeldas[0] == 9) {
        if (celda != sumaCeldas + 9 && celda != almacenaCeldas[0]) {
            for (var i = 0; i < almacenaCeldas.length - 1; i++) {
                document.getElementById(arrayIDceldas[i]).style.backgroundColor =
                    'white'
            }
            arrayIDceldas = []
            arrayIDceldas[0] = 'td' + celda
            almacenaCeldas = []
            almacenaCeldas[0] = celda
            arrayConcat = []
            arrayConcat[0] = document.getElementById('td' + celda).innerText
            palabrConcatenada
            palabrConcatenada = arrayConcat[0]
        }
    }

    // Dejar de marcar diagonal izquierda  inversa
    else if (almacenaCeldas[0] - almacenaCeldas[1] == 9) {
        if (celda != sumaCeldas - 9 && celda != almacenaCeldas[0]) {
            for (var i = 0; i < almacenaCeldas.length - 1; i++) {
                document.getElementById(arrayIDceldas[i]).style.backgroundColor =
                    'white'
            }
            arrayIDceldas = []
            arrayIDceldas[0] = 'td' + celda
            almacenaCeldas = []
            almacenaCeldas[0] = celda
            arrayConcat = []
            arrayConcat[0] = document.getElementById('td' + celda).innerText
            palabrConcatenada
            palabrConcatenada = arrayConcat[0]
        }
    }


    //Comporbar si la palabra encontrada está dentro de las cuatro.
    if (anim.includes(palabrConcatenada)) {
        for (var i = 0; i < palabrConcatenada.length; i++) {
            document.getElementById(arrayIDceldas[i]).onclick = false
            document.getElementById(arrayIDceldas[i]).style.backgroundColor = '#0200ff8f'
        }
        arrayConcat = []
        palabrConcatenada
        arrayIDceldas = []
        almacenaCeldas = []

        Ganar = Ganar + 1

        palabrasAcertadas(Ganar)
        partidaGanada(Ganar)
    }

    // console.log(palabrConcatenada)
}

// ***************************PRINTAR PALABRA EN DIV*****************************

function ponerPalabrasEnTablero(array) {
    var aleatorio = Math.floor(Math.random() * 4)

    if (aleatorio == 0) {
        printarHorizontal(arraypalabra, 10, 3)
        printarHorizontal(arraypalabra, 40, 1)
        printarHorizontalInverso(arraypalabra, 59, 0)
        printarHorizontalInverso(arraypalabra, 79, 2)
    } else if (aleatorio == 1) {
        verticalHaciaAbajo(arraypalabra, 13, 0)
        verticalHaciaAbajo(arraypalabra, 18, 1)
        vertiaclInverso(arraypalabra, 99, 2)
        vertiaclInverso(arraypalabra, 90, 3)
    } else if (aleatorio == 2) {
        verticalHaciaAbajo(arraypalabra, 0, 0)
        printarHorizontalInverso(arraypalabra, 9, 1)
        printarHorizontal(arraypalabra, 90, 2)
        diagonalInversoDerecha(arraypalabra, 81, 3)
    } else if (aleatorio == 3) {
        diagonalAbajoDerecha(arraypalabra, 11, 0)
        diagonalAbajoDerecha(arraypalabra, 10, 1)
        diagonalInversoIzquierda(arraypalabra, 89, 2)
        printarHorizontal(arraypalabra, 1, 3)
    }
}

//* ********************* FUNCION QUE HABILITA/DESHABILITA BOTON*************************

function deshabilitarBoton() {
    if (document.getElementById('seleccionCategoria').selectedIndex == 0) {
        document.getElementById('buttonSelect').disabled = true
    }
}
//* *************FUNCION PRINTA SELECCION EN TABLERO***************************



function seleccionaCategoria() {
    var seleccionID = document.getElementById('seleccionCategoria')
    seleccionID = seleccionID.options[seleccionID.selectedIndex].value



    if (seleccionID == 1) {
        eligePalabras(animales)
        descoponePalabra()
        rellenaTableroVacio()
        ponerPalabrasEnTablero(arraypalabra)
        document.getElementById('buttonSelect').disabled = true
        contadorTiempo()
        document.getElementById('palabrasEncontrar').innerHTML = '4'
    } else if (seleccionID == 2) {
        eligePalabras(colores)
        descoponePalabra()
        rellenaTableroVacio()
        ponerPalabrasEnTablero(arraypalabra)

        document.getElementById('buttonSelect').disabled = true
        contadorTiempo()
        document.getElementById('palabrasEncontrar').innerHTML = '4'
    } else if (seleccionID == 3) {
        eligePalabras(flores)
        descoponePalabra()
        rellenaTableroVacio()
        ponerPalabrasEnTablero(arraypalabra)
        document.getElementById('buttonSelect').disabled = true
        contadorTiempo()
        document.getElementById('palabrasEncontrar').innerHTML = '4'
    }
}
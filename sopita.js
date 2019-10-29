// Declaramos las variables.

var matriz,
  alfabeto,
  animal,
  planta,
  j,
  m,
  cosa,
  inv,
  animales,
  anim,
  control,
  contadorplabras,
  pos,
  anadirpalabra,
  arraypalabra,
  invH,
  Diagonal,
  Diagonalinverso,
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
animal = ['p', 'e', 'r', 'o']
planta = ['f', 'l', 'o', 'r']
cosa = ['l', 'a', 'g', 'o']
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
anim = []
control = []
contadorplabras = 0
arraypalabra = []
j = 0
m = 2
inv = 90
invH = 9
Diagonal = 0
Diagonalinverso = 89
var arrayConcat = []
var palabrConcatenada = ''
var ID = []

// función que elije cuatro palabras sin qu ese repitan.

for (var i = 0; i < 4; i++) {
  anadirpalabra = animales[Math.round(Math.random() * 9)]

  if (anim.includes(anadirpalabra)) {
    i = i - 1
  } else {
    anim.push(anadirpalabra)
  }
}

// añade las palabras en el div
for (var i = 0; i < anim.length; i++) {
  console.log(anim[i])

  document.getElementById('lista' + i).innerText = anim[i]
}

// Descomponer palabras en letras

for (var i = 0; i < anim.length; i++) {
  var spliter = anim[i].split('')

  arraypalabra.push(spliter)
}
// console.log(arraypalabra);

// *************RRellenar**********************

// Printar palabra en matriz.
// for (var i = 0; i < arraypalabra[0].length; i++) {
//   document.getElementById('td' + m).innerText = arraypalabra[0][i];

//   console.log(arraypalabra[0][i])

//   m = m + 4
// }

// ****************HORIZONTAL*****************************

// función que rellena en horizontal
function printarHorizontal (array, numero, posicion) {
  for (var i = 0; i < array[posicion].length; i++) {
    document.getElementById('td' + numero).innerText = array[posicion][i]
    numero = numero + 1
  }
}

// printarHorizontal(arraypalabra,0)

// función que rellena en horizontal inverso
function printarHorizontalInverso (array, numero, posicion) {
  for (var i = 0; i < array[posicion].length; i++) {
    document.getElementById('td' + numero).innerText = array[posicion][i]

    numero = numero - 1
  }
}

// printarHorizontalInverso(arraypalabra,99)

// ****************VERTICAL*****************************

// funcion rellenar vertical de arriba a abajo

function verticalHaciaAbajo (array, numero, posicion) {
  for (var i = 0; i < array[posicion].length; i++) {
    document.getElementById('td' + numero).innerText = array[posicion][i]

    numero = numero + 10
  }
}

// verticalHaciaAbajo(arraypalabra, 10)

// funcion rellenar en vertical inverso

function vertiaclInverso (array, numero, posicion) {
  for (var i = 0; i < array[posicion].length; i++) {
    document.getElementById('td' + numero).innerText = array[posicion][i]

    numero = numero - 10
  }
}

// ****************DIAGONAL*****************************

// rellenar diagonal abajo derecha

function diagonalAbajoDerecha (array, numero, posicion) {
  for (var i = 0; i < array[posicion].length; i++) {
    document.getElementById('td' + numero).innerText = array[posicion][i]

    numero = numero + 11
  }
}

// rellenar diagonal abajo izquierda

function diagonalAbajoIzquierda (array, numero, posicion) {
  for (var i = 0; i < array[posicion].length; i++) {
    document.getElementById('td' + numero).innerText = array[posicion][i]

    numero = numero + 9
  }
}

// diagonalAbajoIzquierda(arraypalabra,9)

// rellenar diagonal inverso izquierdo

function diagonalInversoIzquierda (array, numero, posicion) {
  for (var i = 0; i < array[posicion].length; i++) {
    document.getElementById('td' + numero).innerText = array[posicion][i]

    numero = numero - 11
  }
}

// rellenar diagonal inverso derecha

function diagonalInversoDerecha (array, numero, posicion) {
  for (var i = 0; i < array[posicion].length; i++) {
    document.getElementById('td' + numero).innerText = array[posicion][i]

    numero = numero - 9
  }
}

// rellenar con letras si está vacio

for (var i = 0; i < 100; i++) {
  if (document.getElementById('td' + i).innerText == '') {
    document.getElementById('td' + i).innerText =
      alfabeto[Math.floor(Math.random() * alfabeto.length)]
  }

  // console.log(alfabeto.length);
}

function cambiarColortd (celda) {
  document.getElementById('td' + celda).style.backgroundColor = 'red'
}

function desactivarOnclick (celda) {
  if (document.getElementById('td' + celda).style.backgroundColor == 'red') {
    document.getElementById('td' + celda).onclick = false
    document.getElementById('td' + celda).style.backgroundColor = 'blue'
  }
}

// function obtenerId (celda) {
//   ID = document.getElementsByClassName('prueba')[celda].id
//   if (document.getElementById(ID).style.backgroundColor == 'red') {
//     document.getElementById(ID).onclick = false
//     document.getElementById(ID).style.backgroundColor = 'blue'
//   }
// }

function concatenarPalabra (celda) {
  cambiarColortd(celda)

  // obtenerId(celda);

  arrayConcat.push(document.getElementById('td' + celda).innerText)

  ID.push(document.getElementsByClassName('clickado')[celda].id)

  palabrConcatenada = arrayConcat.join('')

  if (anim.includes(palabrConcatenada)) {
    for (var i = 0; i < arrayConcat.length; i++) {
      document.getElementById(ID[i]).onclick = false
      document.getElementById(ID[i]).style.backgroundColor = 'blue'
    }
  }

  console.log(palabrConcatenada)
}

// ***************************PRINTAR PALABRA EN DIV*****************************

function ponerPalabrasEnTablero (array) {
  var aleatorio = Math.floor(Math.random() * 2)

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
  }
}

ponerPalabrasEnTablero(arraypalabra)

// var aleatorio = Math.floor(Math.random() * 4)

// if (aleatorio == 0) {
//   printarHorizontal()

//   printarHorizontalInverso()

//   diagonalAbajo()
// }

// printarHorizontal(arraypalabra,0)
// printarHorizontalInverso(arraypalabra,99)
// verticalHaciaAbajo(arraypalabra,10)
// vertiaclInverso()
// diagonalAbajoDerecha()
// diagonalAbajoIzquierda(arraypalabra,9)
// diagonalInversoIzquierda()
// diagonalInversoDerecha()

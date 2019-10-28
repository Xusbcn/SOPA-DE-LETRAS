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
function printarHorizontal (array) {
  for (var i = 0; i < array[0].length; i++) {
    if(document.getElementById('td' + i).innerText !=''){
      if(document.getElementById('td' + i).innerText==array[0][i]){
        document.getElementById('td' + i).innerText = array[0][i]
      }
      }else{
        document.getElementById('td' + i).innerText = array[0][i]

      }
    }
    
  
}

printarHorizontal(arraypalabra)

// función que rellena en horizontal inverso
// function printarHorizontalInverso (array) {
//   for (var i = 0; i < array[0].length; i++) {
//     document.getElementById('td' + invH).innerText = array[0][i]

//     invH = invH - 1
//   }
// }

// ****************VERTICAL*****************************

// funcion rellenar vertical de arriba a abajo

function verticalHaciaAbajo (array) {
  for (var i = 0; i < array[1].length; i++) {
    document.getElementById('td' + m).innerText = array[1][i]

    m = m + 10
  }
}

verticalHaciaAbajo(arraypalabra)

// funcion rellenar en vertical inverso

// function vertiaclInverso (array) {
//   for (var i = 0; i < array[3].length; i++) {
//     document.getElementById('td' + inv).innerText = array[3][i]

//     inv = inv - 10
//   }
// }

// ****************DIAGONAL*****************************

// rellenar diagonal abajo

// function diagonalAbajo (array) {
//   for (var i = 0; i < array.length; i++) {
//     document.getElementById('td' + Diagonal).innerText = array[2][i]

//     Diagonal = Diagonal + 11
//   }
// }

// rellenar diagonal inverso

// function diagonalInverso (array) {
//   for (var i = 0; i < array[1].length; i++) {
//     document.getElementById('td' + Diagonalinverso).innerText = array[1][i]

//     Diagonalinverso = Diagonalinverso - 11
//   }
// }

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

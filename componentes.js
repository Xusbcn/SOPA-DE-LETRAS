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
j = 0
m = 2
inv = 90
invH = 9
Diagonal = 0
Diagonalinverso = 89
var arrayConcat = []

var ID = []

var Ganar = 0
var segundos = 0
var tiempos

var sumaCeldas
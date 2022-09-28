//funcioN
//pedimos los datos a la persona.(nombre - edad)
// indicar si la pérsona es mayor de 18 puede pasar
// si la persona llego antes de las 2 no paga entrada
// si la persona llego despues de las 2 paga en pesos la suma de las letras de su nombre + su edad

function entrada(nombre1, edad1, horario1) {
  if (edad1 >= 18 && horario1 >= 2) {
    document.write(`${nombre1} podes pasar gratarola y tomarte algo <br>`);
  } else if (edad1 >= 18 && horario1 <= 2) {
    document.write(
      `${nombre1} tenes que pagar ${nombre1.length + edad1} por la entrada <br>`
    );
  } else {
    document.write(`${nombre1} no podes pasar <br>`);
  }
}

entrada(
  prompt("Ingrese su nombre: "),
  parseInt(prompt("Ingrese su edad: ")),
  parseInt(prompt("Ingrese su horario de llegada: "))
);

// reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "Sebastian";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 3;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:

  return str;
}

let string1 = devolverString(prompt("Ingresa un texto corto: "));
document.write(`El texto que ingresaste es: ${string1} <br>`);

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:

  let resultadoSuma = x + y;

  return resultadoSuma;
}

let sumar = suma(
  parseInt(prompt("Ingresa el primer numero de la suma: ")),
  parseInt(prompt("Ingresa el segundo numero de la suma: "))
);
document.write(`La suma es: ${sumar} <br>`);

function resta(x, y) {
  // Resta "x" de "y" y devuelve el valor
  // Tu código:
  let resultadoResta = x - y;
  return resultadoResta;
}

let restar = resta(20, 10);
document.write(`La resta es: ${restar} <br>`);

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  let resultadoMulti = x * y;
  return resultadoMulti;
}

let multiplicar = multiplica(5, 9);
document.write(`La multiplicacion es: ${multiplicar} <br>`);

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  let resultadoDivision;

  if (y === 0) {
    resultadoDivision = true;
  } else {
    resultadoDivision = x / y;
  }

  return resultadoDivision;
}

let dividir = divide(25, 0);

if (dividir == true) {
  document.write("No se puede dividir por 0 <br>");
} else {
  document.write(`La division es: ${dividir} <br>`);
}

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:utilizar if y else
  let respuesta;

  if (x === y) {
    respuesta = true;
  } else {
    respuesta = false;
  }

  return respuesta;
}

let igualdad = sonIguales(5, "5");

if (igualdad == true) {
  document.write(`Los numeros son iguales <br>`);
} else {
  document.write(`Los numeros son distintos <br>`);
}

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  let respuesta2;

  if (str1.length === str2.length) {
    respuesta2 = true;
  } else {
    respuesta2 = false;
  }

  return respuesta2;
}

let mismaLong = tienenMismaLongitud("Laura", "laura");

if (mismaLong == true) {
  document.write(`Los strings son iguales <br>`);
} else {
  document.write(`Los strings son distintos <br>`);
}

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  let respuesta3;

  if (num < 90) {
    respuesta3 = true;
  } else {
    respuesta3 = false;
  }

  return respuesta3;
}

let menorNoventa = menosQueNoventa(93);

if (menorNoventa == true) {
  document.write(`El numero es menor que 90 <br>`);
} else {
  document.write(`El numero es mayor que 90 <br>`);
}

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  let respuesta4;

  if (num > 50) {
    respuesta4 = true;
  } else {
    respuesta4 = false;
  }
  return respuesta4;
}

let mayorCincuenta = mayorQueCincuenta(45);

if (mayorCincuenta == true) {
  document.write(`El numero es mayor que 50 <br>`);
} else {
  document.write(`El numero es menor que 50 <br>`);
}

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  let resultadoResto = x % y;

  return resultadoResto;
}

let resto = obtenerResto(20, 2);
document.write(`El resto de la division es: ${resto} <br>`);

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  let respuesta5;

  if (num % 2 == 0) {
    respuesta5 = true;
  } else {
    respuesta5 = false;
  }
  return respuesta5;
}

let parONo = esPar(402);

if (parONo == true) {
  document.write(`El numero es par <br>`);
} else {
  document.write(`El numero es impar <br>`);
}

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  let respuesta6;

  if (num % 2 != 0) {
    respuesta6 = true;
  } else {
    respuesta6 = false;
  }

  return respuesta6;
}

let imparONo = esImpar(3);

if (imparONo == true) {
  document.write(`El numero es impar <br>`);
} else {
  document.write(`El numero es par <br>`);
}

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  let resultadoCuadrado = Math.pow(num, 2);

  return resultadoCuadrado;
}

let cuadrado = elevarAlCuadrado(2);
document.write(`El numero elevado al cuadrado es: ${cuadrado} <br>`);

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  let resultadoCubo = Math.pow(num, 3);

  return resultadoCubo;
}

let cubo = elevarAlCubo(3);
document.write(`El numero elevado al cubo es: ${cubo} <br>`);

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  let resultadoExponente = Math.pow(num, exponent);

  return resultadoExponente;
}

let exponente = elevar(2, 18);
document.write(`El numero elevado a la potencia es: ${exponente} <br>`);

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  let resultadoRedondear = Math.floor(num);

  return resultadoRedondear;
}

let redondear = redondearNumero(5.45);
document.write(
  `El numero redondeado al entero mas proximo es: ${redondear} <br>`
);

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  let resultadoRedonHaciaArriba = Math.ceil(num);

  return resultadoRedonHaciaArriba;
}

let redondeoHaciaArriba = redondearHaciaArriba(5.95);
document.write(
  `El numero redondeado hacia arriba es: ${redondeoHaciaArriba} <br>`
);

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  let resultadoRandom = Math.random();

  return resultadoRandom;
}

let random = numeroRandom();
document.write(`Numero al azar: ${random} <br>`);

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo.
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  let respuesta7;

  if (numero > 0) {
    respuesta7 = `El numero es positivo <br>`;
  } else if (numero < 0) {
    respuesta7 = `El numero es negativo <br>`;
  } else {
    respuesta7 = false;
  }
  return respuesta7;
}
let positivo = esPositivo(-50);

if (positivo == false) {
  positivo = `El numero es cero <br>`;
  document.write(`${positivo}`);
} else {
  document.write(`${positivo}`);
}

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:

  let nuevaCadena = `${str}!`;

  return nuevaCadena;
}

let cadenaMod = agregarSimboloExclamacion(
  prompt("Ingresa una cadena de caracteres: ")
);
document.write(`La nueva cadena es: ${cadenaMod}<br>`);

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Bruce Wayne" -> "Bruce Wayne"
  // Tu código:

  let nombreYApellido = `${nombre} ${apellido}`;

  return nombreYApellido;
}

let nombYApeComb = combinarNombres(
  prompt("Ingresa tu nombre: "),
  prompt("Ingresa tu apellido: ")
);
document.write(`Soy, ${nombYApeComb}<br>`);

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  let hola = `Hola`;
  let saludo = hola.concat(` `, `${nombre}!`);

  return saludo;
}

let saludar = obtenerSaludo(
  prompt("Esta pagina desea saludarte, ingresa tu nombre: ")
);
document.write(`${saludar} <br>`);

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un cuadrado teniendo su altura y ancho
  // Tu código:
  let areaRectangulo = alto * ancho;

  return areaRectangulo;
}

let areaRec = obtenerAreaRectangulo(
  prompt("Ingresa el alto del rectangulo: "),
  prompt("Ingresa el ancho del rectangulo: ")
);
document.write(`El area del cuadrado es: ${areaRec}<br>`);

function retornarPerimetro(lado) {
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  let perimetroCuad = lado * 4;
  return perimetroCuad;
}

let perCuad = retornarPerimetro(2);
document.write(`El perimetro del cuadrado es: ${perCuad}<br>`);

function areaDelTriangulo(base, altura) {
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
  let areaTriangulo = (base * altura) / 2;

  return areaTriangulo;
}

let areaTri = areaDelTriangulo(10, 8);
document.write(`El area del triangulo es: ${areaTri}<br>`);

function deEuroAdolar(euro) {
  //Supongamos que 1 euro equivale a 1.20 dólares.
  //Escribe un programa que pida al usuario un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  let euroDolar = euro * 1.2;
  return euroDolar;
}

let eurADol = deEuroAdolar(
  prompt("Ingrese un valor en euros que quiera convertir a dolares: ")
);
document.write(`El valor de euro/s convertido a dolar/es es: ${eurADol} <br>`);

function esVocal(letra) {
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
  //Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  //si ingresa una consonante muestre en pantalla dato incorrecto
  //Escribe tu código aquí

  if (
    letra.length >= 1 &&
    (letra == `a` ||
      letra == `A` ||
      letra == `e` ||
      letra == `E` ||
      letra == `i` ||
      letra == `I` ||
      letra == `o` ||
      letra == `O` ||
      letra == `u` ||
      letra == `U`)
  ) {
    document.write(`La vocal ingresada es: ${letra}`);
  } else {
    document.write(`Dato incorrecto`);
  }
}

esVocal(prompt("Ingrese una vocal: "));

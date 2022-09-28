/*function obtenerMayor(x, y) {
  // "x" e "y" son números enteros .
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:

  if (x < y) {
  console.log(`${y} es mayor que ${x}`);
}else if (x > y) {
  console.log(`${x} es mayor que ${y}`);
}else{
  console.log(`Ingresaste: ${x}`);
}

}*/

const obtenerMayor = (x, y) => {
  if (x < y) {
    console.log(`${y} es mayor que ${x}`);
  } else if (x > y) {
    console.log(`${x} es mayor que ${y}`);
  } else {
    console.log(`Ingresaste: ${x}`);
  }
};

obtenerMayor(3, 6);

/*function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
  
  if (edad >= 18) {
    console.log(`Allowed`);
  }else{
    console.log(`Not allowed`);
  }

}*/
const mayoriaDeEdad = (edad) => {
  /*if (edad >= 18) {
    console.log(`Allowed`);
  }else{
    console.log(`Not allowed`);
  }*/

  edad >= 18 ? console.log(`Allowed`) : console.log(`Not allowed`);
};

mayoriaDeEdad(14);

/*function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.

  if (status == 1) {
    console.log(`Online`);
  }else if(status == 2){
    console.log(`Away`);
}else{
  console.log(`Offline`);
}

}*/

const conection = (status) => {
  /*if (status == 1) {
    console.log(`Online`);
  }else if(status == 2){
    console.log(`Away`);
}else{
  console.log(`Offline`);
}*/

  status == 1
    ? console.log(`Online`)
    : status == 2
    ? console.log(`Away`)
    : console.log(`Offline`);
};

conection(5);

/*function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:

  switch (idioma) {
    case "aleman":

    console.log(`Guten Tag!`);
      
      break;

      case "mandarin":

       console.log(`Ni Hao!`);

       break;

        case "ingles":
          console.log(`Hello!`);

          break;
  
    default:
      console.log(`Hola!`);
      break;
  }

}*/

const saludo = (idioma) => {
  switch (idioma) {
    case "aleman":
      console.log(`Guten Tag!`);

      break;

    case "mandarin":
      console.log(`Ni Hao!`);

      break;

    case "ingles":
      console.log(`Hello!`);

      break;

    default:
      console.log(`Hola!`);
      break;
  }
};

saludo("mandarin");

/*function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuelve --> "This is blue"
  //En caso que el color recibido sea "red", devuelve --> "This is red"
  //En caso que el color recibido sea "green", devuelve --> "This is green"
  //En caso que el color recibido sea "orange", devuelve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.

  switch (color) {
    case "blue":
      console.log(`This is blue`);

      break;

    case "red":
      console.log(`This is red`);

      break;

    case "green":
      console.log(`This is green`);

      break;

      case "orange":
      console.log(`This is orange`);

      break;

    default:
      console.log(`Color not found`);
      break;
  }

}*/

const colors = (color) => {
  switch (color) {
    case "blue":
      console.log(`This is blue`);

      break;

    case "red":
      console.log(`This is red`);

      break;

    case "green":
      console.log(`This is green`);

      break;

    case "orange":
      console.log(`This is orange`);

      break;

    default:
      console.log(`Color not found`);
      break;
  }
};

colors(`red`);

/*function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:

  if (numero == 10 || numero == 5) {
    console.log(true);
  }else{
    console.log(false);
  }

}*/

const esDiezOCinco = (numero) => {
  /*if (numero == 10 || numero == 5) {
    console.log(true);
  }else{
    console.log(false);
  }*/

  numero == 10 || numero == 5 ? console.log(true) : console.log(false);
};

esDiezOCinco(3);

/*function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:

  if (numero < 50 && numero > 20) {
    console.log(true);
  }else{
    console.log(false);
  }

}*/

const estaEnRango = (numero) => {
  /*if (numero < 50 && numero > 20) {
    console.log(true);
  }else{
    console.log(false);
  }*/
  numero < 50 && numero > 20 ? console.log(true) : console.log(false);
};

estaEnRango(18);

/*function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
  if (Number.isInteger(numero)) {
    console.log(true)
  }else{
    console.log(false);
  }
    
}*/

const esEntero = numero =>{
  if (Number.isInteger(numero)) {
    console.log(true)
  }else{
    console.log(false);
  }
}

esEntero(2.3);

/*function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  
  if (numero % 3 === 0 && numero % 5 === 0) {
    console.log(`fizzbuzz`);
  } else if (numero % 3 === 0) {
    console.log(`fizz`);
  } else if (numero % 5 === 0) {
    console.log(`buzz`);
  }else{
    console.log(`${numero}`);
  }
}*/

const fizzBuzz = (numero) => {
  /* if (numero % 3 === 0 && numero % 5 === 0) {
    console.log(`fizzbuzz`);
  } else if (numero % 3 === 0) {
    console.log(`fizz`);
  } else if (numero % 5 === 0) {
    console.log(`buzz`);
  }else{
    console.log(`${numero}`);
  }*/
  numero % 3 === 0 && numero % 5 === 0
    ? console.log(`fizzbuzz`)
    : numero % 3 === 0
    ? console.log(`fizz`)
    : numero % 5 === 0
    ? console.log(`buzz`)
    : console.log(`${numero}`);
};

fizzBuzz(30);

/*function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos.
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false.

  if ((num1 > num2) && (num1 > num3) && (num1 > 0)) {
    console.log(`Numero 1 es mayor y positivo`);
  }else if (num1 < 0 || num2 < 0 || num3 < 0) {
    console.log(`Hay negativos`);
  }else if (num3 > num1 && num3 > num2) {
    num3++
    console.log(`${num3}`);
  }else if (num1 == 0 || num2 == 0 || num3 == 0) {
    console.log(`Error`);
  }else{
    console.log(false);
  }


}*/

const operadoresLogicos = (num1, num2, num3) => {
  if (num1 > num2 && num1 > num3 && num1 > 0) {
    console.log(`Numero 1 es mayor y positivo`);
  } else if (num1 < 0 || num2 < 0 || num3 < 0) {
    console.log(`Hay negativos`);
  } else if (num3 > num1 && num3 > num2) {
    num3++;
    console.log(`${num3}`);
  } else if (num1 == 0 || num2 == 0 || num3 == 0) {
    console.log(`Error`);
  } else {
    console.log(false);
  }
};

operadoresLogicos(1, 5, 7);

/*function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos

  let primo = true;

  if (numero === 0 || numero === 1) {
    console.log(`Los numeros 0 y 1 no son considerados primos`);
  } else {
    for (let i = 2; i < numero; i++) {
      if (numero % i == 0) primo = false;
    }
  }
  if (primo == true) {
    console.log(true);
  } else {
    console.log(false);
  }
}*/

const esPrimo = numero =>{
  let primo = true;

  if (numero === 0 || numero === 1) {
    console.log(`Los numeros 0 y 1 no son considerados primos`);
  } else {
    for (let i = 2; i < numero; i++) {
      if (numero % i == 0) primo = false;
    }
  }
  if (primo == true) {
    console.log(true);
  } else {
    console.log(false);
  }
}

esPrimo(67);

/*function esVerdadero(valor) {
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero”
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí
  if (valor == true) {
    console.log(`Soy verdadero`);
  } else {
    console.log(`Soy falso`);
  }
}*/

const esVerdadero = valor =>{
  if (valor == true) {
    console.log(`Soy verdadero`);
  } else {
    console.log(`Soy falso`);
  }
}

esVerdadero(true);

function tablaDelSeis() {
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí
  let resultado;

  for (let i = 6; i <= 6; i++) {
    for (let j = 0; j <= 10; j++) {
      console.log(`${i}` * `${j}`);
    }
  }
}
tablaDelSeis();

/*function tieneTresDigitos(numero) {
  //Leer un número entero y determinar si tiene 3 dígitos.
  //Escribe tu código aquí
  if (numero.toString().length === 3) {
    console.log(`El numero ${numero} tiene 3 digitos`);
  }else{
    console.log(`El numero ${numero} NO tiene 3 digitos`);
  }
}*/

const tieneTresDigitos = numero =>{
  if (numero.toString().length === 3) {
    console.log(`El numero ${numero} tiene 3 digitos`);
  }else{
    console.log(`El numero ${numero} NO tiene 3 digitos`);
  }
}

tieneTresDigitos(126);

/*function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
  let veces = 0;
  let acumulador = 0;
  do {
    acumulador = numero += 5;
    console.log(acumulador);
    veces++
  
  } while (veces < 8);
}*/

const doWhile = numero =>{
  let veces = 0;
  let acumulador = 0;
  do {
    acumulador = numero += 5;
    console.log(acumulador);
    veces++
  
  } while (veces < 8);
}

doWhile(122);
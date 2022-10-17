// No cambies los nombres de las funciones.

let miArray = [1, 2, 9];
let miArrayString1 = [`Hola`, `mundo!`];

/*function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  console.log(array[0]);
}*/

const devolverPrimerElemento = (array) => {
  console.log(array[0]);
};

devolverPrimerElemento(miArray);

/*function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  console.log(array[array.length-1]);
}*/

const devolverUltimoElemento = (array) => {
  console.log(array[array.length - 1]);
};

devolverUltimoElemento(miArray);

/*function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  console.log(array.length);
}*/

const obtenerLargoDelArray = (array) => {
  console.log(array.length);
};

obtenerLargoDelArray(miArray);

/*function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    console.log(array[i] += 1);
    
  }
}*/

const incrementarPorUno = (array) => {
  for (let i = 0; i < array.length; i++) {
    console.log((array[i] += 1));
  }
};

incrementarPorUno(miArray);

/*function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
}*/

const agregarItemAlFinalDelArray = (array, elemento) => {
  array.push(elemento);
};

agregarItemAlFinalDelArray(miArray, 11);
console.log(miArray);

/*function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  console.log(array.unshift(elemento));
}*/

const agregarItemAlComienzoDelArray = (array, elemento) => {
  console.log(array.unshift(elemento));
};

agregarItemAlComienzoDelArray(miArray, 5);
console.log(miArray);

/*function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  console.log(palabras.join(` `));
}*/

const dePalabrasAFrase = (palabras) => {
  console.log(palabras.join(` `));
};

dePalabrasAFrase(miArrayString1);

/*function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:

  console.log(array.includes(elemento));
}*/

const arrayContiene = (array, elemento) => {
  console.log(array.includes(elemento));
};

arrayContiene(miArray, 3);

/*function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  console.log(numeros.reduce((acumulador,actual)=> acumulador + actual));
}*/

const agregarNumeros = (numeros) => {
  console.log(numeros.reduce((acumulador, actual) => acumulador + actual));
};

agregarNumeros(miArray);

/*function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
 let acumulador = 0;

  for (let i = 0; i < resultadosTest.length; i++) {
    acumulador += resultadosTest[i];
  
}
console.log(acumulador/resultadosTest.length);
}*/

const promedioResultadosTest = (resultadosTest) => {
  let acumulador = 0;

  for (let i = 0; i < resultadosTest.length; i++) {
    acumulador += resultadosTest[i];
  }
  console.log(acumulador / resultadosTest.length);
};

promedioResultadosTest(miArray);

/*function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  console.log(Math.max(...numeros));
}*/

const numeroMasGrande = (numeros) => {
  console.log(Math.max(...numeros));
};

numeroMasGrande(miArray);

//Hecho con la explicación del profe del 11/10/22
//Las arrow function entran en conflicto con la palabra reservada "arguments"
function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if (arguments.length < 1) {
    console.log(0);
  }
  let total = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    total *= arguments[i];
  }
  console.log(total);
}

multiplicarArgumentos(4, 2);

/*function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí

  console.log(arreglo.filter(elements => elements > 18).length);

}*/

const cuentoElementos = (arreglo) => {
  console.log(arreglo.filter((elements) => elements > 18).length);
};

cuentoElementos(miArray);

/*function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario.
  //Escribe tu código aquí

  /*numeroDeDia.forEach(element => {
    if (element == 1 || element == 7) {
      console.log(`Es fin de semana`);
    }else if (element == 2 || element == 3 || element == 4 || element == 5 || element == 6) {
      console.log(`Es día laboral`);
    }else{
      console.log(`Ese día no existe`);
    }
    
  });*/

/*switch (numeroDeDia) {
    case 1:
      console.log(`Es fin de semana`);
      break;
    case 7:
      console.log(`Es fin de semana`);
      break;
    case 2:
      console.log(`Es día laboral`);
      break;
    case 3:
      console.log(`Es día laboral`);
      break;
    case 4:
      console.log(`Es día laboral`);
      break;
    case 5:
      console.log(`Es día laboral`);
      break;
    case 6:
      console.log(`Es día laboral`);
      break;
    default:
      console.log(`Ese día no existe`);
      break;
  }*/
/*if (numeroDeDia == 1 || numeroDeDia == 7) {
    console.log(`Es fin de semana`);
  } else if (
    numeroDeDia == 2 ||
    numeroDeDia == 3 ||
    numeroDeDia == 4 ||
    numeroDeDia == 5 ||
    numeroDeDia == 6
  ) {
    console.log(`Es día laboral`);
  } else {
    console.log(`Ese día no existe`);
  }
}*/

const diaDeLaSemana = (numeroDeDia) => {
  if (numeroDeDia == 1 || numeroDeDia == 7) {
    console.log(`Es fin de semana`);
  } else if (
    numeroDeDia == 2 ||
    numeroDeDia == 3 ||
    numeroDeDia == 4 ||
    numeroDeDia == 5 ||
    numeroDeDia == 6
  ) {
    console.log(`Es día laboral`);
  } else {
    console.log(`Ese día no existe`);
  }
};

diaDeLaSemana(5);

//Hecho con la explicación del profe del 11/10/22
/*function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí

  n=n.toString();
  console.log(n.charAt(0)==9)
}*/

const empiezaConNueve = (n) => {
  n = n.toString();
  console.log(n.charAt(0) == 9);
};

empiezaConNueve(97);

/*function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí
  console.log(arreglo.every((elements) => arreglo[0] == elements));
};*/

const todosIguales = (arreglo) => {
  console.log(arreglo.every((elements) => arreglo[0] == elements));
};

todosIguales(miArray);

//let meses = [`Diciembre`, `Marzo`, `Octubre`, `Enero`, `Noviembre`];
/*function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  let nuevoArray = [];
  if (!(array.includes(`Enero`) && array.includes(`Marzo`) && array.includes(`Noviembre`))) {
    console.log(`No se encontraron los meses pedidos`);
  }else{

for (let i = 0; i < array.length; i++) {
  if (array[i] == `Enero` || array[i] == `Marzo` || array[i] == `Noviembre`) {
    nuevoArray.push(array[i]);
  }
  
}

  console.log(nuevoArray);
  
}
}*/
let meses = [`Diciembre`, `Marzo`, `Octubre`, `Enero`, `Noviembre`];
const mesesDelAño = (array) => {
  let nuevoArray = [];

  if (
    !(
      array.includes(`Enero`) &&
      array.includes(`Marzo`) &&
      array.includes(`Noviembre`)
    )
  ) {
    console.log(`No se encontraron los meses pedidos`);
  } else {
    nuevoArray = array.filter(
      (elementos) =>
        elementos == `Enero` || elementos == `Marzo` || elementos == `Noviembre`
    );
    console.log(nuevoArray);
  }
};

mesesDelAño(meses);

//let numeros2 = [2, 8, 99, 100, 101, 250, 503];
/*function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  let nuevoArray = [];

  nuevoArray = array.filter((elementos) => elementos > 100);
  console.log(nuevoArray);
}*/
let numeros2 = [2, 8, 99, 100, 101, 250, 503];
const mayorACien = (array) => {
  let nuevoArray = [];

  nuevoArray = array.filter((elementos) => elementos > 100);
  console.log(nuevoArray);
};

mayorACien(numeros2);

//let test = [-2];
/*function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  let nuevoArray = [];
  //let suma = 0;
  console.log(numero);

  for (let i = 0; i < 10; i++) {
    nuevoArray = numero[i] += 2;
    console.log(nuevoArray);

    if (nuevoArray == i) {
      console.log(`Se interrumpió la ejecucuión`);
      break;
    }
  }
}*/

let test = [-2];
const breakStatement = (numero) => {
  let nuevoArray = [];

  console.log(numero);

  for (let i = 0; i < 10; i++) {
    nuevoArray = numero[i] += 2;
    console.log(nuevoArray);

    if (nuevoArray == i) {
      console.log(`Se interrumpió la ejecucuión`);
      break;
    }
  }
};

breakStatement(test);

//let test2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
/*function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:

  let nuevoArray = [];
  console.log(numero);

  for (let i = 0; i < 10; i++) {
    nuevoArray = numero[i] += 2;
    console.log(nuevoArray);

    if (i == 5) {
      continue;
    }

    console.log(nuevoArray);
  }
}*/

let test2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const continueStatement = (numero) => {
  let nuevoArray = [];
  console.log(numero);

  for (let i = 0; i < 10; i++) {
    nuevoArray = numero[i] += 2;
    console.log(nuevoArray);

    if (i == 5) {
      continue;
    }

    console.log(nuevoArray);
  }
};

continueStatement(test2);

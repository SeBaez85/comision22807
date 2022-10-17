/* Ejercicio  arrays Sebastián Báez*/

/* 1)Declarar un array que vamos a llamar “clasificaciones” con los siguientes valores:
Marcos, Franco, Agostina, Leon, Juan Cruz,Eduardo */

let clasificaciones = [
  `Marcos`,
  `Franco`,
  `Agostina`,
  `Leon`,
  `Juan Cruz`,
  `Eduardo`,
];

/* (vamos a suponer que esa es la orden de clasificación de un concurso) */

/* 2)recorre el array (clasificaciones) e Imprime la clasificación actual.
 (realizar una funcion "mostrarClasificacion()" esa funcion debe recorrer el array con un bucle for y mostrar la clasificacion) */

const mostrarClasificacion = () => {
  for (let i = 0; i < clasificaciones.length; i++) {
    console.log(`${i + 1}. ${clasificaciones[i]}`);
  }
};

mostrarClasificacion();

//modo Correcto ForEach (pueod usar tambien document.write)

/* 3)El concurso continua, y se van modifican esas posiciones anteriores. Debemos cambiar en el array: */
/* a)Leon adelanta a Agostina */

clasificaciones.splice(2, 2, `Leon`, `Agostina`);
//mostrarClasificacion();

/* b)Eduardo es descalificado y se elimina del concurso */

clasificaciones.pop();
//mostrarClasificacion();

/* c)Detrás de Marcos y antes de Franco se clasifican dos nuevas concursantes: Julieta y Martina, en ese orden */

clasificaciones.splice(1, 0, `Julieta`, `Martina`);
//mostrarClasificacion();

/* d)Hay una nueva participante que pasa a encabezar la clasificación: Alicia */
clasificaciones.unshift(`Alicia`);
//mostrarClasificacion();

/* e)muestra la clasificación actualizada (mostrarClasificacion())y comprueba que se ha hecho correctamente  */
mostrarClasificacion();
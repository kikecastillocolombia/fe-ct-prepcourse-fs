function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
   // Inicializar el índice del número más grande
   var indiceMayor = 0;
   // Iterar sobre el arreglo
   for (var i = 1; i < array.length; i++) {
     // Verificar si el elemento actual es mayor que el elemento en el índiceMayor
     if (array[i] > array[indiceMayor]) {
       // Actualizar el índice del número más grande
       indiceMayor = i;
     }
   }
   // Devolver el índice del número más grande
   return indiceMayor; 
}

module.exports = encontrarIndiceMayor;

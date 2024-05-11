function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
   // Crear un nuevo arreglo para almacenar los elementos duplicados
   var duplicados = [];
   // Iterar sobre el arreglo
   for (var i = 0; i < array.length; i++) {
     // Duplicar el elemento actual y agregarlo al nuevo arreglo
     duplicados.push(array[i] * 2);
   }
   // Devolver el arreglo con los elementos duplicados
   return duplicados;
}

module.exports = duplicarElementos;

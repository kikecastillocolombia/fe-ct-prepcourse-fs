function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:
    // Ordenar el arreglo de menor a mayor
    array.sort(function(a, b) {
      // Verificar si los elementos son strings antes de llamar a toLowerCase()
      if (typeof a === 'string' && typeof b === 'string') {
        // Comparar los elementos como cadenas de texto, ignorando mayúsculas y minúsculas
        return a.toLowerCase().localeCompare(b.toLowerCase());
      } else {
        // Si los elementos no son strings, compararlos como números
        return a - b;
      }
    });
    // Devolver el arreglo resultante
    return array;
  }
  
  module.exports = ordenarArray;
module.exports = ordenarArray;

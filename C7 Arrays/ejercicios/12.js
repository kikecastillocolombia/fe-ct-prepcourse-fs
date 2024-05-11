function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
   // Iterar sobre el arreglo
   for (var i = 0; i < array.length; i++) {
    // Verificar si el elemento es un string
    if (typeof array[i] === 'string') {
      // Convertir el string a mayúsculas y reemplazar el elemento original
      array[i] = array[i].toUpperCase();
    }
  }
  // Devolver el arreglo resultante con los strings convertidos a mayúsculas
  return array;
}

module.exports = convertirStringAMayusculas;

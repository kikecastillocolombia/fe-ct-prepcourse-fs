function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  // Verificar si el arreglo está vacío
  if (array.length === 0) {
    return true; // Si el arreglo está vacío, todos los elementos son iguales (se considera el caso especial)
  }
  
  // Obtener el primer elemento del arreglo
  var primerElemento = array[0];
  
  // Iterar sobre los elementos del arreglo desde el segundo elemento
  for (var i = 1; i < array.length; i++) {
    // Verificar si el elemento actual es diferente al primer elemento
    if (array[i] !== primerElemento) {
      return false; // Si hay algún elemento diferente al primer elemento, retornar false
    }
  }
  
  // Si todos los elementos son iguales, retornar true
  return true;
}

module.exports = todosIguales;

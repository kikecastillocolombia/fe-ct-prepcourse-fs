function esArrayNoVacio(arr) {
  // La función recibe un argumento "arr".
  // Comprueba si este argumento es un array y si tiene al menos un elemento.
  // Si es así, retorna true, de lo contrario, retorna false.
  // Tu código:
    // Verificar si arr es un array y si tiene al menos un elemento
    if (Array.isArray(arr) && arr.length > 0) {
      // Si es un array y tiene al menos un elemento, retornar true
      return true;
    } else {
      // Si no es un array o no tiene elementos, retornar false
      return false;
    }
  }
  
  module.exports = esArrayNoVacio;
  
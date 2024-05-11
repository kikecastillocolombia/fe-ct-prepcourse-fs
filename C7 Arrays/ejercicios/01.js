function devolverPrimerElemento(array) {
  // Retornar el primer elemento del arreglo recibido.
  // Tu código:
    // Verificar si el arreglo no está vacío
    if (array && array.length > 0) {
      // Devolver el primer elemento
      return array[0];
    } else {
      // Si el arreglo está vacío, devolver null o cualquier otro valor que prefieras
      return null;
    }
}

module.exports = devolverPrimerElemento;

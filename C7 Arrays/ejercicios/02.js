function devolverUltimoElemento(array) {
  // Retornar el último elemento del arreglo recibido.
  // Tu código:
  // Verificar si el arreglo no está vacío
  if (array && array.length > 0) {
    // Devolver el último elemento
    return array[array.length - 1];
  } else {
    // Si el arreglo está vacío, devolver null o cualquier otro valor que prefieras
    return null;
  }
}

module.exports = devolverUltimoElemento;

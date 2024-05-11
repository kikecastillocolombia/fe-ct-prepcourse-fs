function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  // Inicializar un contador para contar los elementos mayores a 10
  var contador = 0;
  // Iterar sobre el arreglo
  for (var i = 0; i < array.length; i++) {
    // Verificar si el elemento es mayor a 10
    if (array[i] > 10) {
      // Incrementar el contador
      contador++;
    }
  }
  // Devolver la cantidad de elementos mayores a 10
  return contador;
}

module.exports = contarElementosMayoresA10;

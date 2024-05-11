function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  // Utilizar el método map() para multiplicar cada elemento por su índice
  var resultado = array.map(function(elemento, indice) {
    return elemento * indice;
  });
  // Devolver el nuevo arreglo con los resultados
  return resultado;
}

module.exports = multiplicarElementosPorIndice;

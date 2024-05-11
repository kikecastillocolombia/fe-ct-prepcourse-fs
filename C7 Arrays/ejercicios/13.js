function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  // Filtrar los números pares utilizando el método filter()
  var numerosPares = array.filter(function(elemento) {
    return elemento % 2 === 0;
  });
  // Devolver el arreglo resultante con los números pares
  return numerosPares;
}

module.exports = filtrarNumerosPares;

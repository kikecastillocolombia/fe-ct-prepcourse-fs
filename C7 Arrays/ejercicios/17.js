function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
    // Utilizar el método reduce() para sumar todos los elementos del arreglo
    var suma = arrayOfNums.reduce(function(acumulador, elemento) {
      return acumulador + elemento;
    }, 0);
    // Devolver la suma de todos los elementos
    return suma;
}

module.exports = agregarNumeros;

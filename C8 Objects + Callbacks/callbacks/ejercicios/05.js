function forEach(array, cb) {
  // Recibes un arreglo y un callback.
  // Itera sobre el arreglo y por cada elemento iterado, ejecuta el callback con este valor.
  // Tu código:

    // Iterar sobre el arreglo
    for (let i = 0; i < array.length; i++) {
      // Ejecutar el callback con el elemento actual del arreglo
      cb(array[i]);
    }
  }
  

module.exports = forEach;

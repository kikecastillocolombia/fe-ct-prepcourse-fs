function map(array, cb) {
  // Itera sobre el arreglo y por cada elemento, pasárselo como argumento al callback.
  // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
  // Retorna el nuevo arreglo.
  // Tu código:


    // Crear un nuevo arreglo para almacenar los resultados
    let newArray = [];
    // Iterar sobre el arreglo
    for (let i = 0; i < array.length; i++) {
      // Llamar al callback con el elemento actual y almacenar el resultado en el nuevo arreglo
      newArray.push(cb(array[i]));
    }
    // Retornar el nuevo arreglo
    return newArray;
  }
  module.exports = map;
  
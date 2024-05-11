const buscarElemento = (array, callback) => {
  // Busca un elemento en el array y retornalo.
  // Si el elemento no se encuentra, devuelve el mensaje "No se encontró el elemento".
  // La función de callback es la encargada de evaluar si el elemento fue encontrado.
  // Tu código:
  // Iterar sobre el array
  for (let i = 0; i < array.length; i++) {
    // Si el callback devuelve true para el elemento actual, retornar el elemento
    if (callback(array[i])) {
      return array[i];
    }
  }
  // Si no se encuentra el elemento, devolver el mensaje correspondiente
  return "No se encontró el elemento";
}

module.exports = buscarElemento;

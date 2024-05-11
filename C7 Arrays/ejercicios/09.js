function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:
   // Generar un índice aleatorio
  var indiceAleatorio = Math.floor(Math.random() * array.length);
  // Devolver el elemento correspondiente al índice aleatorio
  return array[indiceAleatorio];
}

module.exports = obtenerElementoAleatorio;

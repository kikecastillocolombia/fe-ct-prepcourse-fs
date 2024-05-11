function encontrarElemento(num, array) {
  // Buscar el número dentro del arreglo
  var indice = array.indexOf(num);
  // Retornar el índice encontrado o -1 si no se encuentra
  return indice;
}

module.exports = encontrarElemento;

function filter(arrayOfStrings) {
  // Debes identificar todos los elementos en el arreglo que comiencen con la letra "a".
  // Luego, retorna un nuevo arreglo con estos elementos.
  // Tu código:
  // Usamos el método filter para filtrar los elementos que cumplen la condición
  return arrayOfStrings.filter(string => string.startsWith('a'));
}

module.exports = filter;

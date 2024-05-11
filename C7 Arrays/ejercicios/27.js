function dePalabrasAFrase(palabras) {
  // El argumento "palabras" es un arreglo de strings.
  // Retorna un string donde todas las palabras estén concatenadas,
  // con un espacio entre cada palabra.
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
  // Tu código:
  // Utilizar el método join() para concatenar todas las palabras con un espacio entre cada una
  var frase = palabras.join(' ');
  // Devolver la frase resultante
  return frase;
}

module.exports = dePalabrasAFrase;

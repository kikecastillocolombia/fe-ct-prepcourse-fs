function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
  // Convertir el string en un arreglo de caracteres, invertir el arreglo y unir los caracteres nuevamente en un string
  var textoInvertido = texto.split('').reverse().join('');
  // Devolver el string invertido
  return textoInvertido;
}

module.exports = invertirTexto;

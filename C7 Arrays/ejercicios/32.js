function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:
    // Convertir la cadena a minúsculas y quitar los espacios en blanco
    var cadenaSinEspacios = string.toLowerCase().replace(/\s/g, '');
    // Obtener el reverso de la cadena
    var reverso = cadenaSinEspacios.split('').reverse().join('');
    // Verificar si la cadena original es igual a su reverso
    return cadenaSinEspacios === reverso;
  }
  
  module.exports = esPalindromo;
  
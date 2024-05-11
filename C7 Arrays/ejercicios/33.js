function combine(str1, str2, str3) {
  // Esta función debe combinar de forma alternada cada caracter de cada string.
  // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
  // Los strings pueden tener cualquier tamaño.
  // EJEMPLOS
  // combine("abc", "", "123") == "a1b2c3"
  // combine("abc", "12345", "") == "a1b2c345"
  // combine("abc", "12345", "67") == "a16b27c345"
  // Tu código:
    let result = ""; // Inicializar una variable para almacenar el resultado combinado
  
    // Iterar sobre la longitud máxima de los tres strings
    for (let i = 0; i < Math.max(str1.length, str2.length, str3.length); i++) {
      // Concatenar los caracteres de cada string si están definidos
      if (str1[i] !== undefined) result += str1[i];
      if (str2[i] !== undefined) result += str2[i];
      if (str3[i] !== undefined) result += str3[i];
    }
  
    return result; // Devolver el resultado combinado
  }
  
  module.exports = combine;
  
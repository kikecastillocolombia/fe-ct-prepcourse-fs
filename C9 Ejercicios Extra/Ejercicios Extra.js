/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:
    var arrayResultante = [];
  
    for (var clave in objeto) {
      if (objeto.hasOwnProperty(clave)) {
        arrayResultante.push([clave, objeto[clave]]);
      }
    }
  
    return arrayResultante;
  }
  

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:
    var count = {};
    
    for (var i = 0; i < string.length; i++) {
      var char = string[i];
      
      if (count[char]) {
        count[char]++;
      } else {
        count[char] = 1;
      }
    }
    
    var sortedKeys = Object.keys(count).sort();
    
    var sortedCount = {};
    sortedKeys.forEach(function(key) {
      sortedCount[key] = count[key];
    });
    
    return sortedCount;
  }
  

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:
    var uppercase = '';
    var lowercase = '';
  
    for (var i = 0; i < string.length; i++) {
      if (string[i] === string[i].toUpperCase()) {
        uppercase += string[i];
      } else {
        lowercase += string[i];
      }
    }
  
    return uppercase + lowercase;
  }
  

function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:

    var palabras = frase.split(' ');
    var palabrasInvertidas = [];
  
    for (var i = 0; i < palabras.length; i++) {
      var palabraInvertida = '';
      for (var j = palabras[i].length - 1; j >= 0; j--) {
        palabraInvertida += palabras[i][j];
      }
      palabrasInvertidas.push(palabraInvertida);
    }
  
    return palabrasInvertidas.join(' ');
  }
  

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código: 
    var numeroStr = numero.toString();

    var longitud = numeroStr.length;

    var esCapicua = true;
  

    for (var i = 0; i < longitud / 2; i++) {
      if (numeroStr[i] !== numeroStr[longitud - 1 - i]) {
        esCapicua = false;
        break; 
      }
    }
    if (esCapicua) {
      return "Es capicua";
    } else {
      return "No es capicua";
    }
  }
  

function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:

    return string.replace(/[abc]/gi, '');
  }
  

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:
    return arrayOfStrings.sort((a, b) => a.length - b.length);
  }
  

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:
  return array1.filter(elemento => array2.includes(elemento));
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};

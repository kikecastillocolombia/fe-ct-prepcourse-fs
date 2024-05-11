function esAnagrama(str1, str2) {
  // La función recibe dos argumentos "str1" y "str2" que son strings.
  // Determina si los dos strings son anagramas.
  // Devuelve true de ser así, sino retorna false.
  // IMPORTANTE: Un anagrama es una palabra que se forma
  // con las mismas letras que otra, pero en orden diferente.
  // Tu código:
}

test('anagrama de palabras iguales', () => {
  expect(esAnagrama('hola', 'hola')).toBe(true);
});

test('anagrama de palabras diferentes', () => {
  expect(esAnagrama('hola', 'aloh')).toBe(true);
});

test('palabras con diferente longitud', () => {
  expect(esAnagrama('hola', 'holaa')).toBe(false);
});

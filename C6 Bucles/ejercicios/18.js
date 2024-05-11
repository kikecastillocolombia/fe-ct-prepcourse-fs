function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código: // Si a es mayor que b, el producto será cero
  if (a > b) {
    return 0; // Si a es mayor que b, el producto será cero
  }

  let producto = 1;
  for (let i = a; i <= b; i++) {
    producto *= i;
  }
  return Math.abs(producto); // Devuelve el valor absoluto del producto
}

module.exports = productoEntreNúmeros;
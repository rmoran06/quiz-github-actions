const { sumar, restar, multiplicar } = require('./calculadora');

if (sumar(2, 3) !== 5) {
  console.error('Error: sumar(2, 3) debe ser 5');
  process.exit(1);
}

if (restar(10, 5) !== 5) {
  console.error('Error: restar(10, 5) debe ser 5');
  process.exit(1);
}

if (multiplicar(4, 5) !== 20) {
  console.error('Error: multiplicar(4, 5) debe ser 20');
  process.exit(1);
}

console.log('Todos los tests pasaron');
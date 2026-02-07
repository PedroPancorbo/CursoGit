// Archivo de prueba para practicar Git

// Función para saludar
function saludar(nombre) {
    console.log(`Hola, ${nombre}! Bienvenido a tu práctica de Git.`);
}

// Función para calcular el factorial
function factorial(n) {
    if (n < 0) return "No definido";
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

// Ejecución de pruebas
saludar("Pedro");

let numero = 5;
console.log(`Factorial de ${numero}:`, factorial(numero));

// Array de ejemplo
const frutas = ["manzana", "pera", "plátano"];
frutas.forEach(fruta => console.log("Fruta:", fruta));

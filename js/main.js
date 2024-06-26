// Función para calcular el factorial de un número
function factorial(n) {
    if (n < 0) {
        throw new Error("El número debe ser no negativo");
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Función principal para probar el cálculo del factorial
function main() {
    try {
        const num = "10";
        const numAsNumber = parseInt(num); // Convertir la cadena a número
        console.log(`El factorial de ${numAsNumber} es ${factorial(numAsNumber)}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}

main();

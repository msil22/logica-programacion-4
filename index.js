function fibonacci(n) {
    if (n <= 1) {
    return n;
    } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

const n = parseFloat(prompt("Ingrese un número de límite para la secuencia Fibonacci: "));
document.write(`El límite ${n} representa los siguientes números de la secuencia Fibonacci:<br>`);

for (let i = 0; i < n; i++) {
    const resultado = fibonacci(i);
    document.write(`Número ${i}: ${resultado}<br>`);
}
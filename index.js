/**
 * Calculates the Fibonacci number for a given input.
 * @param {number} n - The input number.
 * @returns {number} - The Fibonacci number for the given input.
 */
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

/**
 * Calculates the Fibonacci number asynchronously using a Promise.
 * @param {number} n - The input number.
 * @returns {Promise<number>} - A Promise that resolves to the Fibonacci number.
 */
const dofibonacci = (n) => new Promise((resolve) => {
    const start = Date.now();
    console.log("started at " + start);
    const result = fibonacci(n);
    const end = Date.now();
    console.log(`fibonacci of ${n} is ${result} in ${end - start}ms`);
    resolve(result);
});

/**
 * Executes the main logic.
 * Calculates Fibonacci numbers asynchronously and logs the results.
 */
const main = async () => {
    const start = Date.now();
    const results = await Promise.all([dofibonacci(45), dofibonacci(45), dofibonacci(45), dofibonacci(45)]);
    console.log(results);
    console.log(`Total time: ${Date.now() - start}ms`);
}

main();
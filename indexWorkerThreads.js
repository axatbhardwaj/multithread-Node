const { Worker } = require('worker_threads');

const dofibonacci = async (n) => {
    return new Promise((resolve) => {
        const start = Date.now();
        console.log("started at " + start);
        //start the worker thread
        const worker = new Worker('./fib.js', { workerData: { n } });

        //wait for the worker thread to finish
        worker.once('message', (result) => {
            console.log(`worker [${worker.threadId}] fib of ${n} is ${result} in ${Date.now() - start}ms`);
            resolve(result);
        })

        //listen for errors
        worker.once('error', (err) => {
            console.error(err);
            reject(err);
        })
    })
}

const main = async () => {
    const results = await Promise.all([dofibonacci(45), dofibonacci(45), dofibonacci(45), dofibonacci(45)]);
    console.log(results);
}

main();
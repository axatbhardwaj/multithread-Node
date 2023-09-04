const express = require('express');
const app = express();
const { isMainThread } = require('worker_threads');
const argon2 = require('argon2');
const { performance } = require('perf_hooks');
const crypto = require('crypto');

//will try to hash an array of randomly generated numbers
const port = 3001;

const getRandom = () => {
    return crypto.randomInt(0, 10000)
}

let array = []
const populateArray = async (array) => {
    for (let i = 0; i < 1_000_000; i++) {
        array.push(getRandom())
    }
    return array
}

const hash = async (number) => {
    return await argon2.hash(number.toString())
}

const numberToHash = async (array) => {
    const newArray = array.map((number) => hash(number))
    array = newArray
}

app.get('/', (req, res) => {
    const tik = performance.now();
    populateArray(array);
    numberToHash(array);
    const tok = performance.now();
    console.log(tok - tik);
    res.send('Multithread testing');
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})

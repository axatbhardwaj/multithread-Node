const express = require('express');
const app = express();
const { isMainThread } = require('worker_threads');
const { getRandom } = require('@axatbhardwaj/randnum')
const argon2 = require('argon2');


//will try to hash an array of randomly generated numbers


const port = 5001;

const populateArray = async () => {
    const array = []
    for (let i = 0; i < 1_000_000_000_000; i++) {
        array.push(getRandom(0, 100000))
    }
    return array
}

const hash = async (number) => {
    return await argon2.hash(number.toString())
}



app.get('/', (req, res) => {
    res.send('Multthread testing');
})

app.get('/test', (req, res) => {

})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})

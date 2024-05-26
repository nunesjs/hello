console.log('ola!')

function Sum(a, b){
    const r = a + b
    return console.log(r)
}

Sum(3, 6)

import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.end('ola')
})

const seila = 1
console.log(seila)

app.listen(3030)

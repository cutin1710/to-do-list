const express = require('express')
const cors = require('cors')
const db = require('./db')

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    db.query("INSERT INTO test (nome) VALUE ('Gabriel')")
})

const port = 3000
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
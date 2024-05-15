const express = require('express')
const cors = require('cors')
const tasksRoutes =  require('./routes/tasks')
const db = require('./db')

const app = express()

app.use(express.json())
app.use(cors())

app.use('/', tasksRoutes)

app.post('/to-do-list', (req, res) => {
    const name = req.body.name
    const content = req.body.content

    db.query("SELECT * FROM tasks WHERE name = ?", [name], (err, result) => {
        if(err) {
            res.send(err)
        }
        if(result.length == 0) {
            db.query("INSERT INTO tasks (name, task) VALUES (?, ?)", [name, content], (err, response) => {
                if(err) {
                    res.send(err)
                }

                res.send({ msg: "Tarefa salva" })
            })
        } else {
            res.send({ msg: "Insira uma tarefa não existente" })
        }
    })
})

const port = 3001
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
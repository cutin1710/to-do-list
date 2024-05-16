const db  = require('../db')

const getTasks = (req, res) => {
    const q = "SELECT * FROM tasks"

    db.query(q, (err, data) => {
        if(err) return res.json(err)

        return res.status(200).json(data)
    })
}

const updateTask = (req, res) => {
    const q = "UPDATE tasks SET `name` = ?, `task` WHERE `id` = ?"

    const values = [
        req.body.name,
        req.body.task,
    ]

    db.query(q, [...values, req.params.id], (err) => {
        if(err) return res.json(err)

        return res.status(200).json("Tarefa atualizada com sucesso.")
    })
}

const deleteTask = (req, res) => {
    const q = "DELETE FROM tasks WHERE `id` = ? ";

    db.query(q, [req.params.id], (err) => {
        if(err) return req.json(err)

        return res.status(200).json("Tarefa deletada com sucesso.")
    })
}

module.exports = getTasks, updateTask, deleteTask
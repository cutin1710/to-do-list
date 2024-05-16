const express = require('express')
const getTasks = require('../controllers/tasks') 
const deleteTask = require('../controllers/tasks') 
const updateTask = require('../controllers/tasks') 

const router = express.Router()

router.get('/', getTasks)

router.put('/:id', updateTask)

router.delete('/:id', deleteTask)

module.exports = router
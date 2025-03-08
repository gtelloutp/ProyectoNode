const express = require('express')
const router = express.Router()
const {
    getUber,
    getUberById,
    setUber,
    updateUber,
    deleteUberById
} = require('../controllers/uber.controller')

//Endpoint para recuperar toda la coleccion de Ubers
router.get('/all', getUber)
//Endpoint para recuperar un Uber por su id
router.get('/ById/:id', getUberById)
//Endpoint para crear un nuevo Uber
router.post('/add', setUber)
//Endpoint para actualizar un Uber
router.put('/update/:id', updateUber)
//Endpoint para eliminar un Uber
router.delete('/delete/:id', deleteUberById)

module.exports = router

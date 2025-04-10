const express = require('express')
const router = express.Router()
const {
    getUberDataset,
    getUberDatasetById,
    setUberDataset,
    updateUberDataset,
    deleteUberDatasetById
} = require('../controllers/uber.controller')

//Endpoint para recuperar toda la coleccion de Ubers
router.get('/all', getUberDataset)
//Endpoint para recuperar un Uber por su id
router.get('/ById/:id', getUberDatasetById)
//Endpoint para crear un nuevo Uber
router.post('/add', setUberDataset)
//Endpoint para actualizar un Uber
router.put('/update/:id', updateUberDataset)
//Endpoint para eliminar un Uber
router.delete('/delete/:id', deleteUberDatasetById)

module.exports = router

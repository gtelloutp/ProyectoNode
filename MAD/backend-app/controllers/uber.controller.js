const express=require("express");
const router=express.Router();
const UberDataset=require("../models/review_UberDataset.model");


// Función para recuperar la colección de Uber
const getUberDataset = async(req, res) => {
   try {
       const Uber = await UberDataset.find({});
       res.status(200).json(Uber);
   } catch (error) {
       res.status(500).json({
           status: "error: " + error.message
       });
   }
}

// Función para recuperar un elemento de la colección con base en el _id
const getUberDatasetById = async(req, res) => {
   try {
       // id proviene de una variable en la URL
       const { id } = req.params;
       const Uber = await UberDataset.find({'_id': id});
       res.status(200).json(Uber);
   } catch (error) {
       res.status(500).json({
           status: "error: " + error.message
       });
   }
}

// Función que agrega un elemento a la colección
const setUberDataset = async(req, res) => {
   try {
       const SimpleUber = await UberDataset.create( req.body );
       res.status(200).json(SimpleUber);
   } catch (error) {
       res.status(500).json({
           status: "error: " + error.message
       });
   }
}

// Función para actualizar un elemento de la colección usando su _id
const updateUberDataset = async(req, res) => {
   try {
       const { id } = req.params;
       const UpdatedUber = await UberDataset.findByIdAndUpdate(id, req.body );
       if (!UpdatedUber) {
           return res.status(400).json({
               status: "error",
               message: "Document not found"
           });
       }
       const Uber = await UberDataset.find({'_id': id});
       res.status(200).json(Uber);
   } catch (error) {
       res.status(500).json({
           status: "error: " + error.message
       });
   }
}

// Función para eliminar un elemento de la colección con base en el _id
const deleteUberDatasetById = async(req, res) => {
   try {
       // id proviene de una variable en la URL
       const { id } = req.params;
       const Uber = UberDataset.find({ '_id':id });
       if (!Uber) {
           res.status(400).json({
               message: "Document not found"
           });
       }
       const deletedUber = await UberDataset.deleteOne({'_id': id});
       res.status(200).json({
           message: "Document deleted"
       });
   } catch (error) {
       res.status(500).json({
           status: "error: " + error.message
       });
   }
}

module.exports = {
   getUberDataset,
   getUberDatasetById,
   setUberDataset,
   updateUberDataset,
   deleteUberDatasetById
}

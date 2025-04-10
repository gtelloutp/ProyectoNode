const express=require("express");
const router=express.Router();
const uberSchema=require("../models/review_UberDataset.model");


// Función para recuperar la colección de Uber
const getUber = async(req, res) => {
   try {
       const Uber = await uberSchema.find({});
       res.status(200).json(Uber);
   } catch (error) {
       res.status(500).json({
           status: "error: " + error.message
       });
   }
}

// Función para recuperar un elemento de la colección con base en el _id
const getUberById = async(req, res) => {
   try {
       // id proviene de una variable en la URL
       const { id } = req.params;
       const Uber = await uberSchema.find({'_id': id});
       res.status(200).json(Uber);
   } catch (error) {
       res.status(500).json({
           status: "error: " + error.message
       });
   }
}

// Función que agrega un elemento a la colección
const setUber = async(req, res) => {
   try {
       const SimpleUber = await uberSchema.create( req.body );
       res.status(200).json(SimpleUber);
   } catch (error) {
       res.status(500).json({
           status: "error: " + error.message
       });
   }
}

// Función para actualizar un elemento de la colección usando su _id
const updateUber = async(req, res) => {
   try {
       const { id } = req.params;
       const UpdatedUber = await uberSchema.findByIdAndUpdate(id, req.body );
       if (!UpdatedUber) {
           return res.status(400).json({
               status: "error",
               message: "Document not found"
           });
       }
       const Uber = await Uber.find({'_id': id});
       res.status(200).json(Uber);
   } catch (error) {
       res.status(500).json({
           status: "error: " + error.message
       });
   }
}

// Función para eliminar un elemento de la colección con base en el _id
const deleteUberById = async(req, res) => {
   try {
       // id proviene de una variable en la URL
       const { id } = req.params;
       const Uber = uberSchema.find({ '_id':id });
       if (!Uber) {
           res.status(400).json({
               message: "Document not found"
           });
       }
       const deletedUber = await Uber.deleteOne({'_id': id});
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
   getUber,
   getUberById,
   setUber,
   updateUber,
   deleteUberById
}

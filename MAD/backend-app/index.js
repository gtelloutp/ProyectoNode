//Invocacion de la libreria express
const express = require('express');
//invocacion de la libreria mongoose para la conexion a BD de mongodb 
const mongoose = require('mongoose');
//Importar las rutas de la coleccion review
const reviewRoutes = require('./routes/uber.route');
//Inicializacion  de la aplicacion basada en express
const app= express();

//Incorporando el parse de JSON
app.use(express.json())

//Determinacion del puerto

//Tareas CRUD y sus metodos
// C - create (crear, agregar)-- post
// R - Read (Leer o recuperar)-- get
// U - Update (actualizar) - put
// D - Delete (borrar o eliminar) - delete

//Endpoint por defecto 
app.get('/',(req, res)=>{
    res.send ('Bienvenido a mi servidor de APIs');
});

//Endpoints de la coleccion Ubers
app.use('/api/ubers', reviewRoutes);

//Definiendo la conexion a BD a travex de mongoose
//La definicion a BD es de tipo promesa
mongoose.connect('mongodb+srv://utp0159380:utp0159380@clustertest.bizex.mongodb.net/')
.then(()=>{
    console.log('Conectado a la BD de manera exitosa');
app.listen(3000,()=> {
    console.log('Servidor respondio en el puerto 3000');
});
})
.catch(()=>console.log('Ocurrio un problema al conectar a la BD'))

require('dotenv').config();


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');



const app = express();


app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGODB_URI, {
  
})
.then(() => console.log("MongoDB conectado"))
.catch((err) => console.error("Erro ao conectar no MongoDB:", err));


const tutorRoutes = require('./routes/tutores');
app.use('/api/tutores', tutorRoutes);

module.exports = app;

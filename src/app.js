require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB conectado"))
  .catch((err) => console.error("Erro ao conectar no MongoDB:", err));


app.get('/', (req, res) => {
  res.send('✅ API TutorMe funcionando na raiz!');
});


const tutorRoutes = require('./routes/tutores');
app.use('/api/tutores', tutorRoutes);

const alunosRoute = require('./routes/alunos');
app.use('/api/alunos', alunosRoute);


module.exports = app;

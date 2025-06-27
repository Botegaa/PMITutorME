require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Conexão com o MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB conectado"))
  .catch((err) => console.error("Erro ao conectar no MongoDB:", err));

// ✅ ROTA RAIZ (para testar no navegador)
app.get('/', (req, res) => {
  res.send('✅ API TutorMe funcionando na raiz!');
});

// ✅ IMPORTAÇÃO E USO DAS ROTAS
const tutorRoutes = require('../routes/tutores');
app.use('/api/tutores', tutorRoutes);

const alunosRoute = require('../routes/alunos');
app.use('/api/alunos', alunosRoute);

// Exporta o app para ser usado no server.js
module.exports = app;

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

const alunosRoute = require('./routes/alunos');
app.use('/api/alunos', alunosRoute);
// 1) Rota raiz para um “hello world” ou status
app.get('/', (req, res) => {
  res.send('✅ API TutorMe funcionando na raiz!');
});

// 2) Rotas da sua API
app.use('/api/tutores', tutorRoutes);

// 3) Start do servidor escutando em todas interfaces
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = app;

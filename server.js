const app = require('./src/app');

const tutorRoutes = require('./routes/tutores');
app.use('/api/tutores', tutorRoutes);

const alunosRoute = require('./routes/alunos');
app.use('/api/alunos', alunosRoute);

// Rota raiz para ver se está funcionando
app.get('/', (req, res) => {
  res.send('✅ API TutorMe funcionando na raiz!');
});

// Inicia o servidor só depois de configurar todas as rotas
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = app;
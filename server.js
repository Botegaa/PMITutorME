const app = require('./src/app');

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  
});
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


module.exports = app;
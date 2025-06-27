const app = require('./src/app');

app.get('/', (req, res) => {
  res.send('✅ API TutorMe funcionando na branch feature!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = app;
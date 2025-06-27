const mongoose = require('mongoose');

const alunoSchema = new mongoose.Schema({
  nome: String,
  email: String,
  senha: String,
  telefone: String,
  cpf: String,
  cidade: String,
  estado: String,
  endereco: String,
  criadoEm: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Aluno', alunoSchema, 'alunos');
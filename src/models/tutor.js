const mongoose = require('mongoose');

const tutorSchema = new mongoose.Schema({
  nome: String,
  email: String,
  senha: String,
  telefone: String,
  endereco: String,
  cidade: String,
  estado: String,
  cpf: String,
  materias: [String],
  biografia: String,
  nota: String,
  fotoPerfilUrl: String,
  criadoEm: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Tutor', tutorSchema, 'tutores');

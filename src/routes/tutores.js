const express = require('express');
const router = express.Router();
const Tutor = require('../models/tutor');
/* eslint-disable no-unused-vars */

router.post('/', async (req, res) => {
  try {
    const novoTutor = new Tutor(req.body);
    const salvo = await novoTutor.save();
    res.status(201).json(salvo);
  } catch (err) {
    res.status(400).json({ erro: err.message });
  }
});


router.get('/', async (req, res) => {
  const tutores = await Tutor.find();
  res.json(tutores);
});

router.put('/cpf/:cpf', async (req, res) => {
  try {
    const cpf = req.params.cpf;
    const atualizado = await Tutor.findOneAndUpdate(
      { cpf },
      req.body,
      { new: true, runValidators: true }
    );
    if (!atualizado) {
      return res.status(404).json({ erro: 'Tutor não encontrado' });
    }
    res.json(atualizado);
  } catch (err) {
    res.status(400).json({ erro: err.message });
  }
});


router.delete('/cpf/:cpf', async (req, res) => {
  try {
    const cpf = req.params.cpf;
    const deletado = await Tutor.findOneAndDelete({ cpf });
    if (!deletado) {
      return res.status(404).json({ erro: 'Tutor não encontrado' });
    }
    res.json({ mensagem: 'Tutor deletado com sucesso' });
  } catch (err) {
    res.status(400).json({ erro: err.message });
  }
});
router.post('/login', async (req, res) => {
  const { email, senha } = req.body;

  try {
    const tutor = await Tutor.findOne({ email });

    if (!tutor) {
      return res.status(404).json({ erro: 'Email não encontrado' });
    }

    if (tutor.senha !== senha) {
      return res.status(401).json({ erro: 'Senha incorreta' });
    }

    res.json({ mensagem: 'Login bem-sucedido', tutor });
  } catch (_erro) 
  {
    res.status(500).json({ erro: 'Erro interno no servidor' });
  }
});

module.exports = router;